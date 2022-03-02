import {getMetadata, getContent} from "$lib/parser/parser";

export function get({params}) {
    const {slug} = params;
    const metadata = getMetadata(slug);
    const content = getContent(slug);
    const body = JSON.stringify({metadata, content});
    return {
        body
    }
}
