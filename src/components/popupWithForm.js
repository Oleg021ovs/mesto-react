import React from "react";
function PopupWithForm({
  name,
  isOpen,
  title,
  onSubmit,
  children,
  textButton,
  onClose,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__openform"
          name={name}
          onSubmit={onSubmit}
        >
          {children}

          <button className={`popup__btn`} type="submit">
            {textButton}
          </button>
        </form>
        <button
          className="popup__close"
          onClick={onClose}
          type="reset"
          aria-label="закрыть окно"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
