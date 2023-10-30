import type { MetaData } from '@7-docs/shared';
import type { SupabaseClient } from '@supabase/supabase-js';
export type SupabaseRpcArgs = {
    similarity_threshold: number;
    match_count: number;
};
type Query = (options: {
    client: SupabaseClient;
    namespace: string;
    vector: number[];
    args?: Partial<SupabaseRpcArgs>;
}) => Promise<MetaData[]>;
export declare const query: Query;
export {};
