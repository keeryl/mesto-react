import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Card (props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteBtnClassName = (
    `card__delete-btn ${isOwn ? '' : ''}`
  );
  const cardLikeBtnClassName = (
    `card__like-btn ${isLiked ? '' : ''}`
  );
  console.log(props.card);

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

    return (
      <li className="card">
      <img onClick={handleCardClick} className="card__image" src={props.card.link} alt={`Картинка места: ${props.card.name}`}/>
      <div className="card__label">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className={cardLikeBtnClassName} type="button"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteBtnClassName} type="button"></button>
    </li>
    )
}

export default Card;
