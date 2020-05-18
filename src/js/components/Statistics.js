class Statistics {
    constructor() {

    }

    createSchemeItem(data) {
        return `
            <div class="scheme__item">
                <div class="scheme__data-item">${lineDate}</div>
                <span class="scheme__value-item">${lineValue}</span>
                <svg class="scheme__bar-container" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect class="scheme__value-bar" fill="#2F71E5" width="${lineValue}%" />
                </svg>
            </div>
        `
    }

    // сформировать строки в таблицу аналитики


    const schemeItems = document.querySelector('.scheme__items');
    // schemeItems.append(...);




}