import React from 'react';

class Card extends React.Component {

  constructor (props) {
    super(props)
    // this.props.card.name = this.cardTitle;
    // this.props.card.likes.length = this.cardLikesArr;
    // this.props.card.link = this.cardImageLink;
  }

  handleCardClick = () => {
    this.props.onCardClick(this.props.card);
  }

  render () {
    return (
      <li className="card" key={this.props.card._id}>
      <img onClick={this.handleCardClick} className="card__image" src={this.props.card.link} alt={`Картинка места: ${this.props.card.name}`}/>
      <div className="card__label">
        <h2 className="card__title">{this.props.card.name}</h2>
        <div className="card__like">
          <button className="card__like-btn" type="button"></button>
          <span className="card__like-counter">{this.props.card.likes.length}</span>
        </div>
      </div>
      <button className="card__delete-btn" type="button"></button>
    </li>
    )
  }
}

export default Card;
