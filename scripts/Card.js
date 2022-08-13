class Card {
    _name
    _link
    _cardSelector
    _popup

    constructor(data, cardSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._popup = document.querySelector('.popup_type_large-image');
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
          const cardElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.card')
          .cloneNode(true);
          
          return cardElement;
    } 
    
    generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = `Картинка с местом ${this._name} маленького размера`;
    return this._element;
    } 
  
    _setEventListeners() {
        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => (
            this._handleCardClick(this._name, this._link)
        ))
    }
    
    _handleLikeClick() {
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _handleDeleteClick() {
        this._element.closest('.card').remove();
    }
}

export default Card;