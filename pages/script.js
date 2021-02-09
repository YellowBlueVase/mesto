let editButton = document.querySelector('.profile__info_edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container_close-button');
let submitButton = document.querySelector('.popup__container_submit');
let formElement = popup.querySelector('.popup__container')

function togglePopup() {
  popup.classList.toggle('popup_opened')
}

editButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)
popup.addEventListener('click', (evt) => {
  if (evt.target === popup) {
    togglePopup
  }
})

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  let nameInput = document.querySelector('.popup__container_name-input');
  let nameField = document.querySelector('.profile__info_name');
  let jobInput = document.querySelector('.popup__container_job-input');
  let jobField = document.querySelector('.profile__info_job');

  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
