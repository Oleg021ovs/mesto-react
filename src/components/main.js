import React from "react";
//import profileAvatar from '../images/image.jpg';
//import { api } from "../utils/Api";
import profileAddCardButton from "../images/button-img.svg";
import Card from "./card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  //const [userName, setUserName] = useState("");
  //const [userDescription, setUserDescription] = useState("");
  //const [userAvatar, setUserAvatar] = useState("");
  const currentUser = React.useContext(CurrentUserContext);
  //const { name, about, avatar} = currentUser;
  //const [cards, setCards] = useState([]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            className="profile__avatar-img"
            src={currentUser.avatar}
            
          ></img>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__edit-button popup-open"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="Добавить"
          type="button"
          onClick={onAddPlace}
        >
          <img src={profileAddCardButton} />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__element">
        {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id}  />
          ))}
          </ul>
      </section>
    </main>
  );
}

export default Main;
