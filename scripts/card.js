// const card = document.querySelector('#tmp-card');
// const template = document.querySelector('#card-template').content;

//  console.log({ card });
//  console.log({ template });



class Card {
    constructor(dataDog, selectorTemplate) {
      this._data = dataDog;
      this._selectorTemplate = selectorTemplate;
    }
  
    _getTemplate() {  // возвращает содержимое шаблона в виде дом -узла
        // узел типа тег  btn div
  // узел типа text  какойто текст
  // узел типа 'элемент
  // узел типа - документ фрагмент у него свойство content

      return document.querySelector(this._selectorTemplate).content.querySelector('.card');
      // документ фрагмент -  это легковесная версия ноды типа элемент. 
    }
    getElement() {
      this.element = this._getTemplate().cloneNode(true);
      const cardTitle = this.element.querySelector('.card__name');
      const cardImage = this.element.querySelector('.card__image');
      const cardLike = this.element.querySelector('.card__like');
  
     if (!this._data.favorite) {
        cardLike.remove();
     }
  
      cardTitle.textContent = this._data.name ?? 'Рокки';
      cardImage.src = this._data.image;
      return this.element;
    }
  }
  
  // const card = new Card(dogs[0], '#card-template');
  
  // card.getElement();
  
  // console.log({ card });
  
  
