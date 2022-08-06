class Card {
    _name
    _link
    _cardSelector
    _popup

    constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._popup = document.querySelector('.popup_type_large-image')
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

    return this._element;
    } 
  
    _setEventListeners() {
        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this._handleClosePopup();
        });
    }
    
    _handleLikeClick() {
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _handleDeleteClick() {
        this._element.closest('.card').remove();
    }

    _handleOpenPopup() {
        this._popup.classList.add('popup_opened')
        document.querySelector('.image-container__image').src = this._link;
        document.querySelector('.image-container__title').textContent = this._name;
        window.addEventListener('keydown', this._closePopupEsc)
    }

    _closePopupEsc = event => {
        if (event.keyCode == 27) {
            this._handleClosePopup()
          }
        }

    _handleClosePopup() {
        this._popup.classList.remove('popup_opened')
        window.removeEventListener('keydown', this._closePopupEsc)
    }
}

export default Card;