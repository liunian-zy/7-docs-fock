export declare const parseConfig: () => Promise<{
    debug: boolean | undefined;
    command: string;
    source: string | undefined;
    sourceIdentifiers: string[];
    ignore: string[];
    repo: string;
    db: string;
    index: string | undefined;
    environment: string | undefined;
    namespace: string;
    input: string;
    stream: boolean;
    isDryRun: boolean;
    isSkipEmbeddings: boolean;
}>;
