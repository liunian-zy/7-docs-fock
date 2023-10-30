export const ensureProtocol = (url) => url.replace(/^(https:\/\/)?/, 'https://');
export const sortByScoreDesc = (a, b) => (a.score && b.score ? b.score - a.score : 0);
export const getControllerUrl = (environment) => `https://controller.${environment}.pinecone.io/databases`;
