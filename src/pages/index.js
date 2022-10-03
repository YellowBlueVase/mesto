import { FormValidator } from '../components/FormValidator.js';
import { avatarImage, elements, addButton, editButton, editAvatarButton, formEditAvatar, formEditAvatarPopup, formEditProfile, formNewPlace, formEditProfilePopup, formNewPlacePopup, userNameField, userDescriptionField, nameInput, descriptionInput, inactiveButton, inputError, errorClass, inputField, submitButton } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-49/',
  headers: {
    'content-type': 'application/json',
    Authorization: '2cb75315-5b64-4ef0-b9e0-7942d91d0c8e'
  }})

const cardList = new Section(
  function renderer(item) {
    const card = createCard(item);
    cardList.addItem(card);
  }, 
  elements);

api.getInitialCards()
  .then(data => {
    cardList.renderItems(data.reverse())
})
  .catch((err) => {
    console.log(err);
  })

const userProfile = new UserInfo({
  name: userNameField,
  about: userDescriptionField,
  avatar: avatarImage
})

api.getProfileInfo()
  .then(data => {
    console.log(data.avatar)
    userProfile.setUserInfo(data)

  })
  .catch((err) => {
    console.log(err);
  })


const editForm = new PopupWithForm(
  formEditProfilePopup, 
  formEditProfile, 
  function handleFormSubmit(formData) {
    userProfile.setUserInfo(formData)
    api.updateProfile({
      name: formData.name,
      about: formData.about
    });
  });
editForm.setEventListeners();

const editFormValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formEditProfile);
editFormValidator.enableValidation();

editButton.addEventListener('click', ()=> {
  const userInfo = userProfile.getUserInfo();
  nameInput.value = userInfo.name;
  descriptionInput.value = userInfo.about;
  editFormValidator.resetValidation();
  editForm.open();
})

const addNewPlaceForm = new PopupWithForm(
  formNewPlacePopup, 
  formNewPlace, 
  function handleFormSubmit (formData) {
    const card = createCard({
      name: formData.name,
      link: formData.link,
      likes: [],
      owner: {_id: "ec658888750770166b55d7f7"}
    });
    api.addNewCard({
      name: formData.name,
      link: formData.link,
      likes: [],
      owner: {_id: "ec658888750770166b55d7f7"}
    });
    cardList.addItem(card);
  }
)

addNewPlaceForm.setEventListeners();

const addNewPlaceFormValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formNewPlace);
addNewPlaceFormValidator.enableValidation();

addButton.addEventListener('click', ()=> {
  addNewPlaceFormValidator.resetValidation();
  addNewPlaceForm.open();
})

export {api};

const editAvatarForm = new PopupWithForm(
  formEditAvatarPopup, 
  formEditAvatar, 
  function handleFormSubmit(formData) {
    api.updateAvatar(formData);
    avatarImage.src=formData.avatar;
  });
editAvatarForm.setEventListeners();

const editAvatarFormValidator = new FormValidator(
  { inactive: inactiveButton, 
    error: inputError, 
    errorCl: errorClass, 
    input: inputField, 
    submit: submitButton
  },
  formEditAvatar);
editAvatarFormValidator.enableValidation();

editAvatarButton.addEventListener('click', ()=> {
  editAvatarFormValidator.resetValidation();
  editAvatarForm.open();
})