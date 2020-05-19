import { CommitCard } from './CommitCard';

class CommitCardList {
    constructor() {

    }

    createCommitCardList(data) {
        const sliderWrapper = document.querySelector('.slider__swiper-wrapper');

        let showedCards = 0;

        data.forEach(item => {


            console.log(item.author.avatar_url);
            let commitCard = '';

            if (showedCards < 3) {
                showedCards++;
                commitCard = new CommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message, true);
            }
            else {
                commitCard = new CommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message, false);
            }


            sliderWrapper.insertAdjacentHTML('afterbegin', commitCard.createMarkup());
        });
    }
}

export { CommitCardList };