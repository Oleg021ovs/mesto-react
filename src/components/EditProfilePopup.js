import React from "react";
import PopupWithForm from "./popupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}){
const [name, setName] = React.useState("");
const [description, setDescription] = React.useState("");
const currentUser = React.useContext(CurrentUserContext);

function inputName(e){
    setName(e.target.value);
}
function inputDescription(e){
    setDescription(e.target.value);
}

function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  } 

  React.useEffect(()=>{
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, isOpen]);
return(

    <PopupWithForm
          isOpen={isOpen}
          name="form_profile"
          title="Редактировать профиль"
          noValidate=""
          textButton="Сохранить"
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__input-group">
            <input
              type="text"
              name="name"
              placeholder="введите имя"
              className="popup__item popup__item_type_heading"
              value={name}
              onChange={inputName}
              id="form-name"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span id="error-form-name" className="popup__form-error" />
            <input
              type="text"
              name="about"
              value={description}
              onChange={inputDescription}
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
        
)

}

export default EditProfilePopup;