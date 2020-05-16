import { NEWS_API_KEY } from ('../constants/cards-constants');
import { QueryBuider } from ('../utils/QueryBuilder');

class NewsApi {
    #builder

    constructor(builder) {


        this.#builder = builder;
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