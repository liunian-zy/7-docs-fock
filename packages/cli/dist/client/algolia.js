import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } from '../env.js';
export class Algolia {
    appId;
    apiKey;
    indexName;
    client;
    constructor() {
        if (!ALGOLIA_APP_ID)
            throw new Error('Missing ALGOLIA_APP_ID environment variable');
        if (!ALGOLIA_API_KEY)
            throw new Error('Missing ALGOLIA_API_KEY environment variable');
        if (!ALGOLIA_INDEX_NAME)
            throw new Error('Missing ALGOLIA_INDEX_NAME environment variable');
        this.appId = ALGOLIA_APP_ID;
        this.apiKey = ALGOLIA_API_KEY;
        this.indexName = ALGOLIA_INDEX_NAME;
    }
    setClient() {
        // @ts-ignore This expression is not callable, ts(2349)
        const client = algoliasearch(this.appId, this.apiKey);
        this.client = client;
    }
    getClient() {
        if (!this.client)
            this.setClient();
        return this.client;
    }
    getIndex() {
        const client = this.getClient();
        return client?.initIndex(this.indexName);
    }
    async upsertVectors({ vectors }) {
        const index = this.getIndex();
        if (!index)
            return 0;
        const objects = vectors.map(v => ({ objectID: v.id, ...v.metadata }));
        const { objectIDs } = await index.saveObjects(objects);
        return objectIDs.length;
    }
    async query({ embedding }) {
        const index = this.getIndex();
        if (!index)
            return [];
        const { hits } = await index.search(embedding.join(','));
        return hits.map(hit => ({
            filePath: hit.filePath,
            url: hit.url,
            content: hit.content,
            title: hit.title,
            ...hit.metadata
        }));
    }
}
