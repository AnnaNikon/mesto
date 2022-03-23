
const popupElement = document.querySelector('.popup');
const popupElements = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupElementsEdit = document.querySelector('.popup_elements-edit');
const popupElementsImage = document.querySelector('.popup_elements-image');
const popupCloseButtonElement = document.querySelector('.close-button');
const popupCloseButtons = document.querySelectorAll('.close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const profileAddButtonElement = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_el_name');
const jobInput = formElement.querySelector('.popup__input_el_job');
const formElementsEdit = document.querySelector('.popup__form_elements-edit');
const placeNameInput = document.querySelector('.popup__input_el_place-name');
const placeLinkInput = document.querySelector('.popup__input_el_place-link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elementsTemplate = document.querySelector('.elements__template').content;
const elements = document.querySelector('.elements');
const elementsImagePopupImage = document.querySelector('.elements-image-popup__image');
const elementsImagePopupTitle = document.querySelector('.elements-image-popup__title');




const initialCards = [
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
   const elementsCards = createElementsCard(element);
    elements.append(elementsCards);
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
  if(element.classList.contains('popup')) {
    element.classList.add('popup_opened');
  }

}
 function closePopup (element) {
   if(element.classList.contains('popup_opened')) {
    element.classList.remove('popup_opened');
   }
}

function openPopupProfile () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);

}
function submitProfileForm (evt) {
  evt.preventDefault();
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
  placeNameInput.value = placeNameInput.placeholder;
  placeLinkInput.value = placeLinkInput.placeholder;
  closePopup(popupElementsEdit);
};

function openPopupElementsEdit () {
  openPopup(popupElementsEdit);
};

formElement.addEventListener('submit', submitProfileForm);
formElementsEdit.addEventListener('submit', handleCardSubmit);
popupEditButtonElement.addEventListener('click', openPopupProfile);
profileAddButtonElement.addEventListener('click', openPopupElementsEdit);
popupCloseButtons.forEach((popupCloseButtonElement) => {
  popupCloseButtonElement.addEventListener('click', function(evt) {
    const popupOpened =  evt.target.closest('.popup_opened');
    closePopup(popupOpened);
   });
});




