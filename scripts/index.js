
const popupElement = document.querySelector('.popup');
const popupElements = document.querySelectorAll('.popup');
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

function renderElementsCard(element) {
  const elementsCard = elementsTemplate.cloneNode(true);
  setEventListeners(elementsCard);
  const elementsTitle = elementsCard.querySelector('.elements__title');
  const elementsImage = elementsCard.querySelector('.elements__image');
  elementsTitle.textContent = element.name;
  elementsImage.src = element.link;
  elementsImage.alt = elementsTitle.textContent;

  elements.append(elementsCard);
};

function renderInitialCards (initialCards) {
  initialCards.forEach(renderElementsCard);
};



function setEventListeners(elementsCard) {
  elementsCard.querySelector('.elements__like-button').addEventListener('click', likeElementsItem);
  elementsCard.querySelector('.elements__delete-button').addEventListener('click', deleteElementsItem);
}
function likeElementsItem(evt) {
  evt.target.classList.toggle('elements__like-button_active');
};

function deleteElementsItem(evt) {
  const elementsItem = evt.target.closest('.elements__item');
  elementsItem.remove();
};
const openPopup = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


 const closePopup = function() {
  popupElements.forEach((popupElement) => {
   popupElement.classList.remove('popup_opened');
  });
};

const elementsCardsItems = elements.children;
function addNewCard(evt) {
  evt.preventDefault();
  const elementsItem = document.querySelector('.elements__item').cloneNode(true);
  const newElementsTitle = elementsItem.querySelector('.elements__title');
  const newElementsImage = elementsItem.querySelector('.elements__image');
  newElementsTitle.textContent = placeNameInput.value;
  newElementsImage.src = placeLinkInput.value;
  newElementsImage.alt = newElementsTitle.textContent;

  setEventListeners(elementsItem);
  elementsItem.querySelector('.elements__image').addEventListener('click', openPopupElementsImage);
  elements.prepend(elementsItem);
  elementsCardsItems[6].remove();
  closePopup();
};

renderInitialCards(initialCards);

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
};
const elementsTitle = document.querySelector('.elements__title');
const elementsImage = document.querySelector('.elements__image');
const elementsImages = document.querySelectorAll('.elements__image');
const elementsImagePopups = document.querySelectorAll('.elements-image-popup__image');
const elementsItems = document.querySelectorAll('.elements__item');

const openPopupElementsEdit = function() {
  popupElementsEdit.classList.add('popup_opened');

};

const openPopupElementsImage = function(evt) {
  const elementsItem = evt.target.closest('.elements__item');
  const elementsImagePopupImage = document.querySelector('.elements-image-popup__image');
  const elementsImagePopupTitle = document.querySelector('.elements-image-popup__title');
  elementsImagePopupImage.src = elementsItem.querySelector('.elements__image').src;
  elementsImagePopupTitle.textContent = elementsItem.querySelector('.elements__title').textContent;
  elementsImagePopupImage.alt = elementsImagePopupTitle.textContent;
  popupElementsImage.classList.add('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler);
formElementsEdit.addEventListener('submit', addNewCard);
elementsImages.forEach((elementsImage) => {
  elementsImage.addEventListener('click', openPopupElementsImage);
});
popupEditButtonElement.addEventListener('click', openPopup);
profileAddButtonElement.addEventListener('click', openPopupElementsEdit);
popupCloseButtons.forEach((popupCloseButtonElement) => {
  popupCloseButtonElement.addEventListener('click', closePopup);
});



