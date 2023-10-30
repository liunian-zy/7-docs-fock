import type { CreateEmbeddingResponse, CreateEmbeddingResponseDataInner } from 'openai';

interface EmbeddingsOptions {
  token: string;
  apiBase: string;
  model: string;
  input: string;
}

type EmbeddingResponse = {
  embeddings: number[][];
  usage: CreateEmbeddingResponse['usage'];
};

export const createEmbeddings = async ({ token,apiBase, model, input }: EmbeddingsOptions): Promise<EmbeddingResponse> => {
  const response = await fetch(apiBase + '/v1/embeddings', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({ input, model })
  });

  const { error, data, usage } = await response.json();

  if (error) throw new Error(error.message);

  if (!data[0].embedding) throw new Error('No embedding returned from the completions endpoint');

  return {
    embeddings: data.map((d: CreateEmbeddingResponseDataInner) => d.embedding),
    usage
  };
};
