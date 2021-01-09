class NewsApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getAllArticles(tag) {
        return fetch(`${this._baseUrl}&q=${tag}`, {
            headers: this._headers
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

}
    export const newsApi = new NewsApi({
        baseUrl: 'http://newsapi.org/v2/everything?' +
            'sortBy=popularity&' +
            'pageSize=100&' +
            'apiKey=776d3c0e31d24dc0a5f7090b88d31b37',
        headers: {
            // 'Content-Type': 'application/json'
        }
    })