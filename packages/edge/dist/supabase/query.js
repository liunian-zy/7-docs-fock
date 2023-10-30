import { EMBEDDING_MATCH_COUNT, SUPABASE_SIMILARITY_THRESHOLD } from '@7-docs/shared';
import { normalizeNamespace } from '@7-docs/shared';
const defaults = {
    similarity_threshold: SUPABASE_SIMILARITY_THRESHOLD,
    match_count: EMBEDDING_MATCH_COUNT
};
export const query = async ({ client, namespace, vector, args }) => {
    const ns = normalizeNamespace(namespace);
    const { error, data } = await client.rpc(`match_${ns}`, {
        ...defaults,
        ...args,
        query_embedding: vector
    });
    if (error instanceof Error)
        throw error;
    return (data?.map(d => {
        const metadata = JSON.parse(d.metadata);
        return { ...metadata, score: d.similarity };
    }) ?? []);
};
