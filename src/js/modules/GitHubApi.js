class GitHubApi {
    constructor(builder) {
        this._builder = builder;
    }

    getCommits() {
        const url = this._builder.build();
        return fetch(url);
    }
}

export { GitHubApi };