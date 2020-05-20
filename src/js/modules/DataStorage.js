class DataStorage {
    constructor() {

    }

    storeQueryResult(result, query) {
        console.log(result);
        localStorage.setItem('NEWS-COUNT', result.totalResults);
        localStorage.setItem('QUERY-NAME', query);

        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

        let titleMentionCount = 0;
        let statistics = {};
        result.articles.forEach(article => {

            if (article.title.toLowerCase().includes(query)) {
                titleMentionCount++;
            }

            const articleDate = new Date(article.publishedAt);
            const dayOfMonth = articleDate.getDate();

            const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
            const dayOfWeek = daysOfWeek[articleDate.getDay()];

            const dateKey = `${dayOfMonth}, ${dayOfWeek}`;

            const dataSortKey = articleDate.getMonth() * 100 + articleDate.getDate();

            if (typeof (statistics[dataSortKey]) == 'undefined') {
                statistics[dataSortKey] = {
                    date: dateKey,
                    articlesCount: 1
                };
            }
            else {
                statistics[dataSortKey].articlesCount++;
            }
        });

        localStorage.setItem('TITLE-MENTION-COUNT', titleMentionCount);
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
}

export { DataStorage };