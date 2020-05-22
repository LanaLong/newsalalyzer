class GitHubApi {
    constructor(builder) {
        this._builder = builder;
    }

    getCommits() {
        const url = this._builder.build();
        return fetch(url)
            .then(res => {
                if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json(); //если res.ok===true возвращаем результат запроса);
            });
    }
}

export { GitHubApi };