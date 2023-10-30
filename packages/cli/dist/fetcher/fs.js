import fs from 'node:fs/promises';
import fg from 'fast-glob';
const getFileData = async (filePath) => {
    return { filePath, url: '', content: await fs.readFile(filePath) };
};
export const fetchFiles = async (patterns, { ignore }) => {
    const files = await fg(patterns, { ignore });
    return Promise.all(files.map(getFileData));
};
