import ora from 'ora';
import { Pinecone } from '../client/pinecone.js';
export const pineconeCreateIndex = async (index, environment) => {
    const pinecone = new Pinecone();
    const spinner = ora(`Creating Pinecone index: ${index}`).start();
    try {
        const message = await pinecone.createIndex(index, environment);
        spinner.succeed(message);
    }
    catch (error) {
        if (error instanceof Error) {
            spinner.fail(error.message);
        }
    }
};
