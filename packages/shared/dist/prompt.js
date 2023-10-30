import { OPENAI_MAX_COMPLETION_TOKENS, OPENAI_TOKENS_FOR_COMPLETION } from './constants.js';
const defaultPrompt = `Answer the question as truthfully as possible using the provided context, and if the answer is not contained within the text below, say "Sorry, I don't have that information.". Context: {CONTEXT} Question: {QUERY} Answer:`;
const getEstimatedTokens = (value) => Math.round(value.length / 4);
const _getPrompt = (context, query, prompt) => (prompt ?? defaultPrompt).replace('{CONTEXT}', context).replace('{QUERY}', query).replaceAll('\n', ' ').trim();
const getContext = (text, availableTokens) => {
    const [, promptText] = text.reduce(([remainingTokens, context], text) => {
        const tokens = getEstimatedTokens(text);
        if (tokens > remainingTokens)
            return [remainingTokens, context];
        return [remainingTokens - tokens, context + '\n' + text];
    }, [availableTokens, '']);
    return promptText;
};
export const getPrompt = ({ context, query, prompt }) => {
    const availableTokens = OPENAI_MAX_COMPLETION_TOKENS - OPENAI_TOKENS_FOR_COMPLETION - getEstimatedTokens(_getPrompt('', '', prompt));
    return _getPrompt(getContext(context, availableTokens), query, prompt);
};
