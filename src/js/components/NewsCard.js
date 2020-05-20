import { dateHelper } from "../utils/dateHelper"

class NewsCard {
    constructor(newsLink, newsImgLink, newsDate, newsTitle, newsText, newsSource) {
        this.newsLink = newsLink;
        this.newsImgLink = newsImgLink;
        this.newsDate = newsDate;
        this.newsTitle = newsTitle;
        this.newsText = newsText;
        this.newsSource = newsSource;
    }

    createMarkup(data) {
        let date = new Date(this.newsDate);
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        let dateDay = date.getDate();
        let dateMonth = month[date.getMonth()];
        let dateYear = date.getFullYear();

        let stringDate = `${dateDay} ${dateMonth}, ${dateYear}`;
        let stringDateTimeTag = `${dateYear}-${dateDay}-${date.getMonth()}`;

        // const defaultImage = "<%=require('../../images/not-found.svg').default%>";
        if (this.newsImgLink == null) {
            // this.newsImgLink = defaultImage;
        }

        const newsDate = dateHelper.ToNewsDateFormat(this.newsDate);
        const newsDateTag = dateHelper.ToNewsDateTagFormat(this.newsDate);

        return `
            <a href="${this.newsLink}" class="result__item result__item_hidden" target="_blank">
                <img src="${this.newsImgLink}" alt="${this.newsTitle}"
                    class="result__image">
                <div class="result__info">
                    <div class="result__text-container">
                        <time class="text_type_date result__date" datetime=${newsDateTag}>${newsDate}</time>
                        <h3 class="title result__card-title">${this.newsTitle}</h3>
                        <p class="text result__text">${this.newsText}</p>
                    </div>
                    <p class="text_type_label result__source">${this.newsSource}</p>
                </div>
            </a>
        `
    }
}

export { NewsCard };
