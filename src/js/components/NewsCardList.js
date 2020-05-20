import { NewsCard } from './NewsCard';

class NewsCardList {
    constructor() {

    }

    createCardList(data) {
        const resultItems = document.querySelector('.result__items');

        while (resultItems.firstChild) {
            resultItems.removeChild(resultItems.lastChild);
        }

        data.forEach(article => {
            let newsCard = new NewsCard(article.url, article.urlToImage, article.publishedAt, article.title, article.description, article.source.name);
            resultItems.insertAdjacentHTML('afterbegin', newsCard.createMarkup());
        });
    }
}

export { NewsCardList };