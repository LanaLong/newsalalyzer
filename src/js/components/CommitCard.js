class CommitCard {
    constructor(commitDate, ghAvatar, commitAuthor, commitEmail, commitText) {
        this.commitDate = commitDate;
        this.ghAvatar = ghAvatar;
        this.commitAuthor = commitAuthor;
        this.commitEmail = commitEmail;
        this.commitText = commitText;
    }

    createMarkup(data) {
        let date = new Date(this.commitDate);
        let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        let dateDay = date.getDay() + 1;
        let dateMonth = month[date.getMonth()];
        let dateYear = date.getFullYear();

        let stringDate = `${dateDay} ${dateMonth}, ${dateYear}`;


        return `
            <div class="slider__item">
                <time class="text slider__data" datetime="2019-08-14">${stringDate}</time>
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
        `
    }

    // const sliderContainer = document.querySelector('.slider__swiper-slide');
    // sliderContainer.append(...);
}

export { CommitCard };