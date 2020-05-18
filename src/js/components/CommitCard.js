class CommitCard {
    constructor(commitDate, ghAvatar, commitTitle, commitEmail, commitText) {
        this.commitDate = commitDate;
        this.ghAvatar = ghAvatar;
        this.commitTitle = commitTitle;
        this.commitEmail = commitEmail;
        this.commitText = commitText;

    }

    createMarkup(data) {
        return `
            <div class="slider__item">
                <time class="text slider__data" datetime="2019-08-14">${this.commitDate}</time>
                <div class="slider__info">
                    <img src="<%=require('${this.ghAvatar}').default%>" alt="Avatar img"
                        class="slider__avatar">
                    <div class="slider__info-text">
                        <h3 class="title slider__title">${this.commitTitle}</h3>
                        <p class="text slider__email">${this.commitEmail}</p>
                    </div>
                </div>
                <p class="text slider__text">${this.commitText}</p>
            </div>
        `
    }

    // const sliderContainer = document.querySelector('.slider__swiper-slide');
    // sliderContainer.append(...);
}

export { CommitCard };