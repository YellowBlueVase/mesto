import Popup from '../components/Popup.js';
import {FormEditProfile, FormNewPlace} from '../components/FormValidator.js';
import { initialCards, popups, addButton, editButton, formEditProfile, formNewPlace } from '../utils/constants.js';
import { cardRenderer } from '../utils/utils.js';


cardRenderer(initialCards)

popups.forEach(popup => {
  const nextPopup = new Popup(popup);
  nextPopup.setEventListeners();
})

const editForm = new FormEditProfile(editButton, formEditProfile);
const addNewPlaceForm = new FormNewPlace(addButton, formNewPlace);

editForm.setEventListeners()
addNewPlaceForm.setEventListeners()

// export {openPopup, closePopup, createCard};

// function handleFormClick(popup) {
//   openPopup(popup);
// }

