import { NEWS_API_KEY } from '../constants/cards-constants';
import { QueryBuider } from '../utils/QueryBuilder';

class NewsApi {
    _builder;

    constructor(builder) {
        this._builder = builder;
    }

    getNews(from, to, query) {
        var url = builder
            .setQuery(query)
            .setFrom(from)
            .setTo(to)
            .build();

        return fetch(url);
    }

}

export { NewsApi };