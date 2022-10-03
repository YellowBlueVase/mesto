class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._cardId = config._id;
        this._likesCounter = config.likes;
        this._urlCards = `${this._url}cards/`;
        this._urlProfile = `${this._url}users/me/`;
    }

    getProfileInfo() {
      return fetch(this._urlProfile, {
        method: 'GET',
        headers: this._headers
        })
      .then((res) => {
        if (res.ok) {
          console.log(`Статус получения профиля - ${res.status}`)
          return res.json()}
        return Promise.reject(`Ошибка по адресу ${this._urlProfile}, статус ошибки ${res.status}`)
        })
    }

    getCardInfo(cardId) {
      return fetch(`${this._urlCards}${cardId}`, {
        method: 'GET',
        headers: this._headers
        })
      .then((res) => {
        if (res.ok) {
          console.log(`Статус получения профиля - ${res.status}`)
          return res.json()}
        return Promise.reject(`Ошибка по адресу ${this._urlCards}${cardId}, статус ошибки ${res.status}`)
        })
    }
    
    getInitialCards() {
      return fetch(this._urlCards, {
        method: 'GET',
        headers: this._headers
        })
        .then((res) => {
          if (res.ok) {
            console.log(`Статус получения карточек - ${res.status}`)
            return res.json()}
          return Promise.reject(`Ошибка по адресу ${this._urlCards}, статус ошибки ${res.status}`)
        })
    }

    updateProfile(data) {
      return fetch(this._urlProfile, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
        })
        .then(res => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка по адресу ${this._profileUrl}, статус ошибки ${res.status}`)
        })
    }

    addNewCard(data) {
      return fetch(this._urlCards, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
        })
      .then((res) => {
        if (res.ok) {
          return res.json()}
        return Promise.reject(`Ошибка по адресу ${this._urlCards}, статус ошибки ${res.status}`)
        })
      }

    deleteCard(cardId) {
      return fetch(`${this._urlCards}${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
        })
      .then((res) => {
        if (res.ok) {
          return res.json()}
        return Promise.reject(`Ошибка по адресу ${this._urlCards}${cardId}, статус ошибки ${res.status}`)
        })
      }
    
    addLike(cardId) {
      return fetch(`${this._urlCards}${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
        })
        .then((res) => {
          if (res.ok) {
            return res.json()}
          return Promise.reject(`Ошибка по адресу ${this._urlCards}${cardId}/likes, статус ошибки ${res.status}`)
        })
    }

    deleteLike(cardId) {
      return fetch(`${this._urlCards}${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        })
        .then((res) => {
          if (res.ok) {
            return res.json()}
          return Promise.reject(`Ошибка по адресу ${this._urlCards}${cardId}/likes, статус ошибки ${res.status}`)
        })
    }

    updateAvatar(data) {
      return fetch(`${this._urlProfile}avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
        })
        .then(res => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка по адресу ${this._urlProfile}avatar, статус ошибки ${res.status}`)
        })
    }

}

export default Api;