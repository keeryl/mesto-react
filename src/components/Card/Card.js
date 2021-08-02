import React from 'react';

function Card (props) {

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

    return (
      <li className="card">
      <img onClick={handleCardClick} className="card__image" src={props.card.link} alt={`Картинка места: ${props.card.name}`}/>
      <div className="card__label">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className="card__like-btn" type="button"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="card__delete-btn" type="button"></button>
    </li>
    )
}

export default Card;
