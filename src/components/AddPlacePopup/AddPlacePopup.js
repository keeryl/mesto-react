import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function AddPlacePopup(props) {

  const nameInput = React.useRef();
  const urlInput = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddCard(nameInput.current.value, urlInput.current.value);
    nameInput.current.value = '';
    urlInput.current.value = '';
  }

  return (
    <PopupWithForm
      selectorName="add-card"
      title="Новое место"
      btnText="Создать"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={nameInput}
        className="popup__input popup__input_type_card-name"
        type="text"
        name="cardName"
        id="cardName"
        placeholder="Название"
        //value=""
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error" id="cardName-error"></span>
      <input
        ref={urlInput}
        className="popup__input popup__input_type_img-link"
        type="url"
        name="imgLink"
        id="imgLink"
        placeholder="Ссылка на картинку"
        //value=""
        require
      />
      <span className="popup__input-error" id="imgLink-error"></span>
    </PopupWithForm>
  );
}

export default  AddPlacePopup;






