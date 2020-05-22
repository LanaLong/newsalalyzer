import { DateHelper } from "../utils/DateHelper"

class NewsCard {
    constructor(newsData) {
        this.newsLink = newsData.link;
        this.newsImgLink = newsData.imgLink;
        this.newsDate = newsData.date;
        this.newsTitle = newsData.title;
        this.newsText = newsData.text;
        this.newsSource = newsData.source;
    }

    createMarkup(data) {
        // const defaultImage = "<%=require('../../images/not-found.svg').default%>";
        if (this.newsImgLink == null) {
            // this.newsImgLink = defaultImage;
        }

        const newsDate = DateHelper.ToNewsDateFormat(this.newsDate);
        const newsDateTag = DateHelper.ToDateTagFormat(this.newsDate);

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
