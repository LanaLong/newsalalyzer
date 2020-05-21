// import { NEWS_API_KEY } from '../constants/constants';
import { PROXY_URL } from '../constants/constants';

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

        // Version 1 with headers ApiKey
        // return fetch(url, {
        //     headers: {
        //         'X-Api-Key': NEWS_API_KEY
        //     }
        // }).then(res => res.json());

        // Version 2 for fix problem with core
        // return fetch(PROXY_URL + url)
        //     .then(res => res.json())
        //     .catch(error => {
        //         return Promise.reject(`Ошибка: ${error}`);
        //         // console.log('Ошибка Api сервера');
        //     })

        // Version 3 with new alias link from YandexPracticum
        return fetch(url)
            .then(res => res.json())
            .catch(error => {
                return Promise.reject(`Ошибка: ${error}`);
            })
    }
}

export { NewsApi };