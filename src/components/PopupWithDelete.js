import Popup from "./Popup.js";

class PopupWithDelete extends Popup {

    constructor(popupSelector, formSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = formSelector;
        this._handleFormSubmit = handleFormSubmit;
    }

    open(card, cardId) {
        super.open();
        this._card = card;
        this._cardId = cardId
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardId);
            this.close();
            this._remove();
          })
    }

    _remove() {
        this._card.remove();
    }
}

export default PopupWithDelete;