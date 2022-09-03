import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import { cardTemplate, cardTitle, cardImage } from "./constants.js";

function handleCardClick(popup, name, link) {
    const imagePopup = new PopupWithImage(
      popup,
      {title: cardTitle, 
      image: cardImage},
      );
    imagePopup.setEventListeners();
    imagePopup.open(name, link);
}

function createCard(item){
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

export {handleCardClick, createCard}