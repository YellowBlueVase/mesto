import { FormValidator } from '../components/FormValidator.js';
import { initialCards, popups, addButton, editButton, formEditProfile, formNewPlace, formEditProfilePopup, formNewPlacePopup, userNameField, userDescriptionField, nameInput, descriptionInput, placeNameField, placeLinkField, imageInput, placeInput } from '../utils/constants.js';
import { cardRenderer } from '../utils/utils.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


cardRenderer(initialCards)

popups.forEach(popup => {
  const nextPopup = new PopupWithImage(popup);
  nextPopup.setEventListeners();
})

const userProfile = new UserInfo({
  firstText: userNameField,
  secondText: userDescriptionField,
  firstInput: nameInput,
  secondInput: descriptionInput
})

const editForm = new PopupWithForm(
  formEditProfilePopup, 
  formEditProfile, 
  function handleFormSubmit(formData) {
    userProfile.setUserInfo(formData);
  });
editForm.setEventListeners();
const editFormValidator = new FormValidator(formEditProfile);
editFormValidator.setEventListeners();

editButton.addEventListener('click', ()=> {
  userProfile.getUserInfo();
  editForm.open();
})

// editButton.addEventListener('click', ()=> {
//   cardRenderer([{name: 'bumba', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'}])
// })
const addNewPlaceForm = new PopupWithForm(
  formNewPlacePopup, 
  formNewPlace, 
  function handleFormSubmit (formData) {
    console.log('index.js ЭТО ДАННЫЕ ДЛЯ ФОРМЫ', formData)
    cardRenderer([formData])
  }
  );
addNewPlaceForm.setEventListeners();
const addNewPlaceFormValidator = new FormValidator(formNewPlace);
addNewPlaceFormValidator.setEventListeners();

addButton.addEventListener('click', ()=> {
  addNewPlaceForm.open();
})
