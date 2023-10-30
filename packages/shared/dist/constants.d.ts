/**
 * The maximum number of input tokens for the embedding model v2 is 8191. There seems to be no tokenizer for JS
 * available. Some use "4 characters per token", others "4/3 tokens per word". This can vary per language. And there
 * needs to be some kind of safety margin to stay within the boundaries and prevent erors.
 */
export declare const OPENAI_EMBEDDING_MODEL = "text-embedding-ada-002";
export declare const OPENAI_MAX_INPUT_TOKENS = 8191;
export declare const OPENAI_OUTPUT_DIMENSIONS = 1536;
export declare const OPENAI_COMPLETION_MODEL = "gpt-3.5-turbo";
export declare const OPENAI_MAX_COMPLETION_TOKENS: number;
export declare const OPENAI_TOKENS_FOR_COMPLETION = 1024;
export declare const OPENAI_COMPLETION_TEMPERATURE = 0.2;
export declare const OPENAI_COMPLETION_TOP_P = 1;
export declare const OPENAI_COMPLETION_N = 1;
export declare const OPENAI_TOKENS_PER_WORD: number;
export declare const CHUNK_SIZE: number;
export declare const EMBEDDING_MATCH_COUNT = 5;
export declare const PINECONE_METRIC = "cosine";
export declare const PINECONE_POD_TYPE = "p2.x1";
export declare const PINECONE_UPSERT_VECTOR_LIMIT = 100;
export declare const SUPABASE_SIMILARITY_THRESHOLD = 0.78;
