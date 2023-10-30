import type { CreateRequest } from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
type CreateIndex = (options: {
    environment: string;
    token: string;
    body: CreateRequest;
}) => Promise<void>;
export declare const createIndex: CreateIndex;
export {};
