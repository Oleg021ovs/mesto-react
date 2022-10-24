const profileButton = document.querySelector(".profile__edit-button");
const popupFormProfile = document.querySelector(".popup_form_profile");
const formProfile = popupFormProfile.querySelector(".popup__openform");
const popupItemHeading = popupFormProfile.querySelector(
  ".popup__item_type_heading"
);
const popupItemSubHeading = popupFormProfile.querySelector(
  ".popup__item_type_subheading"
);
const profileAddButton = document.querySelector(".profile__add-button");
const popupFormElement = document.querySelector(".popup_form_element");
const Elemform = popupFormElement.querySelector(".popup__Elemform");
const profileAvatar = document.querySelector(".profile__avatar");
const avatarForm = document.querySelector(".popup__AvatarForm");

const objSetting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export {
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
  profileAvatar,
  avatarForm,
  objSetting,
};
