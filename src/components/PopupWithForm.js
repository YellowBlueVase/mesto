import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(popupSelector, formSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = formSelector;
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList = this._form.querySelectorAll('.form-container__input');
        console.log('_getInputValue inputList', this._inputList)
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log('_getInputValues result: ', this._formValues)
        console.log('type LOOK HERE', typeof this._formValues)
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
          })
    }

    close() {
        super.close();
        console.log('Popup form closed', true)
        this._form.reset();
        console.log('Form reseted')
    }
}

export default PopupWithForm;

// _submitForm() {
//     this._nameField.textContent = this._nameInput.value;
//     this._jobField.textContent = this._jobInput.value;
//     super._submitForm();
//     this._popupWithForm.close();
//     this._form.reset();
//   }