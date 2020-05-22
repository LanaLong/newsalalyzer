class CommitCardList {
    constructor(createCommitCard) {
        this.createCommitCard = createCommitCard;
        this.sliderWrapper = document.querySelector('.slider__swiper-wrapper');
    }

    createCommitCardList(commits) {

        commits.slice(0, 20).forEach(item => {

            const commitArgs = {
                date: item.commit.author.date,
                avatar: item.author.avatar_url,
                login: item.author.login,
                email: item.commit.committer.email,
                text: item.commit.message
            };

            const commitCard = this.createCommitCard(commitArgs);

            this.sliderWrapper.insertAdjacentHTML('beforeend', commitCard.createMarkup());
        });
    }
}

export { CommitCardList };