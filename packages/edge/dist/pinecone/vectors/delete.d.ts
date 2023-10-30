import type { Delete1Request } from '@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch';
type Delete = (options: {
    url: string;
    token: string;
    body: Delete1Request;
}) => Promise<void>;
export declare const deleteVector: Delete;
export {};
