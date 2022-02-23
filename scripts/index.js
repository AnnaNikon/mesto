
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_el_name');
let jobInput = formElement.querySelector('.popup__input_el_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

const openPopup = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
const closePopup = function() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

