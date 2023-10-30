import type { ScoredVector } from '@pinecone-database/pinecone';
export declare const ensureProtocol: (url: string) => string;
export declare const sortByScoreDesc: (a: ScoredVector, b: ScoredVector) => number;
export declare const getControllerUrl: (environment: string) => string;
