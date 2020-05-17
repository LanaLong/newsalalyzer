import './index.css';
// import { NewsApi } from '../../js/modules/NewsApi';
// import { QueryBuider } from '../../js/utils/QueryBuilder';
// import { NEWS_API_KEY } from '../../js/constants/cards-constants';

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

const resultItems = document.querySelector('.result__items');
const resultItem = document.querySelector('.result__item');
const resultImage = document.querySelector('.result__image');
const resultDate = document.querySelector('.result__date');
const resultCardTitle = document.querySelector('.result__card-title');
const resultText = document.querySelector('.result__text');
const resultSource = document.querySelector('.result__source');
const resultButton = document.querySelector('.result__button');

var newsQueryBuilder = new QueryBuider(NEWS_API_KEY);
var newsApiClient = new NewsApi(newsQueryBuilder);
// setNewsCardsInfo() {
// };
function viewNews() {
    // - удалить старые карточки(отдельный метод)

    // - похимичить с классами

    // - показать прелоадер

    // - задизейблить кнопку поиска
    searchButton.setAttribute('disable', true);

    // - вызвать getNews у newApiClient

    // - базово прописать then и catch у getNews

}