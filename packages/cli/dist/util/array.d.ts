export declare const uniqueByProperty: <T, K extends keyof T>(arr: T[], property: K) => T[];
export declare const forEachChunkedAsync: <T>(array: T[], chunkSize: number, callbackFn: (chunk: T[]) => Promise<void>) => Promise<void>;
