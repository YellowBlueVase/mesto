// VARIABLES AND ARRAYS -------------------------------------------------------------------------------

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupNewPlace = document.querySelector('#new-place')
let closeButton = document.querySelectorAll('.popup__close-button');
let formElement = popup.querySelector('.form-container')
let imageContainer = document.querySelector('#new-place-container')
let nameInput = document.querySelector('.form-container__input_name');
let nameField = document.querySelector('.profile__name');
let jobInput = document.querySelector('.form-container__input_job');
let jobField = document.querySelector('.profile__job');
let avatarInput = document.querySelector('.form-container__input_avatar');
let avatarField = document.querySelector('.profile__avatar')
let placeInput = document.querySelector('.form-container__input_place');
let imageInput = document.querySelector('.form-container__input_image');
let likeButton = document.querySelector('.card__like');
let addButton = document.querySelector('.profile__add-button');
let cardTemplate = document.querySelector('#card-template').content;
let elementsList = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// FUNCTIONS -------------------------------------------------------------------------------  
function openPopup(evt) {
  nameInput.value = nameField.textContent
  jobInput.value = jobField.textContent
  popup.classList.add('popup_opened')
}

function closePopup(evt) {
  if (evt.target === popup || evt.target === closeButton) {
    popup.classList.remove('popup_opened')
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  if (avatarInput.value) {
    avatarField.src = avatarInput.value
  }
  
  popup.classList.remove('popup_opened');
}

function formSubmitNewPlace (evt) {
  evt.preventDefault();

  const newPlace = {
    name: placeInput.value,
    link: imageInput.value
  }

  createNewCard(newPlace)

  evt.target.closest('.popup').classList.remove('popup_opened')

  placeInput.value = ''
  imageInput.value = ''
}

function createNewCard(element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__like').addEventListener("click", (evt) => {
      evt.target.classList.toggle('card__like_active')
  })
  cardElement.querySelector('.card__delete-button').addEventListener("click", (evt) => {
    evt.target.closest('.card').remove();
  })
  
  imageElement = cardElement.querySelector('.card__image')
  imageElement.addEventListener("click", evt => {
    evt.target.closest('.card').querySelector('.popup').classList.add('popup_opened')
  })
  cardElement.querySelector('.image-container__image').src = element.link;
  cardElement.querySelector('.image-container__title').textContent = element.name;
  cardElement.querySelector('.popup__close-button').addEventListener("click", (evt) => {
    evt.target.closest('.card').querySelector('.popup').classList.remove('popup_opened')
})
  cardElement.querySelector('.popup').addEventListener("click", (evt) => {
    evt.target.classList.toggle('popup_opened')
  })
  
  elementsList.prepend(cardElement)
}

// EXECUTION COMMANDS -------------------------------------------------------------------------------

editButton.addEventListener('click', openPopup)
addButton.addEventListener('click', () => {
  popupNewPlace.classList.add('popup_opened')
})
closeButton.forEach(button => {
  button.addEventListener('click', closePopup)
})
popup.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler);
imageContainer.addEventListener('submit', formSubmitNewPlace)

initialCards.forEach((item) => {
  createNewCard(item)
})