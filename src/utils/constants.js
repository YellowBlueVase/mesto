const cardTemplate = '#card-template';
const cardImage = document.querySelector('.image-container__image');
const cardContainer = cardImage.closest('.popup');
const cardTitle = document.querySelector('.image-container__title');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const editAvatarButton = document.querySelector('.profile__avatar_hover');
const avatarImage = document.querySelector('.profile__avatar_image');
const formEditProfile = document.querySelector('.form-container_edit-profile');
const formEditProfilePopup = document.querySelector('.popup_type_edit-profile');
const formEditAvatar = document.querySelector('.form-container_edit-avatar');
const formEditAvatarPopup = document.querySelector('.popup_type_edit-avatar');
const formNewPlace = document.querySelector('.form-container_new-place');
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
const cardDeletePopup = document.querySelector('.popup_type_delete');
const formDelete = document.querySelector('.delete-container');

const popups = document.querySelectorAll('.popup');

export {avatarImage, cardContainer, cardImage, cardTitle, cardTemplate, elements, popups, addButton, editButton, editAvatarButton, formEditAvatar, formEditAvatarPopup, formEditProfilePopup, formNewPlacePopup, formEditProfile, formNewPlace, userNameField, userDescriptionField , nameInput, descriptionInput, placeNameField, placeLinkField, placeInput, imageInput, inactiveButton, inputError, errorClass, inputField, submitButton, largeImagePopup, cardDeletePopup, formDelete };