export default class RequestError {
    constructor(container) {
        this._container = container;
    }

    viewRequestError(title = 'Ничего не найдено', subtitle = 'К сожалению, по вашему запросу ничего&nbsp;не найдено') {
        const containerRequestError = document.createDocumentFragment();
        const noResultsContainer = document.createElement('div');
        {/* const noResults = document.createElement('div'); */ }
        const noResultsImg = document.createElement('img');
        const noResultsTitle = document.createElement('h3');
        const noResultsSubtitle = document.createElement('p');

        containerRequestError.classList.add('no-results');
        noResultsContainer.classList.add('container', 'no-results__container');
        noResultsImg.classList.add('no-results__img');
        {/* noResultsImg.addAttribute.(alt, 'Ничего не найдено'); */ }
        noResultsTitle.classList.add('title', 'no-results__title');
        noResultsSubtitle.classList.add('no-results__subtitle', 'text_type_minor');

        noResultsTitle.textContent = title;
        noResultsSubitle.textContent = subtitle;

        containerRequestError.appendChild(noResultsContainer);
        noResultsContainer.appendChild(noResultsImg);
        noResultsContainer.appendChild(noResultsTitle);
        noResultsContainer.appendChild(noResultsSubtitle);
        this._container.appendChild(containerRequestError);

        return containerRequestError;
        //not works???
    }

    removeRequestError() {
        const notResultsSection = this._container.querySelector('.no-results');
        if (notResultsSection) {
            this._container.removeChild(notResultsSection);
        }
    }

}