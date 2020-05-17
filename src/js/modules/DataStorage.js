class DataStorage {
    constructor() {

    }

    storeQueryResult(result, query) {
        console.log(result);
        localStorage.setItem('NEWS-COUNT', result.totalResults);
        localStorage.setItem('QUERY-NAME', query);

        let titleMentionCount = 0;
        let statistics = {};
        result.articles.forEach(article => {

            if (article.title.toLowerCase().includes(query)) {
                titleMentionCount++;
            }

            let articleDate = new Date(article.publishedAt).getDate();
            if (typeof (statistics[articleDate]) == 'undefined') {
                statistics[articleDate] = 1;
            }
            else {
                statistics[articleDate]++;
            }
        });

        localStorage.setItem('TITLE-MENTION-COUNT', titleMentionCount);
        localStorage.setItem('STATISTICS', JSON.stringify(statistics))


        console.log(this.getNewsCount());
        console.log(this.getQueryName());
        console.log(this.getTitleMentionCount());
        console.log(this.getStatistics());

        for (let [key, value] of Object.entries(statistics)) {
            console.log(`${key}: ${value}`);
        }

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
}

export { DataStorage };