import { CommitCard } from './CommitCard';

class CommitCardList {
    constructor() {

    }

    createCommitCardList(data) {
        const sliderWrapper = document.querySelector('.slider__swiper-wrapper');

        let showedCards = 0;

        data.forEach(item => {
            console.log(item);
            let commitCard = new CommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message, true);

            sliderWrapper.insertAdjacentHTML('beforeend', commitCard.createMarkup());
        });
    }
}

export { CommitCardList };