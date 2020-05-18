import '../../vendor/swiper/swiper.min.css';
import { QueryBuilder, QueryBuider } from '../../js/utils/QueryBuilder';
import { GitHubApi } from '../../js/modules/GitHubApi';
import { CommitCardList } from '../../js/components/CommitCardList';

import './about.css';
import Swiper from 'swiper';


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const sliderContainer = document.querySelector('.slider__swiper-container');
const sliderWrapper = document.querySelector('.slider__swiper-wrapper');
const sliderSlide = document.querySelector('.slider__swiper-slide');
const sliderItem = document.querySelector('.slider__item');
const sliderData = document.querySelector('.slider__data');
const sliderInfo = document.querySelector('.slider__info');
const sliderText = document.querySelector('.slider__text');

const githubQueryBuilder = new QueryBuider('https://api.github.com/repos/LanaLong/newsalalyzer/commits');
const githubClient = new GitHubApi(githubQueryBuilder);

const commitCardList = new CommitCardList();

function viewCommits() {
    githubClient.getCommits()
        .then(res => res.json())
        .then(res => {
            console.log('Received commits');
            res.forEach(item => {
                // посмотреть, что находится внутри коммита
                // console.log(item);

                // запись коммита в html элемент
                //
                // let sliderText = document.createElement('div');
                // sliderText.classList.add('slider__text');
                // sliderText.textContent = item.commit.message;
                // потом этот элемент закинуть в slider_item и добавить в контейнер
                // аналогично с другими элементами
            });
        });
};

viewCommits();