class FormValidator {

  constructor(selectors, form) {
    this._form = form;
    this._inactiveButtonClass = selectors.inactive;
    this._inputErrorClass = selectors.error;
    this._errorClass = selectors.errorCl;
    this._submitButton = this._form.querySelector(selectors.submit);
    this._inputList = Array.from(this._form.querySelectorAll(selectors.input)); 
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._toggleButtonState();
      this._checkInputValidity(inputElement);
      })
    })
  }
  
  enableValidation() {
    this._setEventListeners()
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
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
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.classList.add(this._errorClass);
      this._errorElement.textContent = "There is something missing";
    };
    
  _hideInputError(inputElement) {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);   
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
    };
}

export {FormValidator};