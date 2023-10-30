import type { CreateChatCompletionRequest } from 'openai';
interface ChatCompletionsOptions {
    token: string;
    apiBase: string;
    body: CreateChatCompletionRequest;
}
export declare const chatCompletions: ({ token, apiBase, body }: ChatCompletionsOptions) => Promise<Response>;
export {};
