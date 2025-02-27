import { ensureProtocol } from '../util.js';
export const upsert = async ({ url, token, body }) => {
    const response = await fetch(`${ensureProtocol(url)}/vectors/upsert`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': token
        },
        method: 'POST',
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        const text = await response.text();
        const message = `${response.status} ${response.statusText}: ${text ?? `Unable to upsert vectors`})`;
        throw new Error(message);
    }
    return response.json();
};
