import React from "react";

// попап с открытием карточки
function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_form_overlay ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__group">
        <img
          className="popup__overlay-images"
          src={card.link}
          alt={card.name}
        />
        <h3 className="popup__overlay-title">{card.name}</h3>
        <button
          className="popup__close popup__btn-close"
          onClick={onClose}
          type="button"
          aria-label="закрыть окно"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
