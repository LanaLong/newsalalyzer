class SwiperHelper {

    static GetContainerName() {
        return '.swiper-container';
    }

    static GetOptions() {
        return {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    }
}

export { SwiperHelper };