import Card from "../components/Card.js";
import {deletePopup, cardPopup} from "../pages/index";
import { cardTemplate} from "./constants.js";


function createCard(item, profile, api){
  const card = new Card(
      item,
      profile,
      cardTemplate, 
      cardPopup,
      deletePopup, 
      api);
  const cardElement = card.generateCard();
  return cardElement;
}



export {createCard}