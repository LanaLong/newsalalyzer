import { dateHelper } from '../utils/dateHelper';

class DataStorage {
    constructor() {

    }

    storeQueryResult(result, query) {
        localStorage.setItem('NEWS-COUNT', result.totalResults);
        localStorage.setItem('QUERY-NAME', query);
        localStorage.setItem('CURRENT-MONTH', dateHelper.GetCurrentMonthName());


        this.titleMentionCount = 0;
        const statistics = this._evaluateStatistics(result.articles, query);

        localStorage.setItem('TITLE-MENTION-COUNT', this.titleMentionCount);
        localStorage.setItem('STATISTICS', JSON.stringify(statistics))
    }

    getQueryName() {
        return localStorage.getItem('QUERY-NAME');
    }

    getNewsCount() {
        return localStorage.getItem('NEWS-COUNT');
    }

    getTitleMentionCount() {
        return localStorage.getItem('TITLE-MENTION-COUNT');
    }

    getStatistics() {
        return localStorage.getItem('STATISTICS');
    }

    getCurrentMonth() {
        return localStorage.getItem('CURRENT-MONTH');
    }

    _evaluateStatistics(articles, query) {

        let result = {};
        articles.forEach(article => {

            if (article.title.toLowerCase().includes(query)) {
                this.titleMentionCount++;
            }

            const storageDate = dateHelper.ToStorageDate(article.publishedAt);
            const storageDateKey = dateHelper.ToStorageDateKey(article.publishedAt);

            if (typeof (result[storageDateKey]) == 'undefined') {
                result[storageDateKey] = {
                    date: storageDate,
                    articlesCount: 1
                };
            }
            else {
                result[storageDateKey].articlesCount++;
            }
        });

        return result;
    }
}

export { DataStorage };