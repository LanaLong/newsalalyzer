class CommitCardList {
    constructor(createCommitCard) {
        this.createCommitCard = createCommitCard;
        this.sliderWrapper = document.querySelector('.slider__swiper-wrapper');
    }

    createCommitCardList(data) {

        data.slice(0, 20).forEach(item => {
            let commitCard = this.createCommitCard(item.commit.author.date, item.author.avatar_url, item.author.login, item.commit.committer.email, item.commit.message);

            this.sliderWrapper.insertAdjacentHTML('beforeend', commitCard.createMarkup());
        });
    }
}

export { CommitCardList };