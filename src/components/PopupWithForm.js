import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;  
        this._inputList = document.querySelectorAll('.form__input');
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
    }

    close() {
        super.close();
        // this._form.reset();
    }
}

export default PopupWithForm;