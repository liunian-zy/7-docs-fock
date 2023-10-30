import type { UpsertRequest } from '@pinecone-database/pinecone';
import type { UpsertResponse } from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
type Upsert = (options: {
    url: string;
    token: string;
    body: UpsertRequest;
}) => Promise<UpsertResponse>;
export declare const upsert: Upsert;
export {};
