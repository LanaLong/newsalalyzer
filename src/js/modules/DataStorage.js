class DataStorage {
    constructor() {

    }

    storeQueryResult(result, query) {
        console.log(result);
        localStorage.setItem('NEWS-COUNT', result.totalResults);
        localStorage.setItem('QUERY-NAME', query);

        let titleMentionCount = 0;
        result.articles.forEach(article => {
            if (article.title.toLowerCase().includes(query)) {
                titleMentionCount++;
            }
        });

        localStorage.setItem('TITLE-MENTION-COUNT', titleMentionCount);
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

    }
}

export { DataStorage };