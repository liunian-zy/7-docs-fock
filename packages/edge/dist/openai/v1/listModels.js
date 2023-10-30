export const listModels = async ({ token, apiBase }) => {
    const response = await fetch(apiBase + '/v1/models', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        method: 'GET'
    });
    const { error, data } = await response.json();
    if (error)
        throw new Error(error.message);
    return data;
};
