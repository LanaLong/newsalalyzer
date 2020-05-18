class CommitCard {
    constructor() {

    }

    createMarkup(data) {
        return `
            <div class="slider__item">
                <time class="text slider__data" datetime="2019-08-14">${commitDate}</time>
                <div class="slider__info">
                    <img src="<%=require('${ghAvatar}').default%>" alt="Avatar img"
                        class="slider__avatar">
                    <div class="slider__info-text">
                        <h3 class="title slider__title">${commitTitle}</h3>
                        <p class="text slider__email">${commitEmail}</p>
                    </div>
                </div>
                <p class="text slider__text">${commitText}</p>
            </div>
        `
    }

    const sliderContainer = document.querySelector('.slider__swiper-slide');
    // sliderContainer.append(...);


}