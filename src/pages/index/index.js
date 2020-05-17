import './index.css';
import { NewsApi } from '../../js/modules/NewsApi';
import { QueryBuider } from '../../js/utils/QueryBuilder';
import { NEWS_API_KEY } from '../../js/constants/cards-constants';
import { DataStorage } from '../../js/modules/DataStorage';

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

var newsQueryBuilder = new QueryBuider('https://newsapi.org/v2/everything');

var newsApiClient = new NewsApi(newsQueryBuilder);
var dataStorage = new DataStorage();

// setNewsCardsInfo() {
// };

function viewNews(event) {
    event.preventDefault();
    const query = event.target[0].value;
    console.log(event);
    let result = newsApiClient.getNews('2020-05-08', '2020-05-15', query)
        .then(res => res.json())
        .then(res => {
            dataStorage.storeQueryResult(res, query);
            res.articles.forEach(function (article) {
                console.log(article.title);

                // в аrticle есть все информация по конкретной статье
                // нужно создавать карточку, заполнять ее данными из article
                // и добавлять в result_items
                // let resultItems = document.querySelector('.result__items');
                // let resultItem = document.querySelector('.result__item');
                // ...
            });
        });






    // - удалить старые карточки(отдельный метод)

    // - похимичить с классами

    // - показать прелоадер

    // - задизейблить кнопку поиска
    //searchButton.setAttribute('disable', true);

    // - вызвать getNews у newApiClient

    // - базово прописать then и catch у getNews

}


searchForm.addEventListener('submit', viewNews)