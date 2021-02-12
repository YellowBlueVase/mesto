let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = popup.querySelector('.form-container')
let nameInput = document.querySelector('.form-container__input_name');
let nameField = document.querySelector('.profile__name');
let jobInput = document.querySelector('.form-container__input_job');
let jobField = document.querySelector('.profile__job');
let likeButton = document.querySelectorAll('.card__like')

function openPopup() {
  nameInput.value = nameField.textContent
  jobInput.value = jobField.textContent
  popup.classList.add('popup_opened')
}

function closePopup(evt) {
  if (evt.target === popup || evt.target === closeButton) {
    popup.classList.remove('popup_opened')
  }
}

function toggleLike (evt) {
  evt.target.classList.toggle('card__like_active')
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

  // Марина, вас нет в слаке, поэтому пишу здесь - если я просто заменю на closePopup, то у меня форма не будет сабмититься. 
  // Просто повесить еще одно условие на сабмит кнопку не работает. Как написать функцию Popup так, чтобы сабмитилась, я не разобрался...
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
popup.addEventListener('click', closePopup)
likeButton.addEventListener('click', toggleLike)
formElement.addEventListener('submit', formSubmitHandler);
