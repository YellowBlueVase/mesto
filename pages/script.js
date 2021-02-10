let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.form-container__close-button');
let formElement = popup.querySelector('.form-container')
let nameInput = document.querySelector('.form-container__input_name');
let nameField = document.querySelector('.profile-info__name');
let jobInput = document.querySelector('.form-container__input_job');
let jobField = document.querySelector('.profile-info__job');
let likeButton = document.querySelector('.card__like')

function openPopup() {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.add('popup_opened')
  }
}

function closePopup(evt) {
  if (evt.target === popup || evt.target === closeButton) {
    popup.classList.remove('popup_opened')
  }
}

function toggleLike() {
  likeButton.classList.toggle('card__like_active')
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
popup.addEventListener('click', closePopup)
likeButton.addEventListener('click', toggleLike)
formElement.addEventListener('submit', formSubmitHandler);
