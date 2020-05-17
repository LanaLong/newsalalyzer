import '../../vendor/swiper/swiper.min.css';
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


