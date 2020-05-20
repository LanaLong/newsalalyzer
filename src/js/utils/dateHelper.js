class dateHelper {
    static ToNewsDateFormat(date) {
        const date = new Date(this.newsDate);
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const dateDay = date.getDate();
        const dateMonth = month[date.getMonth()];
        const dateYear = date.getFullYear();

        return `${dateDay} ${dateMonth}, ${dateYear}`;
    }

    static ToNewsDateTagFormat(date) {
        const date = new Date(this.newsDate);

        const dateDay = date.getDate();
        const dateMonth = month[date.getMonth()];
        const dateYear = date.getFullYear();

        return `${dateYear}-${dateDay}-${date.getMonth()}`;
    }
}

export { dateHelper };