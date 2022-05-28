import { Card } from './Card.js';
import {
  initialCards,
  popupElements,
  popupProfile,
  popupElementsEdit,
  popupCloseButtons,
  popupEditButtonElement,
  profileAddButtonElement,
  nameInput,
  jobInput,
  formElementsEdit,
  placeNameInput,
  placeLinkInput,
  profileName,
  profileJob,
  elementContainer,
  validationConfig,
} from './constants.js';
import { FormValidator } from './FormValidator.js';

const createNewCard = (data) => {
  const card = new Card(data.link, data.name);
  const cardElement = card.getView();
  return cardElement;
}

const renderInitialCards = (element) => {
  initialCards.forEach((element) => {
    const initialCardsElement = createNewCard(element);
    elementContainer.append(initialCardsElement);
  });
};

renderInitialCards(initialCards);

export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeyEvent);
}

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeyEvent);
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}

function submitProfileForm(evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
  popupProfile.reset();
}

function renderElementsCard(cardData) {
  const newCardElement = createNewCard(cardData);
  elementContainer.prepend(newCardElement);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = placeLinkInput.value;
  const cardData = { name, link };
  renderElementsCard(cardData);
  closePopup(popupElementsEdit);
  formElementsEdit.reset();
}

const openPopupElementsEdit = () => {
  formElementsEdit.reset();
  openPopup(popupElementsEdit);
}

const closeOpenedPopup = (element) => {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
};

const handleKeyEvent = (evt) => {
  if (evt.key === 'Escape') {
    closeOpenedPopup();
  }
};

const closePopupByClickOnOverlay = (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closeOpenedPopup();
};

popupProfile.addEventListener('submit', submitProfileForm);
formElementsEdit.addEventListener('submit', handleCardSubmit);
popupEditButtonElement.addEventListener('click', openPopupProfile);
profileAddButtonElement.addEventListener('click', openPopupElementsEdit);
popupCloseButtons.forEach((popupCloseButtonElement) => {
  popupCloseButtonElement.addEventListener('click', closeOpenedPopup);
});
popupElements.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', closePopupByClickOnOverlay);
});

const newElementsFormValidator = new FormValidator(validationConfig, formElementsEdit);
newElementsFormValidator.enableValidation();

const newProfileFormValidator = new FormValidator(validationConfig, popupProfile);
newProfileFormValidator.enableValidation();
