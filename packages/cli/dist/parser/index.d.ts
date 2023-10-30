/// <reference types="node" resolution-mode="require"/>
export declare const parseDocument: (filePath: string, document: Buffer, maxLength: number) => Promise<{
    title: string;
    sections: import("../types.js").DocumentSection[];
}>;
