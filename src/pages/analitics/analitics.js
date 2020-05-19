import './analitics.css';
import { DataStorage } from '../../js/modules/DataStorage';
import { Statistics } from '../../js/components/Statistics';

const requestKeyWord = document.querySelector('#keyWord');
const requestWeekCount = document.querySelector('#weekCount');
const requestTitleCount = document.querySelector('#titleCount');
const schemeItems = document.querySelector('.scheme__items');
// const schemeItem = document.querySelector('.scheme__item');
// const schemeDataItem = document.querySelector('.scheme__data-item');
// const schemeValueItem = document.querySelector('.scheme__value-item');

const dataStorage = new DataStorage();

requestKeyWord.textContent = dataStorage.getQueryName();
requestWeekCount.textContent = dataStorage.getNewsCount();
requestTitleCount.textContent = dataStorage.getTitleMentionCount();

console.log(dataStorage.getStatistics());
var parsedStatistics = JSON.parse(dataStorage.getStatistics());


Object.keys(parsedStatistics)
    .sort()
    .forEach(function (v, i) {
        let statisticsInfo = parsedStatistics[v];

        let statisticsLine = new Statistics(statisticsInfo.date, statisticsInfo.articlesCount);
        console.log(statisticsLine);
        schemeItems.insertAdjacentHTML('beforeend', statisticsLine.createSchemeItem());
    });