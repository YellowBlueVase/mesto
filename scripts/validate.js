// GLOBAL VARIABLES AND LISTS -------------------------------------------------------------------------------
const config = {formSelector:'.form-container',
            inputSelector:'.form-container__input',
            submitButtonSelector:'.form-container__submit',
            inactiveButtonClass:'form-container__submit_inactive',
            inputErrorClass:'form-container__input_type_error',
            errorClass:'form-container__input_error_active',}

// FUNCTIONS -------------------------------------------------------------------------------  

function enableValidation(params) {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach(formElement => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement, params)
    });
  };
  
function setEventListeners(formElement, params) {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector)
    toggleButtonState(inputList, buttonElement, params)
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        toggleButtonState(inputList, buttonElement, params)
        checkInputValidity(formElement, inputElement, params);
      });
    });
}

function toggleButtonState(inputList, buttonElement, params) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(params.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'true')
  } else {
    buttonElement.classList.remove(params.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

function checkInputValidity(formElement, inputElement, params) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
      hideInputError(formElement, inputElement, params);
    }
  };

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {    
    return !inputElement.validity.valid;
  })
}

function showInputError(formElement, inputElement, errorMessage = "There is something missing", params) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(params.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass);
  };
  
function hideInputError(formElement, inputElement, params) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
  };

// EXECUTION COMMANDS -------------------------------------------------------------------------------
enableValidation(config); 