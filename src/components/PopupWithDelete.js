import Popup from "./Popup.js";

class PopupWithDelete extends Popup {

    constructor(popupSelector, formSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = formSelector;
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners(card, cardId) {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(card, cardId);
            this.close();
          })
    }

    close() {
        super.close();
    }
}

export default PopupWithDelete;