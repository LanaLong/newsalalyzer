import './index.css';
import { NewsApi } from '../../js/modules/NewsApi';
import { QueryBuider } from '../../js/utils/QueryBuilder';
import { NEWS_API_URL, NEWS_API_REQUEST_PAGE_SIZE, NEWS_API_REQUEST_LANGUAGE, NEWS_API_KEY, CARDS_TO_SHOW_COUNT } from '../../js/constants/constants';
import { DataStorage } from '../../js/modules/DataStorage';
import { NewsCardList } from '../../js/components/NewsCardList';
import { SearchInput } from '../../js/components/SearchInput';
import { NewsCard } from '../../js/components/NewsCard';
import { DateHelper } from '../../js/utils/DateHelper';

const searchError = document.querySelector('.search__error');
const resulSection = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const noResults = document.querySelector('.no-results');
const requestError = document.querySelector('.no-results_type_error');
const showMoreButton = document.querySelector('.result__button');

const newsQueryBuilder = new QueryBuider(NEWS_API_URL);
const newsApiClient = new NewsApi(newsQueryBuilder);

const dataStorage = new DataStorage();

const createCard = (...args) => new NewsCard(...args);
const newsCardList = new NewsCardList(createCard);

const input = new SearchInput();

function viewNews(event) {

    event.preventDefault();
    input.block();

    preloader.classList.remove('preloader_hidden');
    resulSection.classList.add('result_hidden');
    requestError.classList.add('results-error_hidden');

    const query = event.target[0].value;

    const dateParameters = DateHelper.GetNewsApiDateInterval();

    newsApiClient.getNews(dateParameters.from, dateParameters.to, query, NEWS_API_REQUEST_PAGE_SIZE, NEWS_API_REQUEST_LANGUAGE, NEWS_API_KEY)
        .then(res => {

            if (res.articles.length == 0) {
                noResults.classList.remove('no-results_hidden');
                preloader.classList.add('preloader_hidden');
                resulSection.classList.add('result_hidden');


                input.unblock();
                return;
            }
            else {
                if (!noResults.classList.contains('no-results_hidden')) {
                    noResults.classList.add('no-results_hidden');
                }
            }

            dataStorage.storeQueryResult(res, query);
            newsCardList.createCardList(res.articles);

            preloader.classList.add('preloader_hidden');
            resulSection.classList.remove('result_hidden');

            setCardsVisibility();

            input.unblock();
        })
        .catch(error => {

            input.unblock();
            requestError.classList.remove('results-error_hidden');
        });
}

function setCardsVisibility() {
    const cardsContainer = document.querySelector('.result__items');
    let shownCardsCount = 0;
    let resultVisibleCardsCount = 0;

    cardsContainer.children.forEach(item => {

        if (!item.classList.contains('result__item_hidden')) {
            resultVisibleCardsCount++;
        }

        if (shownCardsCount < CARDS_TO_SHOW_COUNT && item.classList.contains('result__item_hidden')) {
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
    const input = event.target;
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

function initPage() {
    const articles = dataStorage.getArticles();
    const searchText = dataStorage.getQueryName();


    if (typeof (articles) != 'undefined' && articles.length > 0) {
        resulSection.classList.remove('result_hidden');
        newsCardList.createCardList(articles);
    }
    setCardsVisibility();

    if (typeof (searchText) != 'undefined' && searchText != '') {
        input.setText(searchText);
    }
}

initPage();