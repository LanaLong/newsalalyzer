// import { NEWS_API_KEY } from '../constants/constants';

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

        // return fetch(url, {
        //     headers: {
        //         'X-Api-Key': NEWS_API_KEY
        //     }
        // }).then(res => res.json());
        return fetch(url)
            .then(res => res.json())
            .catch(error => {
                return Promise.reject(`Ошибка: ${error}`);
            })
    }
}

export { NewsApi };