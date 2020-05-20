class GitHubApi {
    constructor(builder) {
        this._builder = builder;
    }

    getCommits() {
        const url = this._builder.build();
        return fetch(url)
            .then(res => res.json());
    }
}

export { GitHubApi };