import { useState, useEffect } from "react";
//import profileAvatar from '../images/image.jpg';
import api from "../utils/Api";
import profileAddCardButton from "../images/button-img.svg";
import Card from "./card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            className="profile__avatar-img"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></img>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__edit-button popup-open"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__text">{userDescription}</p>
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
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
