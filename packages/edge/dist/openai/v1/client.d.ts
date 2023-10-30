import type { CreateChatCompletionRequest, CreateCompletionRequest } from 'openai';
export declare class OpenAI {
    token: string;
    apiBase: string;
    constructor(token: string, apiBase?: string);
    createEmbeddings({ model, input }: {
        model: string;
        input: string;
    }): Promise<{
        embeddings: number[][];
        usage: import("openai").CreateEmbeddingResponseUsage;
    }>;
    chatCompletions(body: CreateChatCompletionRequest): Promise<Response>;
    completions(body: CreateCompletionRequest): Promise<Response>;
    listModels(): Promise<import("openai").Model[]>;
}
