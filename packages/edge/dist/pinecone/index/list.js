import { getControllerUrl } from '../util.js';
export const listIndexes = async ({ environment, token }) => {
    const response = await fetch(getControllerUrl(environment), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': token
        },
        method: 'GET'
    });
    if (!response.ok) {
        const text = await response.text();
        const message = `${response.status} ${response.statusText}: ${text ?? `Unable to list indexes`})`;
        throw new Error(message);
    }
    return response.json();
};
