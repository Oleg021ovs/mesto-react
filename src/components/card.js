import React from "react";
// карточки
function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <section className="elements__item">
      <img
        className="elements__images"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="elements__group">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like">
          <button className="elements__like-btn" type="button"></button>
          <span className="elements__like-counter">{0}</span>
        </div>
      </div>

      <button className="element__btn-delete" type="button"></button>
    </section>
  );
}

export default Card;
