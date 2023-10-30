import util from 'node:util';
const inspectOptions = { maxArrayLength: null, depth: null, colors: true };
export const log = (obj) => console.log(util.inspect(obj, inspectOptions));
