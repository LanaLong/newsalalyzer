const searchForm = document.querySelector('.search__form');
const searchButton = document.querySelector('.search__button');
const searchError = document.querySelector('.search__error');


function checkInputValidity(input) {
    if (input.validity.valueMissing || input.validity.tooShort) {
        searchError.classList.remove('search__error_hide');
        return false;
    } else if (input === 0) {
        searchError.classList.remove('search__error_hide');
        return false;
    }
    else {
        searchError.classList.add('search__error_hide');
        return true;
    }
};

function handleValidate(event) {
    event.preventDefault();

    checkInputValidity(event.target);
    searchButton.disabled = !searchForm.checkValidity();
}

export { handleValidate };