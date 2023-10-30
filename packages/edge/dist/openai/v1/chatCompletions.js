export const chatCompletions = async ({ token, apiBase, body }) => {
    const response = await fetch(apiBase + '/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!response.ok)
        console.log(response);
    return response;
};
