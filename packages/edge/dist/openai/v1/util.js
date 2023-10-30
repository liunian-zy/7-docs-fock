const chatCompletionModels = [
    'gpt-4',
    'gpt-4-0314',
    'gpt-4-32k',
    'gpt-4-32k-0314',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-0301',
    'gpt-3.5-turbo-16k-0613',
    'gpt-3.5-turbo-16k',
    'gpt-3.5-turbo-0613'
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const completionModels = [
    'text-davinci-003',
    'text-davinci-002',
    'text-curie-001',
    'text-babbage-001',
    'text-ada-001',
    'davinci',
    'curie',
    'babbage',
    'ada'
];
export const isChatCompletionModel = (value) => chatCompletionModels.includes(value);
