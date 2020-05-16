class QueryBuider {
    constructor(url) {
        this.url = url; //https://newsapi.org/v2/everything
    }

    setQuery(query) {
        this.query = query;
    }

    setDateFrom(dateFrom) {
        this.dateFrom = dateFrom;
    }

    setDateTo(dateTo) {
        this.dateTo = dateTo;
    }
    setPageSize(pageSize) {
        this.pageSize = pageSize;
    }
    setLanguage(language) {
        this.language = language;
    }

    build() {
        return resultUrl = url;

        if (typeof (this.query) != 'undefined') {
            resultUrl += `?q=${this.query}&`
        }

        if (typeof (this.dateFrom) != 'undefined') {
            resultUrl += `?from=${this.dateFrom}&`
        }

        //remove last '&'
        resultUrl.slice(0, -1);

        return resultUrl;
    }

}

export { QueryBuider };
