import Card from '../scripts/Card.js';
import {FormEditProfile, FormNewPlace} from '../scripts/FormValidator.js';

const addButton = document.querySelector('.profile__add-button');
const cardImage = document.querySelector('.image-container__image');
const cardContainer = cardImage.closest('.popup');
const cardTemplate = '#card-template';
const cardTitle = document.querySelector('.image-container__title');
const editButton = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const formEditProfile = document.querySelector('.form-container_edit-profile');
const formNewPlace = document.querySelector('.form-container_new-place');
const popups = document.querySelectorAll('.popup');

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
  
function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.generateCard()
  elements.prepend(cardElement);
}

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
  if (evt.key === "Escape") {
      closePopup()
    }
  }

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened')
  window.removeEventListener('keydown', closePopupEsc)
}

initialCards.forEach((item) => {
    createCard(item);
}); 

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('popup')) {
        closePopup()}
    else if (evt.target.classList.contains('popup__close-button')) {
      closePopup()}
  });
});


const editForm = new FormEditProfile(editButton, formEditProfile);
const addNewPlaceForm = new FormNewPlace(addButton, formNewPlace);

editForm.setEventListeners()
addNewPlaceForm.setEventListeners()

export {openPopup, closePopup, createCard};