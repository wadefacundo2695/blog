import {getAllMetadata} from "$lib/parser/parser";

export function get({params}) {
    const {slug} = params;
    const body = JSON.stringify(getAllMetadata());
    return {
        body
    }
};
