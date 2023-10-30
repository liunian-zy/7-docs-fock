import type { CreateCompletionRequest } from 'openai';

interface CompletionsOptions {
  token: string;
  apiBase: string;
  body: CreateCompletionRequest;
}

export const completions = async ({ token, apiBase, body }: CompletionsOptions) => {
  const response = await fetch(apiBase + '/v1/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) console.log(response);

  return response;
};
