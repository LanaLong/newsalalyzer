class NewsApi {

    constructor(builder) {
        this._builder = builder;
    }

    getNews(from, to, query, pageSize, lang, apiKey) {
        const url = this._builder
            .setQuery(query)
            .setDateFrom(from)
            .setDateTo(to)
            .setPageSize(pageSize)
            .setLanguage(lang)
            .setApiKey(apiKey)
            .build();

        // FIX CORS problem
        // Version 3 with new alias link from YandexPracticum
        return fetch(url)
            .then(res => res.json())
            .catch(error => {
                return Promise.reject(`Ошибка: ${error}`);
            })
    }
}

export { NewsApi };