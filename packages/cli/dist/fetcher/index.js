import * as fs from './fs.js';
import * as github from './github.js';
import * as http from './http.js';
export const sources = {
    fs,
    github,
    http
};
export const fetchDocuments = async (source, identifiers, options) => {
    return sources[source].fetchFiles(identifiers, options);
};
