
class PopupWithForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`popup popup_type_${this.props.name}`}>
        <form action="#" className={`popup__form popup__form_type_${this.props.selectorName}`} name="edit-profile" novalidate>
          <h2 className="popup__form-header">{this.props.title}</h2>
          {children}
          <button className={`popup__submit-btn popup__submit-btn_type_${this.props.selectorName} popup__submit-btn_state_inactive`} type="submit">{this.props.btnText}</button>
          <button className={`popup__close-btn popup__close-btn_type_${this.props.selectorName}`} type="reset"></button>
        </form>
      </div>
    )
  }

}

export default PopupWithForm;
