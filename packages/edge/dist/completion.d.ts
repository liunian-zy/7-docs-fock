import type { MetaData } from '@7-docs/shared';
interface Options {
    OPENAI_API_KEY: string;
    query: (vector: number[]) => Promise<MetaData[]>;
    system?: string;
    prompt?: string;
    fields?: string;
}
export declare const getCompletionHandler: (options: Options) => (req: Request) => Promise<Response>;
export {};
