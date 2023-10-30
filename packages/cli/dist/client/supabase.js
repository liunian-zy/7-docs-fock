import { supabase } from '@7-docs/edge';
import { normalizeNamespace } from '@7-docs/shared';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_API_KEY } from '../env.js';
export class Supabase {
    client;
    constructor() {
        if (!SUPABASE_URL)
            throw new Error('Missing SUPABASE_URL environment variable');
        if (!SUPABASE_API_KEY)
            throw new Error('Missing SUPABASE_API_KEY environment variable');
        this.client = createClient(SUPABASE_URL, SUPABASE_API_KEY);
    }
    async upsertVectors({ namespace, vectors }) {
        const ns = normalizeNamespace(namespace);
        const rows = vectors.map(v => ({ id: v.id, embedding: v.values, metadata: JSON.stringify(v.metadata) }));
        const { error } = await this.client.from(ns).upsert(rows);
        if (error instanceof Error)
            throw error;
        return vectors.length;
    }
    async query({ embedding, namespace }) {
        return supabase.query({ client: this.client, namespace, vector: embedding });
    }
}
