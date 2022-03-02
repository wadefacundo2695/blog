import fs from "fs";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const markdown = MarkdownIt({
    html: true,
    xhtmlOut: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
                    '</code></pre>';
            } catch (e) {
                return;
            }
        }
        return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
    }
});

const getAllMetadata = () => {
    return JSON.parse(fs.readFileSync(`src/posts/metadata.json`, "utf8"));
}

const getMetadata = (slug) => {
    const metadata = getAllMetadata().find(x => x.slug === slug);
    return metadata;
};

const getContent = (slug) => {
    return markdown.render(fs.readFileSync(`src/posts/content/${slug}.md`, "utf8"));
};

export {getAllMetadata, getMetadata, getContent}

