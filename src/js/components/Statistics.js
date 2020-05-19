class Statistics {
    constructor(lineDate, lineValue) {
        this.lineDate = lineDate;
        this.lineValue = lineValue;

    }

    createSchemeItem(data) {
        return `
            <div class="scheme__item">
                <div class="scheme__data-item">${this.lineDate}</div>
                <span class="scheme__value-item">${this.lineValue}</span>
                <svg class="scheme__bar-container" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect class="scheme__value-bar" fill="#2F71E5" width="${this.lineValue}%" />
                </svg>
            </div>
        `
    }

    // сформировать строки в таблицу аналитики
    // schemeItems.append(...);




}

export { Statistics };