class QueryBuider {
    constructor(url) {
        this.url = url; //https://newsapi.org/v2/everything
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

    build() {
        let resultUrl = this.url;

        if (typeof (this.query) != 'undefined') {
            resultUrl += `?q=${this.query}&`
        }

        if (typeof (this.dateFrom) != 'undefined') {
            resultUrl += `?from=${this.dateFrom}&`
        }

        if (typeof (this.dateTo) != 'undefined') {
            resultUrl += `?to=${this.dateTo}&`
        }

        //remove last '&'
        resultUrl = resultUrl.slice(0, -1);

        return resultUrl;
    }

}

export { QueryBuider };
