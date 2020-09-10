
import { query_is_hangul, json2qs } from "./utils.js";
import DataEntries from "./DataEntries.js";

new Vue({
    el: "#app",
    data: () => ({
        hello: "Hi",
        query: "",
        entries: new DataEntries(),
        no_entries: false,
        dinctionary_api: {
            url: "https://en.dict.naver.com/api3/enko/search",
            param: {
                // hid: "159890217617618530",
                lang: "en",
                m: "pc",
                shouldSearchVlive: "false",
                query: "한",
            }
        },
    }),
    methods: {
        async request(param, url) {
            try {
                const result = await fetch( json2qs(param, url) ).then( response => response.json() );
                return result;
            } catch (error) {
                alert( error );
                return {};
            }
        },
        async sub(event) {
            event.preventDefault();
            this.query = this.query.trim();
            if( query_is_hangul(this.query) )
            {
                this.no_entries = false;
                this.dinctionary_api.param.query = this.query;
                this.entries.set_source(
                    await this.request(this.dinctionary_api.param, this.dinctionary_api.url)
                );
                this.no_entries = this.entries.datas.length < 1;
            }
            else
            {
                alert( "Please enter a hangul." );
            }
        },
        expAlias(list = [], item_name = "") {
            if( item_name ) {
                return "(" + list.map( i => i[item_name] ).join( "," ) + ")";
            }
            return "(" + list.join( "," ) + ")";
        },
    }
});
