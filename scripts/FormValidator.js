import Card from '../scripts/Card.js';
import {openPopup, closePopup, createCard} from '../pages/index.js';

class FormValidator {

  constructor(button, form) {
    this._button = button;
    this._form = form;
    this._input = this._form.querySelector('.form-container__input');
    this._submitButton = this._form.querySelector('.form-container__submit');
    this._inactiveButtonClass = 'form-container__submit_inactive';
    this._inputErrorClass = 'form-container__input_type_error';
    this._errorClass = 'form-container__input_error_active';
    this._inputList = Array.from(this._form.querySelectorAll('.form-container__input')); 
    this._popup = this._form.closest('.popup');
  }

  setEventListeners() {
    this._button.addEventListener('click', () => {
      this._handleOpenForm();
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

  _handleOpenForm() {
    openPopup(this._popup);
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

  _submitForm() {
  }
}
////////////////////////////////////// 

class FormEditProfile extends FormValidator {
  constructor (button, form) {
    super(button, form)
    this._submitButton
    this._nameInput = document.querySelector('.form-container__input_name');
    this._nameField = document.querySelector('.profile__name');
    this._jobInput = document.querySelector('.form-container__input_job');
    this._jobField = document.querySelector('.profile__job');

  }

  _handleOpenForm() {
    super._handleOpenForm();
    this._nameInput.value = this._nameField.textContent;
    this._jobInput.value = this._jobField.textContent;
  }

  _submitForm() {
    super._submitForm();
    this._nameField.textContent = this._nameInput.value;
    this._jobField.textContent = this._jobInput.value;
    closePopup();
    
  }
}

class FormNewPlace extends FormValidator {
  constructor (button, form) {
    super(button, form)
    this._submitButton
    this._placeInput = document.querySelector('.form-container__input_place');
    this._imageInput = document.querySelector('.form-container__input_image');
  }

  _handleOpenForm() {
    super._handleOpenForm();
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', 'true');
  }


  _submitForm() {
    super._submitForm();
    const newPlace = {
      name: this._placeInput.value,
      link: this._imageInput.value
    }
    createCard(newPlace);
    closePopup();
    this._form.reset();
  }
}

export {FormValidator, FormEditProfile, FormNewPlace};