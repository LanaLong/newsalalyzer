import { CommitCard } from './CommitCard';

class CommitCardList {
    constructor() {

    }

    createCommitCardList(data) {
        const sliderWrapper = document.querySelector('.slider__swiper-wrapper');
        // const sliderItem = document.querySelector('.slider__item');

        let showedCards = 0;

        data.forEach(item => {


            console.log(item.author.avatar_url);

            if (showedCards < 3) {
                showedCards++;
                let commitCard = new CommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message, true);
            }
            else {
                let commitCard = new CommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message, false);
            }


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

export { CommitCardList };