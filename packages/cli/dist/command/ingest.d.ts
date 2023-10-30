type Options = {
    source?: string;
    sourceIdentifiers: string[];
    ignore: string[];
    repo: string;
    db?: string;
    namespace: string;
    isDryRun: boolean;
    isSkipEmbeddings: boolean;
};
export declare const ingest: (options: Options) => Promise<void>;
export {};
