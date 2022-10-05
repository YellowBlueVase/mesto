class Card {
    constructor(data, myProfileId, cardSelector, cardPopup, deletePopup, api) {
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._cardSelector = cardSelector;
      this._popup = cardPopup;
      this._deletePopup = deletePopup;
      this._cardId = data._id;
      this._authorId = data.owner._id;
      this._myId = myProfileId._id;
      this._api = api;
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
        this._cardLikeCounter.textContent = this._likes.length;
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = `Картинка с местом ${this._name} маленького размера`;
        this._likeToggle();
        this._checkOwnerId(); 
        this._setEventListeners()
        return this._element;
    } 

    _likeToggle() {
        if (this._likes.filter(item => item._id === this._myId).length > 0) {
            this._cardLike.classList.toggle('card__like_active');}
    }

    _checkOwnerId() {
        console.log(this._authorId, this._myId)
        if (this._authorId == this._myId) {console.log('TRUE'); this._cardDeleteButton.classList.add('card__delete-button_visible')}
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

    _handleCardClick() {
        this._popup.open(this._name, this._link);
      }
    
    _handleLikeClick() {
        if (this._cardLike.classList.contains('card__like_active')) 
            {
            this._api.deleteLike(this._cardId)
            .then((data) => {
                this._cardLike.classList.toggle('card__like_active');
                this._cardLikeCounter.textContent = data.likes.length})
            .catch((err) => {console.log(err)})
            }
        else {
            this._api.addLike(this._cardId)
            .then((data) => {
                this._cardLike.classList.toggle('card__like_active');
                this._cardLikeCounter.textContent = data.likes.length})
            .catch((err) => {console.log(err)})
            }
      }
      
    _handleDeletePopup() {
        this._deletePopup.open(this._element, this._cardId)
      }
}

export default Card;