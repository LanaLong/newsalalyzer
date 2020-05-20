import { CommitCard } from './CommitCard';

class CommitCardList {
    constructor() {
        this.sliderWrapper = document.querySelector('.slider__swiper-wrapper');
    }

    createCommitCardList(data) {

        data.forEach(item => {
            let commitCard = this.createCommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message);

            this.sliderWrappersliderWrapper.insertAdjacentHTML('beforeend', commitCard.createMarkup());
        });
    }
}

export { CommitCardList };