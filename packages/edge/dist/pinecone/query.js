import { EMBEDDING_MATCH_COUNT } from '@7-docs/shared';
import { ensureProtocol, sortByScoreDesc } from './util.js';
const defaults = {
    topK: EMBEDDING_MATCH_COUNT,
    includeMetadata: true
};
export const query = async ({ url, token, vector, namespace, options }) => {
    const response = await fetch(`${ensureProtocol(url)}/query`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': token
        },
        method: 'POST',
        body: JSON.stringify({ ...defaults, ...options, vector, namespace })
    });
    const data = await response.json();
    const matches = data.matches?.sort(sortByScoreDesc) ?? [];
    return matches
        .map(match => ({ ...match.metadata, score: match.score }))
        .filter((m) => !!m);
};
