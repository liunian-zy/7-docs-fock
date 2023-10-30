export const getParams = async (req) => {
    const method = req.method;
    if (method === 'GET') {
        const url = new URL(req.url);
        const query = url.searchParams.get('query') ?? '';
        const previousQueries = url.searchParams.getAll('previousQueries');
        const previousResponses = url.searchParams.getAll('previousResponses');
        const embedding_model = url.searchParams.get('embedding_model') ?? undefined;
        const completion_model = url.searchParams.get('completion_model') ?? undefined;
        const stream = true;
        return {
            query: decodeURIComponent(query),
            previousQueries: previousQueries.map(decodeURIComponent),
            previousResponses: previousResponses.map(decodeURIComponent),
            embedding_model,
            completion_model,
            stream
        };
    }
    else {
        return await req.json();
    }
};
export const streamResponse = (body) => {
    const headers = { 'Content-Type': 'text/event-stream' };
    return new Response(body, { headers });
};
const isChatCompletion = (data) => data.object === 'chat.completion.chunk';
const isCompletion = (data) => data.object === 'text_completion';
export const getDelta = (data) => isChatCompletion(data) ? data.choices[0].delta.content : isCompletion(data) ? data.choices[0].text : '';
export const getText = (response) => response.choices[0].message?.content;
export const pickFields = (keys) => (results) => {
    const picked = {};
    // @ts-ignore TODO
    for (const key of keys)
        if (typeof results[key] !== 'undefined')
            picked[key] = results[key];
    return picked;
};
