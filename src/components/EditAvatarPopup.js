import React from "react";
import PopupWithForm from "./popupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }){
const avatarInputRef = React.useRef();

function handleSubmit(e){
e.preventDefault()

onUpdateAvatar({
    avatar: avatarInputRef.current.value,
})
}
return(
    <PopupWithForm
          isOpen={isOpen}
          name="avatar_form"
          title="Обновить аватар"
          noValidate=""
          textButton="Сохранить"
          onClose={onClose}
          onSubmit={handleSubmit}
          className="popup_avatar_form"
        >
          <fieldset className="popup__input-group">
            <input
            ref={avatarInputRef}
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
)

}

export default EditAvatarPopup;