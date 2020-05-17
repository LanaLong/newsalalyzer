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
// create elements
const resultItem = document.createElement('div');
const resultImage = document.createElement('img');
const resultInfo = document.createElement('div');
const resultDate = document.createElement('time');
const resultCardTitle = document.createElement('h3');
const resultCardText = document.createElement('p');
const resultCardSource = document.createElement('a');

// add classes
resultItem.classList.add('result__item');
resultInfo.classList.add('result__info');
resultImage.classList.add('result__image');
resultDate.classList.add('result__date');
resultCardTitle.classList.add('result__card-title');
resultText.classList.add('result__text');
resultSource.classList.add('result__source');

// building elements
resultItem.append(resultImage);
resultItem.append(resultInfo);
resultInfo.append(resultDate);
resultInfo.append(resultCardTitle);
resultInfo.append(resultText);
resultInfo.append(resultSource);

