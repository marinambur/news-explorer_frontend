class MainApi {
    constructor ({ baseUrl, headers }) {
        this._url = baseUrl;
        this._headers = headers;
    }

    signin ({ email, password }) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }

    signup ({ email, password, name }) {
        console.log({ email, password, name })
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }

    getUserInfo (token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }

    showArticles(token) {
        return fetch(`${this._url}/articles`, {
            method: 'GET',
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }

    saveArticle(token, {
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
    }) {
        return fetch(`${this._url}/articles`, {
            method : 'POST',
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                keyword,
                title,
                text,
                date,
                source,
                link,
                image,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }

    deleteArticle (token, id) {
        console.log('token', token)
        console.log('id', id)
        return fetch(`${this._url}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://api.marinambur2611.students.nomoreparties.xyz',
    headers: {
        "Content-Type": "application/json"
    },
})

export default mainApi;