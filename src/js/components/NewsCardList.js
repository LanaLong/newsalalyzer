class NewsCardList {
    constructor(createCard) {
        this.resultItems = document.querySelector('.result__items');
        this.createCard = createCard;
    }

    createCardList(articles) {
        while (this.resultItems.firstChild) {
            this.resultItems.removeChild(resultItems.lastChild);
        }

        data.forEach(article => {
            const newsArgs = {
                link: article.url,
                imgLink: article.urlToImage,
                date: article.publishedAt,
                title: article.title,
                text: article.description,
                source: article.source.name
            }
            const newsCard = this.createCard(newsArgs);

            this.resultItems.insertAdjacentHTML('afterbegin', newsCard.createMarkup());
        });
    }
}

export { NewsCardList };