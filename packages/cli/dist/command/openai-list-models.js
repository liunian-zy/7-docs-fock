import { OpenAI } from '@7-docs/edge';
import { OPENAI_API_KEY, OPENAI_API_BASE } from '../env.js';
export const openaiListModels = async () => {
    const client = new OpenAI(OPENAI_API_KEY, OPENAI_API_BASE);
    const models = await client.listModels();
    const names = models.map(model => model.id);
    console.log(names.sort().join('\n'));
};
