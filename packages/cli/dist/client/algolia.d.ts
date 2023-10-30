import algoliasearch, { type SearchClient } from 'algoliasearch';
import type { UpsertVectorOptions, VectorDatabase, QueryOptions } from '../types.js';
import type { MetaData } from '@7-docs/shared';
export declare class Algolia implements VectorDatabase {
    appId: string;
    apiKey: string;
    indexName: string;
    client?: SearchClient;
    constructor();
    setClient(): void;
    getClient(): algoliasearch.SearchClient | undefined;
    getIndex(): algoliasearch.SearchIndex | undefined;
    upsertVectors({ vectors }: UpsertVectorOptions): Promise<number>;
    query({ embedding }: QueryOptions): Promise<MetaData[]>;
}
