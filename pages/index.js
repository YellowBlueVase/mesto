import Card from '../scripts/Card.js';
import {FormEditProfile, FormNewPlace} from '../scripts/FormValidator.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const formEditProfile = document.querySelector('.form-container_edit-profile');
const formNewPlace = document.querySelector('.form-container_new-place');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupNewPlace = document.querySelector('.popup_type_new-place');


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
  
initialCards.forEach((item) => {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
}); 

const editForm = new FormEditProfile(editButton, popupEditProfile, formEditProfile);
const addNewPlaceForm = new FormNewPlace(addButton, popupNewPlace, formNewPlace);

editForm.enableValidation()
addNewPlaceForm.enableValidation()

