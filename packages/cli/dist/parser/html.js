import { load } from 'cheerio';
import { parser as textParser } from './text.js';
// TODO Maybe make things configurable
const defaultContainerSelector = 'article, main, body'; // The first one that's found will be the content container
const defaultTitleTagName = 'h1';
const defaultSectionHeaderTagName = 'h2';
const defaultSectionHeaderSubSelector = ''; // E.g. for Wikipedia use .mw-headline to get rid of surrounding cruft
const defaultSectionFilter = []; // Filter out sections with matching title (e.g. "ToC" or "References")
const defaultFilterSelector = 'style, script';
const isElement = (n) => n !== null && n[0] && n[0].type === 'tag';
export const parser = (html, maxLength) => {
    const $ = load(html);
    const title = ($(defaultTitleTagName).text() || $('title').text()).trim();
    const body = defaultContainerSelector.split(', ').reduce((a, s) => a ?? $(s), null);
    if (!isElement(body))
        return { title, sections: [] };
    body.find(defaultFilterSelector).remove();
    const headers = body.find(defaultSectionHeaderTagName);
    const sections = [];
    function processSection(title, element, defaultSectionHeaderTagName) {
        let content = '';
        let currentElement = element.next();
        while (currentElement.length > 0 && currentElement[0].tagName !== defaultSectionHeaderTagName) {
            content += currentElement.text();
            currentElement = currentElement.next();
        }
        const { sections: textSections } = textParser(content, maxLength);
        textSections.forEach(text => {
            sections.push({
                header: title,
                content: title + '. ' + text.content
            });
        });
    }
    // Process content before the first <h2>
    processSection(title, body.first(), defaultSectionHeaderTagName);
    headers.each((_index, element) => {
        const titleNode = defaultSectionHeaderSubSelector ? $(element).find(defaultSectionHeaderSubSelector) : $(element);
        const header = titleNode.text();
        if (defaultSectionFilter.some(filter => new RegExp(filter, 'i').test(header)))
            return;
        processSection(header, $(element), defaultSectionHeaderTagName);
    });
    return { title, sections };
};
