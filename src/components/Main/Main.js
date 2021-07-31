
function Main () {
  return (
    <main className="content">
    <section className="profile profile_margins">
      <div className="profile__avatar">
        <button className="profile__avatar-btn" type="button" onClick={handleEditAvatarClick}></button>
        <img className="profile__photo" src="#" alt="Фото пользователя"/>
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__name"></h1>
          <button className="profile__edit-btn" type="button" onClick={handleEditProfileClick}></button>
        </div>
        <p className="profile__description"></p>
      </div>
      <button className="profile__add-btn" type="button" onClick={handleAddPlaceClick}></button>
    </section>
    <div className="popup popup_type_edit-profile">
      <form action="#" className="popup__form popup__form_type_edit-profile" name="edit-profile" novalidate>
        <h2 className="popup__form-header">Редактировать профиль</h2>
        <fieldset className="popup__inputs">
          <input className="popup__input popup__input_type_profile-name" type="text" name="profileTitle" id="profileTitle" placeholder="Имя" value="" maxlength="40" minlength="2" required/>
          <span className="popup__input-error" id="profileTitle-error"></span>
          <input className="popup__input popup__input_type_profile-description" type="text" name="profileDescription" id="profileDescription" placeholder="О себе" value="" maxlength="200" minlength="2" required/>
          <span className="popup__input-error" id="profileDescription-error"></span>
        </fieldset>
        <button className="popup__submit-btn popup__submit-btn_type_edit-profile popup__submit-btn_state_inactive" type="submit">Сохранить</button>
        <button className="popup__close-btn popup__close-btn_type_edit-profile" type="reset"></button>
      </form>
    </div>
    <div className="popup popup_type_edit-avatar">
      <form action="#" class="popup__form popup__form_type_edit-avatar" name="edit-avatar" novalidate>
        <h2 className="popup__form-header">Обновить аватар</h2>
        <fieldset className="popup__inputs">
          <input className="popup__input popup__input_type_img-link" type="url" name="avatarLink" id="avatarLink" placeholder="Ссылка на аватар" value="" required/>
          <span className="popup__input-error" id="avatarLink-error"></span>
        </fieldset>
        <button className="popup__submit-btn popup__submit-btn_type_edit-avatar popup__submit-btn_state_inactive" type="submit">Сохранить</button>
        <button className="popup__close-btn popup__close-btn_type_edit-avatar" type="reset"></button>
      </form>
    </div>
    <div className="popup popup_type_add-card">
      <form action="#" class="popup__form popup__form_type_add-card" name="add-card" novalidate>
        <h2 className="popup__form-header">Новое место</h2>
        <fieldset className="popup__inputs">
          <input className="popup__input popup__input_type_card-name" type="text" name="cardName" id="cardName" placeholder="Название" value="" minlength="2" maxlength="30" required/>
          <span className="popup__input-error" id="cardName-error"></span>
          <input className="popup__input popup__input_type_img-link" type="url" name="imgLink" id="imgLink" placeholder="Ссылка на картинку" value="" required/>
          <span className="popup__input-error" id="imgLink-error"></span>
        </fieldset>
        <button className="popup__submit-btn popup__submit-btn_type_add-card popup__submit-btn_state_inactive" type="submit">Создать</button>
        <button className="popup__close-btn popup__close-btn_type_add-card" type="reset"></button>
      </form>
    </div>
    <div className="popup popup_type_delete-card">
      <form action="#" class="popup__form popup__form_type_delete-card" name="delete-card" novalidate>
        <h2 className="popup__form-header">Вы уверены?</h2>
        <button className="popup__submit-btn popup__submit-btn_type_delete-card" type="button">Да</button>
        <button className="popup__close-btn popup__close-btn_type_delete-card" type="reset"></button>
      </form>
    </div>
    <section className="semantic-wrapper">
      <ul className="cards">
        <template id="initialCardsTemplate">
          <li className="card">
            <img className="card__image" src="#" alt=""/>
            <div className="card__label">
              <h2 className="card__title"></h2>
              <div className="card__like">
                <button className="card__like-btn" type="button"></button>
                <span className="card__like-counter">1</span>
              </div>
            </div>
            <button className="card__delete-btn" type="button"></button>
          </li>
        </template>
      </ul>
      <div className="popup popup_type_view-card">
        <figure className="popup__image-container">
          <img className="popup__card-image" src="#" alt="#"/>
          <figcaption className="popup__card-image-title"></figcaption>
          <button className="popup__close-btn popup__close-btn_type_view-card" type="button"></button>
        </figure>
      </div>
    </section>
  </main>
  );
}

export default Main;
