import type { CreateCompletionRequest } from 'openai';
interface CompletionsOptions {
    token: string;
    apiBase: string;
    body: CreateCompletionRequest;
}
export declare const completions: ({ token, apiBase, body }: CompletionsOptions) => Promise<Response>;
export {};
