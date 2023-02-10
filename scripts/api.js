// - GET (https://cats.petiteweb.dev/api/single/:user/show) - отобразить всех котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/ids) - отобразить все возможные айди котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/show/:id) - отобразить конкретного котика
// - POST (https://cats.petiteweb.dev/api/single/:user/add) - добавить котика
// - PUT (https://cats.petiteweb.dev/api/single/:user/update/:id) - изменить информацию о котике
// - DELETE (https://cats.petiteweb.dev/api/single/:user/delete/:id)- удалить котика из базы данных by id

const configApi = {
    url:'https://cats.petiteweb.dev/api/single/chetyre-lapy',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  };
  
  class Api {
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
    _onResponse(res) {
      return res.ok ? res.json() : Promise.reject({...res, message: 'error'});
    }
     getAllDogs() {
      /// отобразить всех собачек
     return fetch(`${this._url}/show`, {
        method: 'GET',
      }).then(this._onResponse);
    }

    getAllDogsId() {
      /// отобразить все возможные айди собачек
      return fetch(`${this._url}/ids`, {
        method: 'GET',
      }).then(this._onResponse);
    }

    getDogById(id) {
      /// отобразить конкретного щенка
      return fetch(`${this._url}/show/${id}`, {
        method: 'GET',
      }).then(this._onResponse);
    }

    addNewDog(body) {
      return fetch(`${this._url}/add`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(body),
      }).then(this._onResponse);
    }
    updateDogById(id, body) {
      return fetch(`${this._url}/update/${id}`, {
        method: 'PUT',
        headers: this._headers,
        body: JSON.stringify(body),
      }).then(this._onResponse);
    }
    deleteDogById(id) {
      /// удалить конкретного щенка по айди
      return fetch(`${this._url}/delete/${id}`, {
        method: 'DELETE',
      }).then(this._onResponse);
    }
  }
    const api = new Api(configApi);
  // console.log(api);
  
  // const newDog = {
  //   "id": 1,
  //   "name": "Чара",
  //   "favorite": false,
  //   "rate": 10,
  //   "age": 2,
  //   "description": "Пудель – невероятно энергичное и жизнерадостное, озорное существо, которое обожает дурачиться, и в любое время суток готов к играм и развлечениям.",
  //   "image": "https://images.prismic.io/doge/c5c2d5d0-fae5-4934-b607-b5651f7c9dda_554454713_23.jpg?auto=compress,format&rect=427,0,1002,1002&w=456&h=456api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
  // };
  // const newCatUpdated = {
  //   id: 1673690003098,
  //   name: 'MotrosknUpdated',
  //   image: 'https://http.cat/100',
  // };
  
  // api.getAllDogs({});
  // api.getAllDogsId();
  // api.getDogById(9);
  // api.addNewDog(newDog)
  // api.updateDogById(9, newDogUpdated)
  
  