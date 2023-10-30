import { createHash } from 'node:crypto';
export const generateId = (input) => createHash('md5').update(input).digest('hex');
