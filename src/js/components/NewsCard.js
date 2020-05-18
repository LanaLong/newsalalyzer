// VERSION 3
class NewsCard {
    constructor(newsImgLink, newsDate, newsTitle, newsText, newsSource) {
        this.newsImgLink = newsImgLink;
        this.newsDate = newsDate;
        this.newsTitle = newsTitle;
        this.newsText = newsText;
        this.newsSource = newsSource;
    }

    createMarkup(data) {
        let date = new Date(this.newsDate);
        let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        let dateDay = date.getDay() + 1;
        let dateMonth = month[date.getMonth()];
        let dateYear = date.getFullYear();

        let stringDate = `${dateDay} ${dateMonth}, ${dateYear}`


        return `
            <div class="result__item result__item_hidden">
                <img src="${this.newsImgLink}" alt="Card image"
                    class="result__image">
                <div class="result__info">
                    <time class="text_type_date result__date" datetime="2019-08-02">${stringDate}</time>
                    <h3 class="title result__card-title">${this.newsTitle}</h3>
                    <p class="text result__text">${this.newsText}</p>
                </div>
                <a href="#" class="text_type_label link result__source">${this.newsSource}</a>
            </div>
        `
    }
}

export { NewsCard };

// VERSION 1
// const resultItems = document.querySelector('.result__items');
// const resultItem = document.querySelector('.result__item');
// const resultInfoContainer = document.querySelector('.result__info');
// const resultImage = document.querySelector('.result__image');
// const resultDate = document.querySelector('.result__date');
// const resultCardTitle = document.querySelector('.result__card-title');
// const resultText = document.querySelector('.result__text');
// const resultSource = document.querySelector('.result__source');
// const resultButton = document.querySelector('.result__button');

// const resultItemsContainer = createDocumentFragment();

// VERSION 2
// create elements
// const resultItem = document.createElement('div');
// const resultImage = document.createElement('img');
// const resultInfo = document.createElement('div');
// const resultDate = document.createElement('time');
// const resultCardTitle = document.createElement('h3');
// const resultCardText = document.createElement('p');
// const resultCardSource = document.createElement('a');

// add classes
// resultItem.classList.add('result__item');
// resultInfo.classList.add('result__info');
// resultImage.classList.add('result__image');
// resultDate.classList.add('result__date');
// resultCardTitle.classList.add('result__card-title');
// resultText.classList.add('result__text');
// resultSource.classList.add('result__source');

// building elements
// resultItem.append(resultImage);
// resultItem.append(resultInfo);
// resultInfo.append(resultDate);
// resultInfo.append(resultCardTitle);
// resultInfo.append(resultText);
// resultInfo.append(resultSource);

