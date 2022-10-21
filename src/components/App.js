import React, {useState} from 'react';
import Header from '../components/Header';
import Main from './main';
import Footer from './footer';
import PopupWithForm from './popupWithForm';
function App() {
  
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false)
function handleEditAvatarClick () {
  setisEditAvatarPopupOpen(true)
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true)
}

function handleAddPlaceClick() {
  setisAddPlacePopupOpen(true)
}

  return (
    
    <div className="page">
      <>
    <Header />
    <Main 
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    
    />
    <Footer/>
    
  </>

  <PopupWithForm
  isOpen={isEditProfilePopupOpen}
   name="form_profile"
   title="Редактировать профиль"
   noValidate=""
   textButton="Сохранить"
   onClose=""
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
   onClose=""
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
   onClose=""
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

  <PopupWithForm
  //isOpen={}
   name="confirm_form"
   title="Вы уверены?"
   noValidate=""
   textButton="Да"
   onClose=""
  >
  <input type="hidden" name="confirm-id" defaultValue="" />
        <button className="popup__btn" id="submit-btnnn" type="submit">
          Да
        </button>
  </PopupWithForm>


  <div className="popup popup_form_overlay">
    <div className="popup__group">
      <img className="popup__overlay-images" src="#" alt="фото" />
      <h3 className="popup__overlay-title" />
      <button
        className="popup__close popup__btn-close"
        type="button"
        aria-label="закрыть окно"
      />
    </div>
  </div>
  </div>
         
  );
}

export default App;
