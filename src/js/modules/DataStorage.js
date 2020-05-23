import { DateHelper } from '../utils/DateHelper';

class DataStorage {
    constructor() {

    }

    storeQueryResult(response, query) {
        localStorage.setItem('NEWS-COUNT', response.totalResults);
        localStorage.setItem('QUERY-NAME', query);
        localStorage.setItem('CURRENT-MONTH', DateHelper.GetCurrentMonthName());


        this.titleMentionCount = 0;
        const statistics = this._evaluateStatistics(response.articles, query);

        const articles = JSON.stringify(response.articles);
        localStorage.setItem('ARTICLES', articles);
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

    getArticles() {
        const articles = JSON.parse(localStorage.getItem('ARTICLES'));
        return articles;
    }

    _evaluateStatistics(articles, query) {

        const result = {};
        articles.forEach(article => {

            if (article.title.toLowerCase().includes(query)) {
                this.titleMentionCount++;
            }

            const storageDate = DateHelper.ToStorageDate(article.publishedAt);
            const storageDateKey = DateHelper.ToStorageDateKey(article.publishedAt);

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