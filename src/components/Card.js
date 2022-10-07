class Card {
    constructor(cardData, myProfile, cardSelector, handleCardClick, handleLikeClick, handleDeletePopup) {
      this._name = cardData.name;
      this._link = cardData.link;
      this._likes = cardData.likes;
      this._cardId = cardData._id;
      this._authorId = cardData.owner._id;
      this._myId = myProfile._id;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDeletePopup = handleDeletePopup;
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
        this._cardLike = this._element.querySelector('.card__like');
        this._cardDeleteButton = this._element.querySelector('.card__delete-button');
        this._cardLikeCounter = this._element.querySelector('.card__like-counter');
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = `Картинка с местом ${this._name} маленького размера`;
        this.setLikes(this._likes);
        this._checkOwnerId(); 
        this._setEventListeners()
        return this._element;
    } 

    setLikes(likes) {
        this._likes = likes;
        this._updateLikeState();
    }

    _updateLikeState() {
        this._cardLikeCounter.textContent = this._likes.length;
        if (this.isLiked()) {
            this._cardLike.classList.add('card__like_active')
        } else {
            this._cardLike.classList.remove('card__like_active')
        }
    }

    isLiked() { 
        return this._likes.some(item => item._id === this._myId)
    }

    _checkOwnerId() {
        if (this._authorId == this._myId) {this._cardDeleteButton.classList.add('card__delete-button_visible')}
    }
  
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick();
        })
        this._cardLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDeletePopup()
        })

    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }
}

export default Card;