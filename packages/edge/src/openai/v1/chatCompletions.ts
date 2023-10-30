import type { CreateChatCompletionRequest } from 'openai';

interface ChatCompletionsOptions {
  token: string;
  apiBase: string;
  body: CreateChatCompletionRequest;
}

export const chatCompletions = async ({ token, apiBase, body }: ChatCompletionsOptions) => {
  const response = await fetch(apiBase + '/v1/chat/completions', {
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
