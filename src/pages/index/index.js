import './index.css';
import { NewsApi } from '../../js/modules/NewsApi';
import { QueryBuider } from '../../js/utils/QueryBuilder';
import { NEWS_API_KEY } from '../../js/constants/cards-constants';
import { DataStorage } from '../../js/modules/DataStorage';
import { NewsCardList } from '../../js/components/NewsCardList';

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const searchError = document.querySelector('.search__error');
const resulSection = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const noResults = document.querySelector('.no-results');
const requestError = document.querySelector('.no-results_type_error');

const showMoreButton = document.querySelector('.result__button');

const newsQueryBuilder = new QueryBuider('https://newsapi.org/v2/everything');

const newsApiClient = new NewsApi(newsQueryBuilder);
const dataStorage = new DataStorage();

const newsCardList = new NewsCardList();

let showedCardsCount = 3;

function viewNews(event) {
    event.preventDefault();
    preloader.classList.remove('preloader_hidden');
    requestError.classList.add('results-error_hidden');

    const query = event.target[0].value;
    console.log(event);
    let result = newsApiClient.getNews('2020-05-08', '2020-05-15', query, 12)
        .then(res => res.json())
        .then(res => {

            if (res.articles.length == 0) {
                noResults.classList.remove('no-results_hidden');
                preloader.classList.add('preloader_hidden');
                resulSection.classList.add('result_hidden');
                return;
            }
            else {
                if (!noResults.classList.contains('no-results_hidden')) {
                    noResults.classList.add('no-results_hidden');
                }
            }

            dataStorage.storeQueryResult(res, query);

            let newsList = newsCardList.createCardList(res.articles);
            console.log(newsList);


            preloader.classList.add('preloader_hidden');
            resulSection.classList.remove('result_hidden');


            setCardsVisibility();
            // .then(result => {
            //     if (result.ok) {
            //         return result.json();
            //     }
            //     return Promise.reject(`Ошибка: ${result.status}`);
            // });

            // в аrticle есть все информация по конкретной статье
            // нужно создавать карточку, заполнять ее данными из article
            // и добавлять в result_items
            // let resultItems = document.querySelector('.result__items');
            // let resultItem = document.querySelector('.result__item');
            // ...
        })
        .catch(error => {
            console.log(error);
            requestError.classList.remove('results-error_hidden');
        });






    // - удалить старые карточки(отдельный метод)

    // - похимичить с классами

    // - показать прелоадер

    // - задизейблить кнопку поиска
    //searchButton.setAttribute('disable', true);

    // - вызвать getNews у newApiClient

    // - базово прописать then и catch у getNews

}

function setCardsVisibility() {
    let cardsContainer = document.querySelector('.result__items');
    let shownCardsCount = 0;
    let resultVisibleCardsCount = 0;

    cardsContainer.children.forEach(item => {

        if (!item.classList.contains('result__item_hidden')) {
            resultVisibleCardsCount++;
        }

        if (shownCardsCount < 3 && item.classList.contains('result__item_hidden')) {
            shownCardsCount++;
            resultVisibleCardsCount++;
            item.classList.remove('result__item_hidden');
        }
    });

    if (cardsContainer.children.length == resultVisibleCardsCount) {
        showMoreButton.classList.add('button_hidden');
    }
    else {
        showMoreButton.classList.remove('button_hidden');
    }

}

searchForm.addEventListener('submit', viewNews);
showMoreButton.addEventListener('click', setCardsVisibility);
searchInput.addEventListener('input', (event) => {
    let input = event.target;
    if (input.validity.valueMissing || input.validity.tooShort) {
        searchError.classList.remove('search__error_hide');
        return false;
    }
    else {
        searchError.classList.add('search__error_hide');
        return true;
    }
});
