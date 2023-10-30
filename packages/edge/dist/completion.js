import { uniqueByProperty, getPrompt } from '@7-docs/shared';
import { OpenAI } from './openai/v1/client.js';
import { isChatCompletionModel } from './openai/v1/util.js';
import { TransformWithEvent } from './util/stream.js';
import { getParams, pickFields, streamResponse } from './util.js';
export const getCompletionHandler = (options) => {
    const { OPENAI_API_KEY, OPENAI_API_BASE, system, query, prompt, fields = 'title,url,score' } = options;
    if (!OPENAI_API_KEY)
        throw new Error('OPENAI_API_KEY required');
    const client = new OpenAI(OPENAI_API_KEY, OPENAI_API_BASE);
    return async (req) => {
        const { query: input, previousQueries = [], previousResponses = [], embedding_model, completion_model, stream = true } = await getParams(req);
        if (!input)
            throw new Error('input required');
        if (!embedding_model)
            throw new Error('embedding_model required');
        if (!completion_model)
            throw new Error('completion_model required');
        const { embeddings } = await client.createEmbeddings({
            model: embedding_model,
            input: input + (previousQueries ? ' ' + previousQueries.join(' ') : '')
        });
        const [vector] = embeddings;
        const queryResults = await query(vector);
        const context = queryResults.map(metadata => metadata.content);
        const finalPrompt = getPrompt({ prompt, context, query: input });
        const uniqueByUrl = uniqueByProperty(queryResults, 'url');
        const keys = fields.split(',');
        const metadata = uniqueByUrl.map(pickFields(keys));
        const streamWithEvent = new TransformWithEvent({ event: 'metadata', data: JSON.stringify(metadata) });
        if (isChatCompletionModel(completion_model)) {
            const messages = [];
            if (system) {
                messages.push({
                    role: 'system',
                    content: system
                });
            }
            if (previousQueries && previousQueries.length > 0) {
                previousQueries.forEach((previousQuery, index) => {
                    messages.push({
                        role: 'user',
                        content: previousQuery
                    });
                    if (previousResponses && previousResponses[index]) {
                        messages.push({
                            role: 'assistant',
                            content: previousResponses[index]
                        });
                    }
                });
            }
            messages.push({
                role: 'user',
                content: finalPrompt
            });
            const body = { model: completion_model, messages };
            const completionResponse = await client.chatCompletions(body);
            if (!completionResponse.body)
                return new Response();
            if (!stream)
                return completionResponse;
            const transformedStream = completionResponse.body.pipeThrough(streamWithEvent.getTransformStream());
            return streamResponse(transformedStream);
        }
        else {
            const body = { model: completion_model, prompt: finalPrompt };
            const completionResponse = await client.completions(body);
            if (!completionResponse.body)
                return new Response();
            if (!stream)
                return completionResponse;
            const transformedStream = completionResponse.body.pipeThrough(streamWithEvent.getTransformStream());
            return streamResponse(transformedStream);
        }
    };
};
