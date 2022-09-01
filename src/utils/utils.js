import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { cardTemplate, elements } from "./constants.js";

function handleCardClick(popup, name, link) {
    const imagePopup = new PopupWithImage(popup);
    imagePopup.open(name, link);
}

function cardRenderer(inputData) {
    console.log('cardRenderer inputData: ', inputData)
    const cardList = new Section({
    items: inputData,
    renderer: (item) => {
      console.log('cardRenderer renderer "item" : ', item);
      const card = new Card(item, cardTemplate, handleCardClick);
      console.log('card: ', card);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  }, elements);
  console.log('cardlist : ', cardList);
  cardList.renderItems();
}

export {handleCardClick, cardRenderer}