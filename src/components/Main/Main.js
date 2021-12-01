import React from 'react';
import api from '../../utils/Api.js';
import Card from '../Card/Card.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Main (props) {

const currentUser = React.useContext(CurrentUserContext);
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

const handleCardLike = (card) => {
  const isLiked = card.likes.some(like => like._id === currentUser._id);
  if (isLiked) {
    api.removeLike(card._id)
      .then(result => {
        setCards((cards) => cards.map((c) => c._id === card._id ? result : c));
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    api.addLike(card._id)
    .then(result => {
      setCards((cards) => cards.map((c) => c._id === card._id ? result : c));
    })
    .catch(error => {
      console.log(error);
    });
  }
}

const handleCardDelete = (card) => {
  console.log(card);
  const isOwn = card.owner._id === currentUser._id;
  if (isOwn) {
    api.deleteCard(card._id)
      .then(result => {
        setCards(cards => cards.filter(c => c._id !== result._id ));
      })
      .catch(error => {
        console.log(error);
      });
  }
}

  return (
    <main className="content">
    <section className="profile profile_margins">
      <div className="profile__avatar">
        <button className="profile__avatar-btn" type="button" onClick={props.onEditAvatar}></button>
        <img className="profile__photo" src={currentUser.avatar} alt="Фото пользователя"/>
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__description">{currentUser.about}</p>
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
              <Card
                key={item._id}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                card={item} />
            )
          })}
      </ul>
    </section>
  </main>
  );
}

export default Main;
