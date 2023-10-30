import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const filePath = path.join(os.homedir(), '.7d.json');
let config;
try {
    config = JSON.parse(String(fs.readFileSync(filePath)));
}
catch {
    // Intentionally ignore
}
export const get = (section, key) => config?.[section]?.[key];
export const set = (section, key, value) => {
    if (!config)
        config = {};
    if (!config[section])
        config[section] = {};
    config[section][key] = value;
    fs.writeFileSync(filePath, JSON.stringify(config));
    return value;
};
export const getOrSet = (section, key, value, fallback) => {
    if (value)
        return set(section, key, value);
    return get(section, key) ?? fallback;
};
