import { SupabaseClient } from '@supabase/supabase-js';
import type { VectorDatabase, UpsertVectorOptions, QueryOptions } from '../types.js';
import type { MetaData } from '@7-docs/shared';
export declare class Supabase implements VectorDatabase {
    client: SupabaseClient;
    constructor();
    upsertVectors({ namespace, vectors }: UpsertVectorOptions): Promise<number>;
    query({ embedding, namespace }: QueryOptions): Promise<MetaData[]>;
}
