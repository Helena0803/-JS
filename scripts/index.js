const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
// const btnClosePopupForm = document.querySelector('#close-btn');
const formAddDog = document.querySelector('#popup-form-dog');
const popupAddDog = new Popup('popup-add-dogs');
popupAddDog.setEventListener();
// console.log({popupAddDog});


// const cardInstance = new Card(dog[1], '#card-template');
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

// btnOpenPopupForm.addEventListener('click', () => popupAddDog.open());
// // btnClosePopupForm.addEventListener('click', () => popupAddDog.close());
//  formAddDog.addEventListener('submit', handleFormAddDog);





// функция, которая будет вставлять данные из формы в template, который мы создалии ранее
// c данными из этой формы
// данные по структуре будут иметь те же ключи, что и в массиве dogs.js
function handleFormAddDog(e) {
  e.preventDefault();
  console.log(formAddDog.elements);

 const elementsFormDog = [...formAddDog.elements];
 const dataFromForm = serializeForm(elementsFormDog);
 api.addNewDog(dataFromForm);
 createDog(dataFromForm);
 popupAddDog.close();
  
  // createDog(dataFromForm);
   popupAddDog.close();
}


// function deleteDog(dog) {
//   console.log(dog);
  ///

  // api.deleteDogById(dog.id);
// }



// api.getAllDogs().then((data) =>
//   data.forEach((dog) => {
//     createDog(dog);
//     const btnDelete = document.addEventListener('click', () =>
//       deleteDog(dog)
//     );
//   })
// );

// // api.deleteDogById('')

// api.getAllDogs().then((data) => 
// data.forEach((dog) => {
//   createDog(dog)
// })
// );
    
