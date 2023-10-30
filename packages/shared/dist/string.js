export const ucFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const normalizeNamespace = (value) => value.replace(/[./-]/g, '_');
export const splitTextIntoSentences = (content) => {
    const trimmedContent = content.replace(/\s+/gm, ' ').trim();
    const sentences = trimmedContent.match(/[^.?!]+[.?!]+/g); // Safari throws at positive lookbehinds: .split(/(?<=[.?!]\s)\s*/g);
    return sentences ?? [];
};
