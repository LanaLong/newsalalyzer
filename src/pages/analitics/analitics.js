import './analitics.css';
import { DataStorage } from '../../js/modules/DataStorage';
import { Statistics } from '../../js/components/Statistics';

const requestKeyWord = document.querySelector('#keyWord');
const requestWeekCount = document.querySelector('#weekCount');
const requestTitleCount = document.querySelector('#titleCount');
const schemeItems = document.querySelector('.scheme__items');
const dataMonth = document.querySelector('.data-month');

const dataStorage = new DataStorage();

requestKeyWord.textContent = dataStorage.getQueryName();
requestWeekCount.textContent = dataStorage.getNewsCount();
requestTitleCount.textContent = dataStorage.getTitleMentionCount();
dataMonth.textContent = dataStorage.getCurrentMonth();

const parsedStatistics = JSON.parse(dataStorage.getStatistics());

Object.keys(parsedStatistics)
    .sort()
    .forEach(function (key, index) {
        let statisticsInfo = parsedStatistics[key];

        let statisticsLine = new Statistics(statisticsInfo.date, statisticsInfo.articlesCount);
        schemeItems.insertAdjacentHTML('beforeend', statisticsLine.createSchemeItem());
    });