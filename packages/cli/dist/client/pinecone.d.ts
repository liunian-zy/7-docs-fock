import type { UpsertVectorOptions, VectorDatabase, QueryOptions } from '../types.js';
import type { MetaData } from '@7-docs/shared';
export declare class Pinecone implements VectorDatabase {
    token: string;
    url?: string;
    constructor();
    createIndex(name?: string, environment?: string): Promise<string | undefined>;
    upsertVectors({ namespace, vectors }: UpsertVectorOptions): Promise<number>;
    query({ embedding, namespace }: QueryOptions): Promise<MetaData[]>;
    clearNamespace(namespace: string): Promise<void>;
}
