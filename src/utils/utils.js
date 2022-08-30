import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { cardTemplate, elements } from "./constants.js";

function handleCardClick(popup, name, link) {
    const imagePopup = new PopupWithImage(popup);
    imagePopup.open(name, link);
}

function handleFormSubmit(formData) {
    const user = new UserInfo(formData);
    console.log(user)
    return user
}

function cardRenderer(inputData) {
    const cardList = new Section({
    items: inputData,
    renderer: (item) => {
      const card = new Card(item, cardTemplate, handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  }, elements);
  
  cardList.renderItems();
}

export {handleCardClick, handleFormSubmit, cardRenderer}