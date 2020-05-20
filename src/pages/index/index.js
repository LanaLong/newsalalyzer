import './index.css';
import { NewsApi } from '../../js/modules/NewsApi';
import { queryBuider } from '../../js/utils/queryBuilder';
import { NEWS_API_URL } from '../../js/constants/constants';
import { DataStorage } from '../../js/modules/DataStorage';
import { NewsCardList } from '../../js/components/NewsCardList';
import { SearchInput } from '../../js/components/SearchInput';
import { NewsCard } from '../../js/components/NewsCard';

const searchError = document.querySelector('.search__error');
const resulSection = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const noResults = document.querySelector('.no-results');
const requestError = document.querySelector('.no-results_type_error');
const showMoreButton = document.querySelector('.result__button');

const newsQueryBuilder = new queryBuider(NEWS_API_URL);
const newsApiClient = new NewsApi(newsQueryBuilder);

const dataStorage = new DataStorage();

const createCard = (...args) => new NewsCard(...args);
const newsCardList = new NewsCardList(createCard);

const input = new SearchInput();

function viewNews(event) {
    event.preventDefault();
    preloader.classList.remove('preloader_hidden');
    requestError.classList.add('results-error_hidden');

    const query = event.target[0].value;
    console.log(event);
    let toDate = new Date();
    let fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);


    let from = `${fromDate.getFullYear()}-0${fromDate.getMonth() + 1}-${fromDate.getDate()}`;
    let to = `${toDate.getFullYear()}-0${toDate.getMonth() + 1}-${toDate.getDate()}`;

    let result = newsApiClient.getNews(from, to, query, 100, 'ru')
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

            dataStorage.storeQueryResult(res, query, toDate.getMonth());

            let newsList = newsCardList.createCardList(res.articles);
            console.log(newsList);

            preloader.classList.add('preloader_hidden');
            resulSection.classList.remove('result_hidden');

            setCardsVisibility();

        })
        .catch(error => {
            // console.log(error);
            requestError.classList.remove('results-error_hidden');
            return Promise.reject(`Ошибка: ${result.status}`);
        });
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

showMoreButton.addEventListener('click', setCardsVisibility);

function validateInput(event) {
    let input = event.target;
    if (input.validity.valueMissing || input.validity.tooShort) {
        searchError.classList.remove('search__error_hide');
        return false;
    }
    else {
        searchError.classList.add('search__error_hide');
        return true;
    }
}

input.setSubmitListener(viewNews);
input.setInputListener(validateInput)