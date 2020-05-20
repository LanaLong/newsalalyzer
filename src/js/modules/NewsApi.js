import { NEWS_API_KEY } from '../constants/constants';
import { queryBuider } from '../utils/queryBuilder';

class NewsApi {

    constructor(builder) {
        this._builder = builder;
    }

    getNews(from, to, query, pageSize, lang) {
        const url = this._builder
            .setQuery(query)
            .setDateFrom(from)
            .setDateTo(to)
            .setPageSize(pageSize)
            .setLanguage(lang)
            .build();

        console.log(url);

        return fetch(url, {
            headers: {
                'X-Api-Key': '2479e7eabf734c26bbff814e3e9761c2'
            }
        }).then(res => res.json());
    }
}

export { NewsApi };