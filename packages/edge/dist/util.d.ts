import type { EventData, Params, StreamMetaData } from '@7-docs/shared';
import type { CreateChatCompletionResponse } from 'openai';
export declare const getParams: (req: Request) => Promise<Params>;
export declare const streamResponse: (body: BodyInit | null) => Response;
export declare const getDelta: (data: EventData) => string;
export declare const getText: (response: CreateChatCompletionResponse) => string | undefined;
export declare const pickFields: (keys: string[]) => (results: StreamMetaData) => StreamMetaData;
