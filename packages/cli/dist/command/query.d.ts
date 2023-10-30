type Options = {
    db?: string;
    namespace: string;
    query: string;
    stream: boolean;
};
export declare const query: ({ db, namespace, query, stream }: Options) => Promise<void>;
export {};
