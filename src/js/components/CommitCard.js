import { DateHelper } from '../utils/DateHelper';


class CommitCard {
    constructor(commitData) {
        this.commitDate = commitData.date;
        this.ghAvatar = commitData.avatar;
        this.commitAuthor = commitData.author;
        this.commitEmail = commitData.email;
        this.commitText = commitData.text;
    }

    createMarkup() {

        const commitDate = DateHelper.ToCommitDateFormat(this.commitDate);
        const commitDateTag = DateHelper.ToDateTagFormat(this.commitDate);

        return `
        <div class="swiper-slide slider__swiper-slide">
            <div class="slider__item">
                <time class="text slider__data" datetime=${commitDateTag}>${commitDate}</time>
                <div class="slider__info">
                    <img src="${this.ghAvatar}" alt="Avatar img"
                        class="slider__avatar">
                    <div class="slider__info-text">
                        <h3 class="title slider__title">${this.commitAuthor}</h3>
                        <p class="text slider__email">${this.commitEmail}</p>
                    </div>
                </div>
                <p class="text slider__text">${this.commitText}</p>
            </div>
        </div>
        `
    }
}

export { CommitCard };