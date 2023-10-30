import { splitTextIntoSentences } from '@7-docs/shared';
export const splitContentAtSentence = (content, maxLength) => {
    const sentences = splitTextIntoSentences(content);
    const chunks = [];
    let currentChunk = '';
    for (const sentence of sentences) {
        if (currentChunk.length + sentence.length <= maxLength) {
            currentChunk += sentence;
        }
        else {
            chunks.push(currentChunk);
            currentChunk = sentence;
        }
    }
    if (currentChunk) {
        chunks.push(currentChunk);
    }
    return chunks;
};
