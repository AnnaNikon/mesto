import {elementsImagePopupImage, elementsImagePopupTitle, popupElementsImage} from './constants.js';
import {openPopup} from "./index.js"
export class Card {
  constructor(image, title, template) {
    this._image = image;
    this._title = title;
    this._template = template;
  }

  _getTemplate() {
    const cardTemplate = document
    .querySelector('.elements__template')
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

  return cardTemplate;
  }

  _likeElementsItem() {
     this._view.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
  }

  _deleteElementsItem() {
    this._view.remove();
    this._element = null;
  }

  _openPopupElementsImage() {
    elementsImagePopupImage.src = this._image;
    elementsImagePopupTitle.textContent = this._title;
    elementsImagePopupImage.alt = this._title;
    openPopup(popupElementsImage);
  }

  _setEventListeners() {
    this._view.querySelector('.elements__like-button').addEventListener('click', () => {
      this._likeElementsItem();
    });
    this._view.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._deleteElementsItem();
    });
    this._view.querySelector('.elements__image').addEventListener('click', () => {
      this._openPopupElementsImage();
    });
  }

  getView(){
    this._view = this._getTemplate();
    this._view.querySelector('.elements__title').textContent = this._title;
    this._view.querySelector('.elements__image').src = this._image;
    this._view.querySelector('.elements__image').alt = this._title;
    this._setEventListeners();
    return this._view;
  }

}
