import Card from '../scripts/Card.js';
import {FormEditProfile, FormNewPlace} from '../scripts/FormValidator.js';

const popups = document.querySelectorAll('.popup');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const cardImage = document.querySelector('.image-container__image');
const cardTitle = document.querySelector('.image-container__title');
const cardContainer = cardImage.closest('.popup');

const cardTemplate = '#card-template';


const formEditProfile = document.querySelector('.form-container_edit-profile');
const formNewPlace = document.querySelector('.form-container_new-place');

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
  
function handleCardClick(name, link) {
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = `Картинка c местом ${name} большого размера`;
  openPopup(cardContainer);
}

function handleFormClick(popup) {
  openPopup(popup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupEsc);  
}


function closePopupEsc (evt) {
  if (evt.keyCode == 27) {
      closePopup(document.querySelector('.popup_opened'))
    }
  }

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  window.removeEventListener('keydown', closePopupEsc)
}

initialCards.forEach((item) => {
    const card = new Card(item, cardTemplate, handleCardClick);
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
}); 

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup)}
    else if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)}
  });
});


const editForm = new FormEditProfile(editButton, openPopup, formEditProfile);
const addNewPlaceForm = new FormNewPlace(addButton, openPopup, formNewPlace);

editForm._setEventListeners()
addNewPlaceForm._setEventListeners()

export {closePopup};