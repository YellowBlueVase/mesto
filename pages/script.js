// GLOBAL VARIABLES AND LISTS -------------------------------------------------------------------------------

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popups = document.querySelectorAll('.popup');

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
function openPopup(popup_class) {
  document.querySelector(popup_class).classList.add('popup_opened')
  if (popup_class === '.popup_type_edit-profile') {
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent
  }
}

function closePopup(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('form-container__submit')) {
    evt.target.closest('.popup').classList.remove('popup_opened')
  }
}

function editProfile (evt) {
  evt.preventDefault(); 
  openPopup('.popup_type_edit-profile')
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;

  editForm.addEventListener('submit', submitEditForm)
}

function submitEditForm (evt) {
  evt.preventDefault(); 
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopup(evt)
}

function addNewPlace (evt) {
  evt.preventDefault();  
  openPopup('.popup_type_new-place')
  addNewPlaceForm.addEventListener('submit', submitNewPlaceForm)
}

function submitNewPlaceForm (evt) {
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: imageInput.value
  }

  elementsList.prepend(createNewCard(newPlace))
  closePopup(evt)

  addNewPlaceForm.reset()
}

function createNewCard(element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__like').addEventListener("click", (evt) => {
      evt.target.classList.toggle('card__like_active')
  })
  cardElement.querySelector('.card__delete-button').addEventListener("click", (evt) => {
    evt.target.closest('.card').remove();
  })

  cardElement.querySelector('.card__image').addEventListener("click", () => {
    openPopup('.popup_type_large-image')
    document.querySelector('.image-container__image').src = element.link;
    document.querySelector('.image-container__title').textContent = element.name;
  })
  return cardElement
}

// EXECUTION COMMANDS -------------------------------------------------------------------------------
initialCards.forEach((item) => {
  elementsList.prepend(createNewCard(item))
})
editButton.addEventListener('click', editProfile)
addButton.addEventListener('click', addNewPlace)
popupCloseButtons.forEach(button => {
  button.addEventListener('click', closePopup)
})
popups.forEach(popup => {
  popup.addEventListener('click', closePopup)
})