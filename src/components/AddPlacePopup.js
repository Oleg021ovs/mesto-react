import React from "react";
import PopupWithForm from "./popupWithForm";

function AddPlacePopup({isOpen,onClose,onAddPlace}){
const [name, setName] = React.useState("");
const [link, setLink] = React.useState("");


function inputName(e){
    setName(e.target.value);
}
function inputLink(e){
    setLink(e.target.value);
}

function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  } 

  React.useEffect(()=>{
    setName("");
    setLink("");
  }, [isOpen]);

  return(
    <PopupWithForm
          isOpen={isOpen}
          name="form_element"
          title="Новое место"
          noValidate=""
          textButton="Создать"
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <fieldset className="popup__input-group">
            <input
            className="popup__item popup__item_type_title"
            onChange={inputName}
            value={name}
            type="text"
            name="form-name"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={40}
            id="formm-name"
            />
            <span id="error-formm-name" className="popup__form-error" />
            <input
             onChange={inputLink}
             value={link}
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
  );
}

export default AddPlacePopup;