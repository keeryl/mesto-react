import React from 'react';
import api from '../../utils/Api.js';
import Card from '../Card/Card.js';

function Main (props) {

const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
    api.getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch(error => {
        console.log(error);
      });
  },
  [cards]
);

React.useEffect(() => {

    api.getUserInfo()
      .then(result => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(error => {
        console.log(error)
      });

  },
  [userName, userAvatar, userDescription]
);

  return (
    <main className="content">
    <section className="profile profile_margins">
      <div className="profile__avatar">
        <button className="profile__avatar-btn" type="button" onClick={props.onEditAvatar}></button>
        <img className="profile__photo" src={userAvatar} alt="Фото пользователя"/>
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__description">{userDescription}</p>
      </div>
      <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
    </section>
    {/* <div className="popup popup_type_delete-card">
      <form action="#" class="popup__form popup__form_type_delete-card" name="delete-card" novalidate>
        <h2 className="popup__form-header">Вы уверены?</h2>
        <button className="popup__submit-btn popup__submit-btn_type_delete-card" type="button">Да</button>
        <button className="popup__close-btn popup__close-btn_type_delete-card" type="reset"></button>
      </form>
    </div> */}
    <section className="semantic-wrapper">
      <ul className="cards">
        {cards.map(item => {
            return (
              <Card onCardClick={props.onCardClick} card={item}/>
            )
          })}
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
