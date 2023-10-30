import { default as _ora } from 'ora';
import { parseConfig } from '../cli-arguments.js';
const { debug } = await parseConfig();
const logger = (message) => {
    if (message)
        console.log(message);
    const log = (message) => {
        if (message)
            console.log(message);
        return ora;
    };
    const ora = {
        start: log,
        info: log,
        fail: log,
        succeed: log,
        set text(message) {
            console.log(message);
        }
    };
    return ora;
};
const ora = function (options) {
    // @ts-ignore -- Might fix later
    return debug ? logger(options) : _ora(options);
};
export default ora;
