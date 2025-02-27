export interface MetaData {
    filePath: string;
    url: string;
    content: string;
    title: string;
    header?: string;
    score?: number;
    tags?: string[];
}
export type StreamMetaData = Partial<MetaData>;
export interface Usage {
    prompt_tokens: number;
    completion_tokens?: number;
    total_tokens: number;
}
export type Params = {
    query?: string;
    previousQueries?: string[];
    previousResponses?: string[];
    embedding_model?: string;
    completion_model?: string;
    stream?: boolean;
};
interface BaseEventData {
    id: string;
    created: number;
    model: string;
}
type ChatCompletionChoice = {
    delta: {
        content: string;
    };
};
export interface ChatCompletionEventData extends BaseEventData {
    object: 'chat.completion.chunk';
    choices: ChatCompletionChoice[];
}
type CompletionChoice = {
    text: string;
    index: number;
    finish_reason: string;
};
export interface CompletionEventData extends BaseEventData {
    object: 'text_completion';
    choices: CompletionChoice[];
}
export type EventData = CompletionEventData | ChatCompletionEventData;
export {};
