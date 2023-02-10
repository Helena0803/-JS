const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const btnClosePopupForm = document.querySelector('#close-btn');
const formAddDog = document.querySelector('#popup-form-dog');
const formEditDog = document.querySelector('#popup-form-edit');


const popupAddDog = new Popup('popup-add-dogs');
popupAddDog.setEventListener();
const popupEditDog = new Popup('popup-edit-dogs');
popupEditDog.setEventListener();

// console.log({popupAddDog});

// const cardInstance = new Card(dog[0], '#card-template');
// const newCardElement = cardInstance.getElement();
// cardsContainer.append(newCardElement);
// console.log({cardsContainer});

// императивный подход - сделай вот и вот так
// for(let i= 0; i < dogs.length; i++) {
// const cardInstance = new Card(dogs[i], '#card-template');
// const newCardElement = cardInstance.getElement();
// cardsContainer.append(newCardElement);

// }
// декларативный подход - описание того что нужно сделать
dogs.forEach((dog) => {
createDog(dog);
});



// функция, которая будет вставлять данные из формы в template, который мы создалии ранее
// c данными из этой формы
// данные по структуре будут иметь те же ключи, что и в массиве dogs.js
function handleFormAddDog(e, isEdit) {
  // e.preventDefault();
//   console.log(formAddDog.elements);
if (isEdit) {
  const elementsFormDog = [...formEditDog.elements];
  const dataFromForm = serializeForm(elementsFormDog);
  // console.log({ dataFromForm });
  api.updateDogById(dataFromForm.id, dataFromForm);
     return popupEditDog.close();
}
 const elementsFormDog = [...formAddDog.elements];
 const dataFromForm = serializeForm(elementsFormDog);
 api.addNewDog(dataFromForm);
 createDog(dataFromForm);
const oldStorage = JSON.parse(localStorage.getItem('dogs'));
oldStorage.push(dataFromForm);
localStorage.setItem('dogs', JSON.stringify(oldStorage));
const setTime = new Date(new Date().getTime() + 6000);
localStorage.setItem('dogsRefresh', setTime);
updateLocalStorage(dogs, {type: 'ADD_DOG'});
 popupAddDog.close();
  
  // createDog(dataFromForm);
  //  popupAddDog.close();
}

// api.getAllDogs().then((data) =>
//   data.forEach((dog) => {
//     createDog(dog);
//     const btnDel = document.addEventListener('click', () =>
//       deleteDog(dog)
//     );
//   })
// );

// // api.deleteDogById('')

api.getAllDogs().then((data) => 
data.forEach((dog) => {
  createDog(dog)
})
);

btnOpenPopupForm.addEventListener('click', () => popupAddDog.open());
btnClosePopupForm.addEventListener('click', () => popupAddDog.close());
 formAddDog.addEventListener('submit', handleFormAddDog);
formEditDog.addEventListener('submit', (e) => handleFormAddDog(e, true));

    function checkLocalStorage() {
      const localData = JSON.parse(localStorage.getItem('dogs'));
      // console.log({localData});
      const getTimeExpires = localStorage.getItem('dogsRefresh');

      if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
        localData.forEach((data) => createDog(data));
      } else {
        api.getAllDogs().then((data) => {
          localStorage.setItem('dogs', JSON.stringify(data));
          data.forEach((dog) => {
            createDog(dog);
          });
        });
      //  updateLocalStorage(dogs, {type: 'ALL_DOGS'});
        const setTime = new Date(new Date().getTime() + 5000);
        localStorage.setItem('dogsRefresh', setTime);
      }
    }

    function onClickToEdit(card, id, image) {
      console.log({ card, id, image});
      popupEditDog.setContent(card, id, image);
      popupEditDog.open(card);
        }
    
    checkLocalStorage()
    
// document.cookie = "Luck=IamYourFather";
// Cookies.set('YourName', 'DifferentValue');
// console.log(Cookies.get('YourName'));
// Cookies.remove('YourName');

// const storage = window.localStorage;
// console.log({storage});
// localStorage.setItem('test1', 'value1');
// localStorage.setItem('dogs', JSON.stringify(dogs));

const result = JSON.parse(localStorage.getItem('dogs'));
console.log(result.map((e) => ({...e, name: `${e.name}  +  edited`})));
sessionStorage.setItem('dogs',JSON.stringify([{name: 'Dog'}, {name: 'Dog2'}]));