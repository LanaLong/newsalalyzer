import { NewsCard } from './NewsCard';

class NewsCardList {
    constructor(createCard) {
        this.resultItems = document.querySelector('.result__items');
        this.createCard = createCard;
    }

    createCardList(data) {
        while (this.resultItems.firstChild) {
            this.resultItems.removeChild(resultItems.lastChild);
        }

        data.forEach(article => {
            let newsCard = this.createCard(article.url, article.urlToImage, article.publishedAt, article.title, article.description, article.source.name);

            this.resultItems.insertAdjacentHTML('afterbegin', newsCard.createMarkup());
        });
    }
}

export { NewsCardList };