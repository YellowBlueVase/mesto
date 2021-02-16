// GLOBAL VARIABLES AND LISTS -------------------------------------------------------------------------------
const formSelector = '.form-container'
const inputSelector = '.form-container__input'
const submitButtonSelector = '.form-container__submit'
const inactiveButtonClass = 'form-container__submit_inactive'
const inputErrorClass = 'form-container__input_type_error'
const errorClass = 'form-container__input_error_active'

// FUNCTIONS -------------------------------------------------------------------------------  

function hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }
  
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass)
    } else {
      buttonElement.classList.remove(inactiveButtonClass)
    }
  }
  
function enableValidation() {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement)
    });
  };
  
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)
    toggleButtonState(inputList, buttonElement)
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        toggleButtonState(inputList, buttonElement)
        checkInputValidity(formElement, inputElement);
      });

      // Я хотел применить это к форме или даже попапу, но кажется это работает только с input полями :( >>>
           
      inputElement.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          const popup = inputElement.closest('.popup');
          closePopup(popup)
      };  
    });
  });
}
  
function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
function showInputError(formElement, inputElement, errorMessage) {
    console.log(inputElement.id)
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

// EXECUTION COMMANDS -------------------------------------------------------------------------------
enableValidation(); 