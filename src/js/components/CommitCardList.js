import { CommitCard } from './CommitCard';

class CommitCardList {
    constructor() {

    }

    createCommitCardList(data) {
        const sliderWrapper = document.querySelector('.slider__swiper-wrapper');
        // const sliderItem = document.querySelector('.slider__item');

        data.forEach(commit => {
            let commitCard = new CommitCard(commit.author.date, commit.author.AVATAR_WHERE_IT, commit.author.name, commit.author.email, commit.message);

            sliderWrapper.insertAdjacentHTML('afterbegin', commitCard.createMarkup());
        });
    }
}

// const sliderContainer = document.querySelector('.slider__swiper-container');
// const sliderWrapper = document.querySelector('.slider__swiper-wrapper');
// const sliderSlide = document.querySelector('.slider__swiper-slide');
// const sliderItem = document.querySelector('.slider__item');
// const sliderData = document.querySelector('.slider__data');
// const sliderInfo = document.querySelector('.slider__info');
// const sliderText = document.querySelector('.slider__text');