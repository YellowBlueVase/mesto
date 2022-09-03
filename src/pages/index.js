import { FormValidator } from '../components/FormValidator.js';
import { initialCards, elements, addButton, editButton, formEditProfile, formNewPlace, formEditProfilePopup, formNewPlacePopup, userNameField, userDescriptionField, nameInput, descriptionInput, inactiveButton, inputError, errorClass, inputField, submitButton } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    }
  }, 
  elements);

cardList.renderItems()


const userProfile = new UserInfo({
  name: userNameField,
  description: userDescriptionField,
})

const editForm = new PopupWithForm(
  formEditProfilePopup, 
  formEditProfile, 
  function handleFormSubmit(formData) {
    userProfile.setUserInfo(formData);
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
  descriptionInput.value = userInfo.description;
  editFormValidator.resetValidation();
  editForm.open();
})

const addNewPlaceForm = new PopupWithForm(
  formNewPlacePopup, 
  formNewPlace, 
  function handleFormSubmit (formData) {
    const card = createCard(formData);
    cardList.addItem(card)
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
