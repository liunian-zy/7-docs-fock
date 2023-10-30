import type { ListModelsResponse } from 'openai';
interface ListModelsOptions {
    token: string;
    apiBase: string;
}
export declare const listModels: ({ token, apiBase }: ListModelsOptions) => Promise<ListModelsResponse['data']>;
export {};
