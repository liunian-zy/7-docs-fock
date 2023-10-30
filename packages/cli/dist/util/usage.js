export const getInitUsage = () => ({ prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 });
export const addTokens = (usage, usages) => usages.reduce((acc, usage) => ({
    prompt_tokens: acc.prompt_tokens + usage.prompt_tokens,
    completion_tokens: (acc.completion_tokens ?? 0) + (usage.completion_tokens ?? 0),
    total_tokens: acc.total_tokens + usage.total_tokens
}), usage);
