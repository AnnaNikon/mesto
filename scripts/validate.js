
const showError = (formElement, popupInput, errorMessage) => {
  const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');

}
const hideError = (formElement, popupInput) => {
  const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';

}
const checkValidity = (formElement, popupInput) => {
  const inputNotValid = !popupInput.validity.valid;
  if (inputNotValid) {
    showError(formElement, popupInput, popupInput.validationMessage);
  } else {
    hideError(formElement, popupInput);
  };
}

const setInputEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const popupSubmitButton = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, popupSubmitButton);
  inputList.forEach((popupInput) => {
    popupInput.addEventListener('input', (evt) => {
      checkValidity(formElement, popupInput);
      toggleButtonState(inputList, popupSubmitButton);
    });
  });
};


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const popupSubmitButton = formElement.querySelector(config.submitButtonSelector);
      disableSubmitButton(popupSubmitButton);
    });
    setInputEventListeners(formElement, config);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((popupInput) => {
    return !popupInput.validity.valid;
  });
};

const disableSubmitButton = (popupSubmitButton) => {
  popupSubmitButton.classList.add('popup__submit-button_inactive');
  popupSubmitButton.setAttribute('disabled', true);
}
const enableSubmitButton = (popupSubmitButton) => {
  popupSubmitButton.classList.remove('popup__submit-button_inactive');
  popupSubmitButton.removeAttribute('disabled', true);
};

const toggleButtonState = (inputList, popupSubmitButton) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(popupSubmitButton);
  } else {
    enableSubmitButton(popupSubmitButton);

  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

