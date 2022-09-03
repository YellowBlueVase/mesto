import Popup from "./Popup.js";


class PopupWithImage extends Popup {
    constructor(popupSelector, data) {
        super(popupSelector);
        this._cardTitle = data.title;
        this._cardImage = data.image;
    }

    open(name, link) {
        this._cardTitle.textContent = name;
        this._cardImage.src = link;
        this._cardImage.alt = `Картинка c местом ${name} большого размера`;
        super.open();
    }
}

export default PopupWithImage;