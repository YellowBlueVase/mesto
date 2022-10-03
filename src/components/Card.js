class Card {
    constructor(data, cardSelector, handleCardClick, popup, handleDeletePopup, deletePopup, handleLikeClick) {
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._popup = popup;
      this._handleDeletePopup = handleDeletePopup;
      this._deletePopup = deletePopup;
      this._handleLikeClick = handleLikeClick;
      this._cardId = data._id;
      this._authorId = data.owner._id;
      this._myId = "ec658888750770166b55d7f7";
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
        this._cardLikeCounter = this._element.querySelector('.card__like-counter');
        if (this._likes.filter(item => item._id === this._myId).length > 0) {
            this._cardLike.classList.toggle('card__like_active');
          }
        if (this._authorId == this._myId) {this._cardDeleteButton.style.visibility="visible"}
        else {this._cardDeleteButton.style.visibility="hidden";};
        this._cardLikeCounter.textContent = this._likes.length;
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = `Картинка с местом ${this._name} маленького размера`;
        this._setEventListeners()
        return this._element;
    } 
  
    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {
            this._handleLikeClick(this._cardLike, this._cardLikeCounter, this._likes, this._cardId);
        });
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDeletePopup(this._deletePopup, this._element, this._cardId)
        })
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._popup, this._name, this._link);
        })

    }
}

export default Card;