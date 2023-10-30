/// <reference types="node" resolution-mode="require"/>
import * as fs from './fs.js';
import * as github from './github.js';
import * as http from './http.js';
export declare const sources: {
    readonly fs: typeof fs;
    readonly github: typeof github;
    readonly http: typeof http;
};
export declare const fetchDocuments: (source: keyof typeof sources, identifiers: string[], options: {
    repo: string;
    ignore: string[];
}) => Promise<{
    filePath: string;
    url: string;
    content: Buffer;
}[]>;
