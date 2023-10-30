export const compact = (collection) => Array.from(new Set(collection)).filter((value) => Boolean(value));
export const uniqueByProperty = (arr, property) => {
    const uniqueValues = new Set();
    return arr.filter(obj => {
        if (obj[property] && uniqueValues.has(obj[property]))
            return false;
        uniqueValues.add(obj[property]);
        return true;
    });
};
export const forEachChunkedAsync = async (array, chunkSize, callbackFn) => {
    const arrayLength = array.length;
    let startIndex = 0;
    while (startIndex < arrayLength) {
        const endIndex = Math.min(startIndex + chunkSize, arrayLength);
        const chunk = array.slice(startIndex, endIndex);
        await callbackFn(chunk);
        startIndex = endIndex;
    }
};
