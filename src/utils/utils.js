import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import { cardTemplate, cardTitle, cardImage, largeImagePopup } from "./constants.js";

const cardPopup = new PopupWithImage(
  largeImagePopup,
  {
    title: cardTitle, 
    image: cardImage
  },
);
cardPopup.setEventListeners();

function createCard(item){
  const card = new Card(
    item, 
    cardTemplate, 
    handleCardClick,
    cardPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(popup, name, link) {
  popup.open(name, link);
}

export {createCard}