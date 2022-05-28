export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButtonSelector = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }
  _showError = (popupInput, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${popupInput.id}-error`);
    popupInput.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideError = (popupInput) => {
    const errorElement = this._formElement.querySelector(`.${popupInput.id}-error`);
    popupInput.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkValidity = (popupInput) => {
    const inputNotValid = !popupInput.validity.valid;
    if (inputNotValid) {
      this._showError(popupInput, popupInput.validationMessage);
    } else {
      this._hideError(popupInput);
    }
  };

  _setInputEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((popupInput) => {
      popupInput.addEventListener('input', (evt) => {
        this._checkValidity(popupInput);
        this._toggleButtonState();
      });
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some((popupInput) => {
      return !popupInput.validity.valid;
    });
  };

  _disableSubmitButton = () => {
    this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    this._submitButtonSelector.setAttribute('disabled', true);
  };

  _enableSubmitButton = () => {
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.removeAttribute('disabled', true);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableSubmitButton();
    });
    this._setInputEventListeners();
  };


}
