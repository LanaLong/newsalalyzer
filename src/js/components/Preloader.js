export default class Preloader {
    constructor(container) {
        this._container = container;
    }

    viewPreloader() {
        return `
         <section class="preloader preloader_hidden">
            <div class="container preloader__container">
                <i class="preloader__icon"></i>
                <p class="preloader__text text_type_minor">Идет поиск новостей...</p>
            </div>
        </section>
        `
        // const containerPreload = document.createDocumentFragment();
        // const preloader = document.createElement('div');
        // const preloaderIcon = document.createElement('div');
        // const preloaderText = document.createElement('div');

        // preloader.classList.add('preloader');
        // preloaderIcon.classList.add('preloader__icon');
        // preloaderText.classList.add('preloader__text');
        // preloaderText.textContent = 'Идет поиск новостей...';

        // preloader.appendChild(preloaderIcon);
        // preloader.appendChild(preloaderText);
        // containerPreload.appendChild(preloader);
        // this._container.appendChild(containerPreload);

        // return containerPreload;
    }

    removePreloader() {
        const preloaderSection = this._container.querySelector('.preloader');
        if (preloaderSection) {
            this._container.removeChild(preloadeSection);
        }
    }

}