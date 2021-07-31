
class PopupWithImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`popup popup_type_view-card ${this.props.isOpened ? "popup_opened" : ""}`}>
        <figure className="popup__image-container">
          <img className="popup__card-image" src="#" alt="#"/>
          <figcaption className="popup__card-image-title"></figcaption>
          <button onClick={this.props.onClose} className="popup__close-btn popup__close-btn_type_view-card" type="button"></button>
        </figure>
      </div>
    );
  }

}

export default PopupWithImage;
