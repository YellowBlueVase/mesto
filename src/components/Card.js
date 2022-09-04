class Card {
    constructor(data, cardSelector, handleCardClick, popup) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._popup = popup;
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
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardImage = this._element.querySelector('.card__image');
        this._card = this._element.closest('.card')
        this._cardLike = this._element.querySelector('.card__like');
        this._cardDeleteButton = this._element.querySelector('.card__delete-button');
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = `Картинка с местом ${this._name} маленького размера`;
        this._setEventListeners()
        return this._element;
    } 
  
    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._popup, this._name, this._link);
        })
    }
    
    _handleLikeClick() {
        this._cardLike.classList.toggle('card__like_active');
    }

    _handleDeleteClick() {
        this._card.remove();
    }
}

export default Card;