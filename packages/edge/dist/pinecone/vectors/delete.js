import { ensureProtocol } from '../util.js';
export const deleteVector = async ({ url, token, body }) => {
    const response = await fetch(`${ensureProtocol(url)}/vectors/delete`, {
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
        const message = `${response.status} ${response.statusText}: ${text ?? `Unable to delete vectors`})`;
        throw new Error(message);
    }
};
