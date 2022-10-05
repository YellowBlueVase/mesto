import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(popupSelector, formSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = formSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = this._form.querySelector('.form-container__submit');
        this._inputList = this._form.querySelectorAll('.form-container__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues(), this._submitButton);
            this.close();
          })
    }

    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm;