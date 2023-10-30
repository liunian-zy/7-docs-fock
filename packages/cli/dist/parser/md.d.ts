import type { DocumentParser } from '../types.js';
declare const remarkInstance: import("unified").Processor<import("mdast").Root, import("mdast").Root, import("mdast").Root, string>;
export declare const createParser: (processor: typeof remarkInstance) => DocumentParser;
export declare const parser: DocumentParser;
export {};
