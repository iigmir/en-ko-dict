import { json2qs } from "./qs-json.js";

class DictionaryAPI {
    url = "https://en.dict.naver.com/api3/enko/search";
    param = {
        // hid: "159890217617618530",
        lang: "en",
        m: "pc",
        shouldSearchVlive: "false",
        query: "대한",
    }
    set_url(input) { this.url = input; }
    set_query(input) { this.param.query = input; }
    set_param(input) { this.param = input; }
    get full_url() { return json2qs(this.param, this.url) }
};

export default DictionaryAPI;
