import { useState } from "react";
import Header from "./Header";
import Main from "./main";
import Footer from "./footer";
import PopupWithForm from "./popupWithForm";
import ImagePopup from "./imagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [isSelectedCard, setSelectedCard] = useState({});

   // попап аватар
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
// попап профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
// попап добавление карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
 
  // открытие попап карточки
  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
    setImagePopupOpen(true);
  }
 
  //закрытие попапов на крестик
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name="form_profile"
          title="Редактировать профиль"
          noValidate=""
          textButton="Сохранить"
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-group">
            <input
              type="text"
              name="name"
              placeholder="введите имя"
              className="popup__item popup__item_type_heading"
              id="form-name"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span id="error-form-name" className="popup__form-error" />
            <input
              type="text"
              name="description"
              placeholder="заполнить о себе"
              className="popup__item popup__item_type_subheading"
              id="form-description"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span id="error-form-description" className="popup__form-error" />
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name="form_element"
          title="Новое место"
          noValidate=""
          textButton="Создать"
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-group">
            <input
              type="text"
              name="form-name"
              placeholder="Название"
              className="popup__item popup__item_type_title"
              id="formm-name"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span id="error-formm-name" className="popup__form-error" />
            <input
              name="form-link"
              placeholder="Ссылка на картинку"
              className="popup__item popup__item_type_link"
              id="form-link"
              required=""
              type="url"
            />
            <span id="error-form-link" className="popup__form-error" />
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name="avatar_form"
          title="Обновить аватар"
          noValidate=""
          textButton="Сохранить"
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-group">
            <input
              name="avatar-link"
              placeholder="ссылка на изображение"
              className="popup__item popup__item_type_link"
              id="avatar-link"
              required=""
              type="url"
            />
            <span
              id="error-avatar-link"
              className="popup__form-error error-avatar-input-link"
            />
          </fieldset>
        </PopupWithForm>
        <ImagePopup
          card={isSelectedCard}
          onClose={closeAllPopups}
          isOpen={imagePopupOpen}
        />
      </>
    </div>
  );
}

export default App;
