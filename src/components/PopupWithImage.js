import Popup from "./Popup.js";
import {cardImage, cardTitle} from "../utils/constants.js";


class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        cardTitle.textContent = name;
        cardImage.src = link;
        cardImage.alt = `Картинка c местом ${name} большого размера`;
        super.open();
    }
}

export default PopupWithImage;