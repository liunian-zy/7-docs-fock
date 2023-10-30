import type { MetaData } from '@7-docs/shared';
import type { QueryRequest } from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
type Query = (options: {
    url: string;
    token: string;
    vector: number[];
    namespace: string;
    options?: Partial<QueryRequest>;
}) => Promise<MetaData[]>;
export declare const query: Query;
export {};
