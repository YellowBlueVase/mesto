import { FormValidator } from '../components/FormValidator.js';
import { cardTitle, cardImage, largeImagePopup, cardDeletePopup, formDelete, avatarImage, elements, addButton, editButton, editAvatarButton, formEditAvatar, formEditAvatarPopup, formEditProfile, formNewPlace, formEditProfilePopup, formNewPlacePopup, userNameField, userDescriptionField, nameInput, descriptionInput, inactiveButton, inputError, errorClass, inputField, submitButton } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-49/',
  headers: {
    'content-type': 'application/json',
    Authorization: '2cb75315-5b64-4ef0-b9e0-7942d91d0c8e'
  }})

const cardList = new Section(
  function renderer(data, profile) {
    const card = createCard(data, profile, api);
    cardList.addItems(card);
  }, 
  elements);

const userProfile = new UserInfo({
  name: userNameField,
  about: userDescriptionField,
  avatar: avatarImage,
  _id: '#'
})

Promise.all([
  api.getInitialCards(),
  api.getProfileInfo()
])
.then((values) => {
  const getInitialCards = values[0];
  const getProfileInfo = values[1];
  console.log(getProfileInfo)
  cardList.renderItems(getInitialCards, getProfileInfo);
  userProfile.setUserInfo(getProfileInfo);
  })
.catch((err) => {console.log(err)})

const formEdit = new PopupWithForm(
  formEditProfilePopup, 
  formEditProfile, 
  function handleFormSubmit(formData, button) {
    button.textContent = 'Сохранение...';
    api.updateProfile({
      name: formData.name,
      about: formData.about
    })
    .then((data) => {
      userProfile.setUserInfo(data)
    })
    .catch((err) => {console.log(err)})
    .finally(() => {button.textContent = 'Сохранить'})
  })
formEdit.setEventListeners();

const formEditValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formEditProfile);
formEditValidator.enableValidation();

editButton.addEventListener('click', ()=> {
  const userInfo = userProfile.getUserInfo();
  nameInput.value = userInfo.name;
  descriptionInput.value = userInfo.about;
  formEditValidator.resetValidation();
  formEdit.open();
})

const newPlaceForm = new PopupWithForm(
  formNewPlacePopup, 
  formNewPlace, 
  function handleFormSubmit (formData, button) {
    button.textContent = 'Сохранение...';
    api.addNewCard({
      name: formData.name,
      link: formData.link,
      likes: [],
      owner: userProfile.getUserInfo()})
    .then((data) => {
      console.log(userProfile.getUserInfo())
      const card = createCard(data, userProfile.getUserInfo(), api);
      cardList.addItem(card);
    })
    .catch((err) => {console.log(err)})
  .catch((err) => {console.log(err)})
  .finally(() => {button.textContent = 'Сохранить'})
  }
)
newPlaceForm.setEventListeners();

const newPlaceFormValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formNewPlace);
newPlaceFormValidator.enableValidation();

addButton.addEventListener('click', ()=> {
  newPlaceFormValidator.resetValidation();
  newPlaceForm.open();
})

const avatarForm = new PopupWithForm(
  formEditAvatarPopup, 
  formEditAvatar, 
  function handleFormSubmit(formData, button) {
    button.textContent = 'Сохранение...';
    api.updateAvatar(formData)
    .then((data) => {
      avatarImage.src=data.avatar;
    })
    .catch((err) => {console.log(err)})
    .finally(() => {button.textContent = 'Сохранить'})
  })
avatarForm.setEventListeners();

const avatarFormValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formEditAvatar);
avatarFormValidator.enableValidation();

editAvatarButton.addEventListener('click', ()=> {
  avatarFormValidator.resetValidation();
  avatarForm.open();
})

const deletePopup = new PopupWithDelete(
  cardDeletePopup, 
  formDelete,
  function handleFormSubmit (cardId) {
    api.deleteCard(cardId);
  }
);
deletePopup.setEventListeners()

const cardPopup = new PopupWithImage(
  largeImagePopup,
  { title: cardTitle, 
    image: cardImage},
);
cardPopup.setEventListeners();

export {deletePopup, cardPopup}