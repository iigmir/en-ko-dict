import { json2qs, qs2json } from "./qs-json.js";

function query_is_hangul(query = "")
{
    const regex = /[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g;
    const result = query.match(regex);
    return result ? result.length === query.length : false;
}

export { query_is_hangul, json2qs, qs2json };