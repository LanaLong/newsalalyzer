// SearchInput.Конструктор класса принимает колбэк - функцию, исполняемую при сабмите формы поиска.В колбэк - функции описывается взаимодействие с API, списком карточек и локальным браузерным хранилищем.Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать полученные данные на странице.Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.

class SearchInput {
    constructor() {
        this.searchForm = document.querySelector('.search__form');
        this.searchInput = document.querySelector('.search__input');
        this.searchButton = document.querySelector('.search__button');
    }

    setSubmitListener(submitCallback) {
        this.searchForm.addEventListener('submit', submitCallback);

        return this;
    }

    setInputListener(inputListener) {
        this.searchInput.addEventListener('input', inputListener);

        return this;
    }

    block() {
        this.searchInput.setAttribute('disabled', true);
        this.searchButton.setAttribute('disabled', true);
    };

    unblock() {
        this.searchInput.removeAttribute('disabled');
        this.searchButton.removeAttribute('disabled');
    };
}

export { SearchInput };