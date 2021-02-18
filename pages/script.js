// GLOBAL VARIABLES AND LISTS -------------------------------------------------------------------------------

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupNewPlace = document.querySelector('.popup_type_new-place');
const popupLargeImage = document.querySelector('.popup_type_large-image');

const popupCloseButtons = document.querySelectorAll('.popup__close-button')

const editForm = document.querySelector('.form-container_edit-profile');
const addNewPlaceForm = document.querySelector('.form-container_new-place');

const nameInput = document.querySelector('.form-container__input_name');
const nameField = document.querySelector('.profile__name');
const jobInput = document.querySelector('.form-container__input_job');
const jobField = document.querySelector('.profile__job');
const placeInput = document.querySelector('.form-container__input_place');
const imageInput = document.querySelector('.form-container__input_image');
const likeButton = document.querySelector('.card__like');
const cardTemplate = document.querySelector('#card-template').content;
const elementsList = document.querySelector('.elements');


// FUNCTIONS -------------------------------------------------------------------------------  
function openPopup(popup) {
  popup.classList.add('popup_opened')

  window.addEventListener('keydown', closePopupEsc)
}

function openForm(popup) {
  const submitButton = popup.querySelector('.form-container__submit')
  submitButton.setAttribute('disabled', 'true')
  submitButton.classList.add('form-container__submit_inactive')

  openPopup(popup);
}

function openProfilePopup(popup) {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  openForm(popup);
}

function closePopupEsc(evt) {
  const popup = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    closePopup(popup)
    }
  }

function closePopup(popup) {
  popup.classList.remove('popup_opened')

  window.removeEventListener('keydown', closePopupEsc)
}



function submitEditForm (evt) {
  evt.preventDefault(); 
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopup(popupEditProfile)
}

function submitNewPlaceForm (evt) {
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: imageInput.value
  }

  elementsList.prepend(createNewCard(newPlace))
  closePopup(popupNewPlace)

  addNewPlaceForm.reset()
}

function createNewCard(element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')
  cardElement.querySelector('.card__title').textContent = element.name;
  cardImage.src = element.link;
  cardElement.querySelector('.card__like').addEventListener("click", (evt) => {
      evt.target.classList.toggle('card__like_active')
  })
  cardElement.querySelector('.card__delete-button').addEventListener("click", (evt) => {
    evt.target.closest('.card').remove();
  })

  cardImage.addEventListener("click", () => {
    openPopup(popupLargeImage)
    document.querySelector('.image-container__image').src = element.link;
    document.querySelector('.image-container__title').textContent = element.name;
  })
  return cardElement
}
 

// EXECUTION COMMANDS -------------------------------------------------------------------------------
initialCards.forEach((item) => {
  elementsList.prepend(createNewCard(item))
})
editButton.addEventListener('click', () => openProfilePopup(popupEditProfile))
editForm.addEventListener('submit', submitEditForm)
addButton.addEventListener('click', () => openForm(popupNewPlace))
addNewPlaceForm.addEventListener('submit', submitNewPlaceForm)
popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup))
})
popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup)}
  });
});