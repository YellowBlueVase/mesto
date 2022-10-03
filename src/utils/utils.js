import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import {api} from "../pages/index";
import { cardTemplate, cardTitle, cardImage, largeImagePopup, cardDeletePopup, formDelete } from "./constants.js";
import PopupWithDelete from "../components/PopupWithDelete.js";


function createCard(item){
  const card = new Card(
      item,
      cardTemplate, 
      handleCardClick,
      cardPopup,
      handleDeletePopup,
      deletePopup, 
      handleLikeClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(popup, name, link) {
  popup.open(name, link);
}

const cardPopup = new PopupWithImage(
  largeImagePopup,
  {
    title: cardTitle, 
    image: cardImage
  },
);
cardPopup.setEventListeners();

function handleDeletePopup(popup, card, cardId) {
  popup.open()
  popup.setEventListeners(card, cardId)
}

const deletePopup = new PopupWithDelete(
  cardDeletePopup, 
  formDelete,
  function handleFormSubmit (card, cardId) {
    api.deleteCard(cardId);
    card.remove();
  }
);

function handleLikeClick(likeButton, likeCounter, likes, cardId) {
  if (likeButton.classList.contains('card__like_active')) {
    likeButton.classList.toggle('card__like_active');
    api.deleteLike(cardId);
    likeCounter.textContent--;
  }
  else {
    likeButton.classList.toggle('card__like_active');
    likeCounter.textContent++;
    api.addLike(cardId);
  }
}

export {createCard}