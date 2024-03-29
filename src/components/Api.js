class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._cardId = config._id;
        this._likesCounter = config.likes;
        this._urlCards = `${this._url}cards/`;
        this._urlProfile = `${this._url}users/me/`;
    }

    _getResponseData(url, res) {
      if (res.ok) {
        // console.log(`Статус получения профиля - ${res.status}`)
        return res.json()}
      return Promise.reject(`Ошибка по адресу ${url}, статус ошибки ${res.status}`)
    }

    getProfileInfo() {
      return fetch(this._urlProfile, {
        method: 'GET',
        headers: this._headers
        })
      .then((res) => {
         return this._getResponseData(this._urlProfile, res)
        })
    }

    getCardInfo(cardId) {
      return fetch(`${this._urlCards}${cardId}`, {
        method: 'GET',
        headers: this._headers
        })
      .then((res) => {
          this._getResponseData(`${this._urlCards}${cardId}`, res)
        })
    }
    
    getInitialCards() {
      return fetch(this._urlCards, {
        method: 'GET',
        headers: this._headers
        })
        .then((res) => {
          return this._getResponseData(this._urlCards, res)
        })
    }

    updateProfile(data) {
      return fetch(this._urlProfile, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
        })
        .then(res => {
          return this._getResponseData(this._urlProfile, res)
        })
    }

    addNewCard(data) {
      return fetch(this._urlCards, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
        })
      .then((res) => {
          return this._getResponseData(this._urlCards, res)
        })
      }

    deleteCard(cardId) {
      return fetch(`${this._urlCards}${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
        })
      .then((res) => {
          return this._getResponseData(`${this._urlCards}${cardId}`, res)
        })
      }
    
    addLike(cardId) {
      return fetch(`${this._urlCards}${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
        })
        .then((res) => {
          return this._getResponseData(`${this._urlCards}${cardId}/likes`, res)
        })
    }

    showLikes(cardId) {
      return fetch(`${this._urlCards}${cardId}/likes`, {
        method: 'GET',
        headers: this._headers,
        })
        .then((res) => {
          return this._getResponseData(`${this._urlCards}${cardId}/likes`, res)
        })
    }

    deleteLike(cardId) {
      return fetch(`${this._urlCards}${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        })
        .then((res) => {
          return this._getResponseData(`${this._urlCards}${cardId}/likes`, res)
        })
    }

    updateAvatar(data) {
      return fetch(`${this._urlProfile}avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
        })
        .then(res => {
          return this._getResponseData(this._urlProfile, res)
        })
    }

}

export default Api;