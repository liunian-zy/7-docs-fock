import type { CreateEmbeddingResponse } from 'openai';
interface EmbeddingsOptions {
    token: string;
    apiBase: string;
    model: string;
    input: string;
}
type EmbeddingResponse = {
    embeddings: number[][];
    usage: CreateEmbeddingResponse['usage'];
};
export declare const createEmbeddings: ({ token, apiBase, model, input }: EmbeddingsOptions) => Promise<EmbeddingResponse>;
export {};
