import { extname } from 'node:path';
import { parser as HTMLParser } from './html.js';
import { parser as MarkdownParser } from './md.js';
import { parser as MDXParser } from './mdx.js';
import { parser as PDFParser } from './pdf.js';
import { parser as TextParser } from './text.js';
const parsers = {
    '.html': HTMLParser,
    '.md': MarkdownParser,
    '.mdx': MDXParser,
    '.markdown': MarkdownParser,
    '.pdf': PDFParser,
    default: TextParser
};
export const parseDocument = async (filePath, document, maxLength) => {
    const ext = extname(filePath);
    const parser = ext in parsers ? parsers[ext] : parsers.default;
    const { title = filePath, sections } = await parser(document, maxLength);
    return { title, sections };
};
