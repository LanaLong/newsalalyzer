import { DAYS_IN_WEEK, STORAGE_KEY_MONTH_MULTIPLIER } from '../constants/constants';

class DateHelper {
    static ToNewsDateFormat(newsDate) {
        const date = new Date(newsDate);
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const dateDay = date.getDate();
        const dateMonth = months[date.getMonth()];
        const dateYear = date.getFullYear();

        return `${dateDay} ${dateMonth}, ${dateYear}`;
    }

    static ToDateTagFormat(newsDate) {
        const date = new Date(newsDate);

        const dateDay = date.getDate();
        const dateMonth = date.getMonth();
        const dateYear = date.getFullYear();

        return `${dateYear}-${dateDay}-${dateMonth}`;
    }

    static ToCommitDateFormat(commitDate) {
        const date = new Date(commitDate);
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const dateDay = date.getDate();
        const dateMonth = months[date.getMonth()];
        const dateYear = date.getFullYear();

        return `${dateDay} ${dateMonth}, ${dateYear}`;
    }

    static ToStorageDate(date) {
        const articleDate = new Date(date);
        const dayOfMonth = articleDate.getDate();

        const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
        const dayOfWeek = daysOfWeek[articleDate.getDay()];

        return `${dayOfMonth}, ${dayOfWeek}`;
    }

    static ToStorageDateKey(date) {
        const articleDate = new Date(date);

        return articleDate.getMonth() * STORAGE_KEY_MONTH_MULTIPLIER + articleDate.getDate();
    }

    static GetCurrentMonthName() {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        const date = new Date();

        return months[date.getMonth()];
    }

    static GetNewsApiDateInterval() {
        const toDate = new Date();

        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - DAYS_IN_WEEK);


        const from = `${fromDate.getFullYear()}-0${fromDate.getMonth() + 1}-${fromDate.getDate()}`;
        const to = `${toDate.getFullYear()}-0${toDate.getMonth() + 1}-${toDate.getDate()}`;

        return {
            from: from,
            to: to
        };
    }
}

export { DateHelper };