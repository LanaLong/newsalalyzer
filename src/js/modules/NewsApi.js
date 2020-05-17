import { NEWS_API_KEY } from '../constants/cards-constants';
import { QueryBuider } from '../utils/QueryBuilder';

class NewsApi {

    constructor(builder) {
        this._builder = builder;
    }

    getNews(from, to, query) {
        var url = this._builder
            .setQuery(query)
            .setDateFrom(from)
            .setDateTo(to)
            .build();

        console.log(url);

        return fetch(url, {
            headers: {
                'X-Api-Key': '2479e7eabf734c26bbff814e3e9761c2'
            }
        });
    }

}

export { NewsApi };