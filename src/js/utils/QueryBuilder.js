class queryBuider {
    constructor(url) {
        this.url = url;
    }

    setQuery(query) {
        this.query = query;
        return this;
    }

    setDateFrom(dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }

    setDateTo(dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    setPageSize(pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    setLanguage(language) {
        this.language = language;
        return this;
    }
    setApiKey(apiKey) {
        this.apiKey = apiKey;
        return this;
    }


    build() {

        let queryString = '';

        if (typeof (this.query) != 'undefined') {
            queryString += `q=${this.query}&`;
        }

        if (typeof (this.dateFrom) != 'undefined') {
            queryString += `from=${this.dateFrom}&`;
        }

        if (typeof (this.dateTo) != 'undefined') {
            queryString += `to=${this.dateTo}&`;
        }

        if (typeof (this.pageSize) != 'undefined') {
            queryString += `pageSize=${this.pageSize}&`;
        }

        if (typeof (this.language) != 'undefined') {
            queryString += `language=${this.language}&`;
        }

        if (typeof (this.apiKey) != 'undefined') {
            queryString += `apiKey=${this.apiKey}&`;
        }

        if (queryString != '') {
            //remove last '&'
            queryString = queryString.slice(0, -1);
            return `${this.url}?${queryString}`;
        }

        return this.url;
    }

}

export { queryBuider };
