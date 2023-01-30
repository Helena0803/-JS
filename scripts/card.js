// const card = document.querySelector('#tmp-card');
// const template = document.querySelector('#card-template').content;

//  console.log({ card });
//  console.log({ template });



class Card {
    constructor(dataDog, selectorTemplate, onClickToEdit) {
      this._data = dataDog;
      this._selectorTemplate = selectorTemplate;
      this.onClickToEdit = onClickToEdit;
    }
  
    _getTemplate() {  // возвращает содержимое шаблона в виде дом -узла
        // узел типа тег  btn div
  // узел типа text  какойто текст
  // узел типа 'элемент
  // узел типа - документ фрагмент у него свойство content

      return document.querySelector(this._selectorTemplate).content.querySelector('.card');
   }
    getElement() {
      this.element = this._getTemplate().cloneNode(true);
      const cardTitle = this.element.querySelector('.card__name');
      const cardImage = this.element.querySelector('.card__image');
      const cardLike = this.element.querySelector('.card__like');
      const delBtn = this.element.querySelector('.card__delete');
      const cardLink = this.element.querySelector('.card__link');
      this.cardTitle = this.element.querySelector('.card__name');

      this.element.setAttribute('id', this._data.id);
      //delBtn.setAttribute('id', this._data.id);
      // console.log({delBtn});
      delBtn.addEventListener(('click'), (e) => {
     if(confirm('Подтвердите действие')) {
      api.deleteDogById(this._data.id).then(() => {
        const elem = document.getElementById(this._data.id);
        elem.remove();
        //elem.parentElement.remove()
    });
  }
  });


     if (!this._data.favorite) {
        cardLike.remove();
     }
  
      cardTitle.textContent = this._data.name ?? 'Рокки';
      cardImage.src = this._data.image;
    

  
      cardLink.addEventListener('click',() => {
        this.onClickToEdit(this.element, this._data.id)
      })
      return this.element;
    }
  }
  
  // const card = new Card(dogs[0], '#card-template');
  
  // card.getElement();
  
  // console.log({ card });
  
  
