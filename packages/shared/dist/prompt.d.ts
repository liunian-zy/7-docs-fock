type GetPrompt = (options: {
    context: string[];
    query: string;
    prompt?: string;
}) => string;
export declare const getPrompt: GetPrompt;
export {};
