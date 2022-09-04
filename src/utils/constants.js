const cardTemplate = '#card-template';
const cardImage = document.querySelector('.image-container__image');
const cardContainer = cardImage.closest('.popup');
const cardTitle = document.querySelector('.image-container__title');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.form-container_edit-profile');
const formNewPlace = document.querySelector('.form-container_new-place');
const formEditProfilePopup = document.querySelector('.popup_type_edit-profile');
const formNewPlacePopup = document.querySelector('.popup_type_new-place');
const userNameField = document.querySelector('.profile__name');
const userDescriptionField = document.querySelector('.profile__job');
const nameInput = document.querySelector('.form-container__input_name');
const descriptionInput = document.querySelector('.form-container__input_job');
const placeNameField = document.querySelector('.card__title');
const placeLinkField = document.querySelector('.card__image');
const placeInput = document.querySelector('.form-container__input_place');
const imageInput = document.querySelector('.form-container__input_image');
const inactiveButton = 'form-container__submit_inactive';
const inputError = 'form-container__input_type_error';
const errorClass = 'form-container__input_error_active';
const inputField = '.form-container__input';
const submitButton = '.form-container__submit';
const largeImagePopup = document.querySelector('.popup_type_large-image');

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

const popups = document.querySelectorAll('.popup');

export {cardContainer, cardImage, cardTitle, cardTemplate, elements, initialCards, popups, addButton, editButton, formEditProfilePopup, formNewPlacePopup, formEditProfile, formNewPlace, userNameField, userDescriptionField , nameInput, descriptionInput, placeNameField, placeLinkField, placeInput, imageInput, inactiveButton, inputError, errorClass, inputField, submitButton, largeImagePopup };