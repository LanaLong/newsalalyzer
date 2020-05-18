// VERSION 3
class NewCard {
    constructor() {

    }

    createMarkup(data) {
        return `
            <div class="result__item">
                <img src="<%= require('${newsImgLink}')%>" alt="Card image"
                    class="result__image">
                <div class="result__info">
                    <time class="text_type_date result__date" datetime="2019-08-02">${newsDate}</time>
                    <h3 class="title result__card-title">${newsTitle}</h3>
                    <p class="text result__text">${newsText}</p>
                </div>
                <a href="#" class="text_type_label link result__source">${newsSource}</a>
            </div>
        `
    }
}



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

