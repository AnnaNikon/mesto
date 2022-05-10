

const popupElements = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupElementsEdit = document.querySelector('.popup_elements-edit');
const popupElementsImage = document.querySelector('.popup_elements-image');
const popupCloseButtonElement = document.querySelector('.close-button');
const popupCloseButtons = document.querySelectorAll('.close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const profileAddButtonElement = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
const formElementsEdit = document.querySelector('.popup__form_elements-edit');
const placeNameInput = document.querySelector('.popup__input_el_place-name');
const placeLinkInput = document.querySelector('.popup__input_el_place-link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elementsTemplate = document.querySelector('.elements__template').content;
const elements = document.querySelector('.elements');
const elementsImagePopupImage = document.querySelector('.elements-image-popup__image');
const elementsImagePopupTitle = document.querySelector('.elements-image-popup__title');



function createElementsCard(element) {
  const elementsCard = elementsTemplate.cloneNode(true);
  const elementsTitle = elementsCard.querySelector('.elements__title');
  const elementsImage = elementsCard.querySelector('.elements__image');
  elementsTitle.textContent = element.name;
  elementsImage.src = element.link;
  elementsImage.alt = elementsTitle.textContent;
  setEventListeners(elementsCard);
  return elementsCard;

};
function renderInitialCards(element) {
  initialCards.forEach(function(element) {
   const card = createElementsCard(element);
    elements.append(card);
  });
}

renderInitialCards(initialCards);

function renderElementsCard(element) {
  const cardElement = createElementsCard(element);
  elements.prepend(cardElement);
}

function setEventListeners(elementsCard) {
  elementsCard.querySelector('.elements__like-button').addEventListener('click', likeElementsItem);
  elementsCard.querySelector('.elements__delete-button').addEventListener('click', deleteElementsItem);
  elementsCard.querySelector('.elements__image').addEventListener('click', openPopupElementsImage);
}
function likeElementsItem(evt) {
  evt.target.classList.toggle('elements__like-button_active');
};
function deleteElementsItem(evt) {
  const elementsItem = evt.target.closest('.elements__item');
  elementsItem.remove();
};
function openPopupElementsImage (evt) {
  elementsImagePopupImage.src = evt.target.src;
  elementsImagePopupTitle.textContent = evt.target.alt;
  elementsImagePopupImage.alt = evt.target.alt;
  openPopup(popupElementsImage);
};


function openPopup (element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', handleKeyEvent);
}
 function closePopup (element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleKeyEvent);
}

function openPopupProfile () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);

}
function submitProfileForm (evt) {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

function handleCardSubmit(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = placeLinkInput.value;
  const cardData = {name, link};
  renderElementsCard(cardData);
  closePopup(popupElementsEdit);
  placeNameInput.value = '';
  placeLinkInput.value = '';
};

function openPopupElementsEdit () {
  openPopup(popupElementsEdit);
};

const closeOpenedPopup = (element) => {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
}

const handleKeyEvent  = (evt) => {
  if (evt.key === "Escape") {
    closeOpenedPopup();
  };
}
const closePopupByClickOnOverlay = (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  };
  closeOpenedPopup();
};


popupProfile.addEventListener('submit', submitProfileForm);
formElementsEdit.addEventListener('submit', handleCardSubmit);
popupEditButtonElement.addEventListener('click', openPopupProfile);
profileAddButtonElement.addEventListener('click', openPopupElementsEdit);
popupCloseButtons.forEach((popupCloseButtonElement) => {
  popupCloseButtonElement.addEventListener('click', closeOpenedPopup)
});
popupElements.forEach((popupElement) => {
  popupElement.addEventListener('mousedown', closePopupByClickOnOverlay);
});
