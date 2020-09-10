class DataEntries {
    source = {};
    datas = [];
    set_data(i=[])
    {
        if( i )
        {
            this.datas = i;
        }
    }
    set_source(i={})
    {
        if( i )
        {
            this.source = i;
            this.set_data(this.WORDS.items);
        }
    }
    get WORDS()
    {
        if( this.source.searchResultMap )
        {
            return this.source.searchResultMap.searchResultListMap.WORD;
        }
        return [];
    }
    get meansCollectors() { return this.datas.map(i=>i.meansCollector) }
    get means() { return this.datas.map(i=>i.meansCollector.map(j=>j.means)) }
}

export default DataEntries;
