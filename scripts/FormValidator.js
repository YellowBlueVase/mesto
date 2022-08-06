import Card from '../scripts/Card.js';

class FormValidator {

  constructor(button, popup, form) {
    this._button = button;
    this._popup = popup;
    this._form = form;
    this._input = this._form.querySelector('.form-container__input');
    this._submitButton = this._form.querySelector('.form-container__submit');
    this._inactiveButtonClass = 'form-container__submit_inactive';
    this._inputErrorClass = 'form-container__input_type_error';
    this._errorClass = 'form-container__input_error_active';
    this._inputList = Array.from(this._form.querySelectorAll('.form-container__input'));
    
  }

  enableValidation() {
      this._setEventListeners();
  }

  _setEventListeners() {
    this._button.addEventListener('click', () => {
        this._handleOpenPopup();
    });
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
        this._handleClosePopup();
    });
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
    })
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._toggleButtonState();
      this._checkInputValidity(inputElement);
      })
    })
  }

  _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute('disabled', 'true');
      } else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute('disabled');
      }
    }

  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {    
      return !inputElement.validity.valid;
    })
  }

  _showInputError(inputElement) {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);this._input.classList.add(this._inputErrorClass);
      this._errorElement.classList.add(this._errorClass);
      this._errorElement.textContent = "There is something missing";
    };
    
  _hideInputError(inputElement) {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);   
      this._input.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
    };

  _handleOpenPopup() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._closePopupEsc);
  }

  _handleClosePopup() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    window.removeEventListener('keydown', this._closePopupEsc);
  }

  _closePopupEsc = event => {
    if (event.keyCode == 27) {
        this._handleClosePopup()
      }
  }

  _submitForm() {
  }
  
//   _openForm(popup) {
//     const submitButton = popup.querySelector('.form-container__submit')
//     submitButton.setAttribute('disabled', 'true')
//     submitButton.classList.add('form-container__submit_inactive')

//     openPopup(popup);
// }

  // _openProfilePopup(popup) {
  //     nameInput.value = nameField.textContent;
  //     jobInput.value = jobField.textContent;
  //     openForm(popup);
  // }
}
//////////////////////////////////////

class FormEditProfile extends FormValidator {
  constructor (button, popup, form, submitButton) {
    super(button, popup, form, submitButton)
    this._nameInput = document.querySelector('.form-container__input_name');
    this._nameField = document.querySelector('.profile__name');
    this._jobInput = document.querySelector('.form-container__input_job');
    this._jobField = document.querySelector('.profile__job');
  }

  _handleOpenPopup() {
    super._handleOpenPopup();
    this._nameInput.value = this._nameField.textContent;
    this._jobInput.value = this._jobField.textContent;
  }

  _submitForm() {
    super._submitForm();
    this._nameField.textContent = this._nameInput.value;
    this._jobField.textContent = this._jobInput.value;
    this._handleClosePopup();
  }
}

class FormNewPlace extends FormValidator {
  constructor (button, popup, form, submitButton) {
    super(button, popup, form, submitButton)
    this._placeInput = document.querySelector('.form-container__input_place');
    this._imageInput = document.querySelector('.form-container__input_image');
  }

  _submitForm() {
    super._submitForm();
    const newPlace = {
      name: this._placeInput.value,
      link: this._imageInput.value
    }
    const card = new Card(newPlace, '#card-template');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);

    this._handleClosePopup();
    this._form.reset();
  }
}

export {FormValidator, FormEditProfile, FormNewPlace};