import { splitContentAtSentence } from './util.js';
export const parser = (text, maxLength) => {
    const sections = [];
    const splitContent = splitContentAtSentence(String(text), maxLength);
    splitContent.forEach(chunk => {
        sections.push({ content: chunk.trim() });
    });
    return { sections };
};
