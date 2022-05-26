export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }

];
export const popupElements = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('.popup_profile');
export const popupElementsEdit = document.querySelector('.popup_elements-edit');
export const popupElementsImage = document.querySelector('.popup_elements-image');
export const popupCloseButtonElement = document.querySelector('.close-button');
export const popupCloseButtons = document.querySelectorAll('.close-button');
export const popupEditButtonElement = document.querySelector('.profile__edit-button');
export const profileAddButtonElement = document.querySelector('.profile__add-button');
export const nameInput = document.querySelector('.popup__input_el_name');
export const jobInput = document.querySelector('.popup__input_el_job');
export const formElementsEdit = document.querySelector('.popup__form_elements-edit');
export const placeNameInput = document.querySelector('.popup__input_el_place-name');
export const placeLinkInput = document.querySelector('.popup__input_el_place-link');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const elements = document.querySelector('.elements');
export const elementsImagePopupImage = document.querySelector('.elements-image-popup__image');
export const elementsImagePopupTitle = document.querySelector('.elements-image-popup__title');
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
