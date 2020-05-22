import { DateHelper } from '../utils/DateHelper';


class CommitCard {
    constructor(commitDate, ghAvatar, commitAuthor, commitEmail, commitText) {
        this.commitDate = commitDate;
        this.ghAvatar = ghAvatar;
        this.commitAuthor = commitAuthor;
        this.commitEmail = commitEmail;
        this.commitText = commitText;
    }

    createMarkup(data) {

        const commitDate = dateHelper.ToCommitDateFormat(this.commitDate);
        const commitDateTag = dateHelper.ToDateTagFormat(this.commitDate);

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