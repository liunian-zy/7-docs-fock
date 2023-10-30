type ListIndexes = (options: {
    environment: string;
    token: string;
}) => Promise<string[]>;
export declare const listIndexes: ListIndexes;
export {};
