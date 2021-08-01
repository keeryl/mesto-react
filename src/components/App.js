import React from 'react';
import '../index.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import PopupWithImage from './PopupWithImage/PopupWithImage.js';

function App() {

  function handleEditAvatarClick () {
    setIsEditAvatarPopup(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopup(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopup(true);
  }

  function closeAllPopups () {
    setIsEditAvatarPopup(false);
    setIsEditProfilePopup(false);
    setIsAddPlacePopup(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }


  const [isEditProfilePopupOpen, setIsEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        selectorName="edit-profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <fieldset className="popup__inputs">
            <input className="popup__input popup__input_type_profile-name" type="text" name="profileTitle" id="profileTitle" placeholder="Имя" value="" maxLength="40" minLength="2" required/>
            <span className="popup__input-error" id="profileTitle-error"></span>
            <input className="popup__input popup__input_type_profile-description" type="text" name="profileDescription" id="profileDescription" placeholder="О себе" value="" maxLength="200" minLength="2" required/>
            <span className="popup__input-error" id="profileDescription-error"></span>
          </fieldset>
      </PopupWithForm>
      <PopupWithForm
        selectorName="edit-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__inputs">
          <input className="popup__input popup__input_type_img-link" type="url" name="avatarLink" id="avatarLink" placeholder="Ссылка на аватар" value="" required/>
          <span className="popup__input-error" id="avatarLink-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        selectorName="add-card"
        title="Новое место"
        btnText="Создать"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__inputs">
          <input className="popup__input popup__input_type_card-name" type="text" name="cardName" id="cardName" placeholder="Название" value="" minLength="2" maxLength="30" required/>
          <span className="popup__input-error" id="cardName-error"></span>
          <input className="popup__input popup__input_type_img-link" type="url" name="imgLink" id="imgLink" placeholder="Ссылка на картинку" value="" required/>
          <span className="popup__input-error" id="imgLink-error"></span>
        </fieldset>
      </PopupWithForm>
      {/* <PopupWithForm
        selectorName="delete-card"
        title="Вы уверены?"
        btnText="Да"
        isOpened={isAddPlacePopupOpen}>
      </PopupWithForm> */}
      <PopupWithImage card={selectedCard} isOpened={isImagePopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
