class Api { 
  constructor({ address, token, groupID }) { 
    this._address = address; 
    this._token = token; 
    this._groupID = groupID; 
  } 
 
  // приватный метод, который получает ответ с сервера и возвращает данные или ошибку 
  _checkResponse(res) { 
    if (res.ok) { 
      // если ответ сервера 200, возвращаются данные 
      return res.json(); 
    } 
    // иначе возвращаем промис с ошибкой 
    return Promise.reject(`Ошибка ${res.status}`); 
  } 
 
  //публичный метод, который получает информацию о пользователе с сервера 
  getUsers() { 
    return fetch(`${this._address}/v1/${this._groupID}/users/me`, { 
      headers: { 
        authorization: this._token 
      } 
    }) 
      .then(this._checkResponse) 
  } 
 
  // метод, который отправляет запрос на сервер для загрузки карточек 
  getCards() { 
    return fetch(`${this._address}/v1/${this._groupID}/cards`, { 
      headers: { 
        authorization: this._token 
      } 
    }) 
      .then(this._checkResponse) 
  } 
 
  // метод, который отправляет запрос на сервер для редактирования данных профиля 
  editUser(data) { 
    return fetch(`${this._address}/v1/${this._groupID}/users/me`, { 
      method: 'PATCH', 
      headers: { 
        authorization: this._token, 
        'Content-type': 'application/json' 
      }, 
      body: JSON.stringify({ 
        name: data.name, 
        about: data.about 
      }) 
    }) 
      .then(this._checkResponse) 
  } 
 
  // метод добавления карточки на сервер 
  addCard(data) { 
    return fetch(`${this._address}/v1/${this._groupID}/cards`, { 
      method: 'POST', 
      headers: { 
        authorization: this._token, 
        'Content-type': 'application/json' 
      }, 
      body: JSON.stringify({ 
        name: data.name, 
        link: data.link 
      }) 
    }) 
      .then(this._checkResponse) 
  } 
 
  // метод удаления карточки 
  removeCard(id) { 
    return fetch(`${this._address}/v1/${this._groupID}/cards/${id}`, { 
      method: 'DELETE', 
      headers: { 
          authorization: this._token 
      } 
    }) 
      .then(this._checkResponse) 
 
  }  
 
  addLikeCard(id) { 
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${id}`, { 
      method: 'PUT', 
      headers: { 
        authorization: this._token 
      } 
    }) 
      .then(this._checkResponse) 
  } 
 
  removeLikeCard(id) { 
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${id}`, { 
      method: 'DELETE', 
      headers: { 
        authorization: this._token 
      } 
    }) 
      .then(this._checkResponse) 
  } 
 
  editAvatar({avatar}) {  
    return fetch(`${this._address}/v1/${this._groupID}/users/me/avatar`, {  
      method: 'PATCH',  
      headers: {  
        authorization: this._token,  
        'Content-type': 'application/json'  
      },  
      body: JSON.stringify({  
        avatar: avatar,  
      })  
    })  
      .then(this._checkResponse) 
  }  
} 
 
const api = new Api({ 
  address: 'https://mesto.nomoreparties.co', 
  token: '6db4154b-d992-4850-8211-1b620ba1fb44', 
  groupID: 'cohort-22' 
}); 
 
export default api; 