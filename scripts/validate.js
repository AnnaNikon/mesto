
const showError = (formElement, popupInput, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);

}
const hideError = (formElement, popupInput, config) => {
  const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';

}
const checkValidity = (formElement, popupInput, config) => {
  const inputNotValid = !popupInput.validity.valid;
  if (inputNotValid) {
    showError(formElement, popupInput, popupInput.validationMessage, config);
  } else {
    hideError(formElement, popupInput, config);
  };
}

const setInputEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const popupSubmitButton = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, popupSubmitButton, config);
  inputList.forEach((popupInput) => {
    popupInput.addEventListener('input', (evt) => {
      checkValidity(formElement, popupInput, config);
      toggleButtonState(inputList, popupSubmitButton, config);
    });
  });
};


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const popupSubmitButton = formElement.querySelector(config.submitButtonSelector);
      disableSubmitButton(popupSubmitButton, config);
    });
    setInputEventListeners(formElement, config);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((popupInput) => {
    return !popupInput.validity.valid;
  });
};

const disableSubmitButton = (popupSubmitButton, config) => {
  popupSubmitButton.classList.add(config.inactiveButtonClass);
  popupSubmitButton.setAttribute('disabled', true);
}
const enableSubmitButton = (popupSubmitButton, config) => {
  popupSubmitButton.classList.remove(config.inactiveButtonClass);
  popupSubmitButton.removeAttribute('disabled', true);
};

const toggleButtonState = (inputList, popupSubmitButton, config) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(popupSubmitButton, config);
  } else {
    enableSubmitButton(popupSubmitButton, config);

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

