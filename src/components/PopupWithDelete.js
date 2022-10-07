import Popup from "./Popup.js";

class PopupWithDelete extends Popup {

    constructor(popupSelector, formSelector) {
        super(popupSelector);
        this._form = formSelector;
    }

    open(handleFormSubmit) {
        super.open();
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card);
            this.close();
          })
    }
}

export default PopupWithDelete;