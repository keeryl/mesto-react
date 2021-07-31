
import '../index.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer/>
    </div>
  );
}

function handleEditAvatarClick () {
  isEditAvatarPopupOpen = true;
}

function handleEditProfileClick () {
  isEditProfilePopupOpen = true;
}

function handleAddPlaceClick () {
  isAddPlacePopupOpen = true;
}

const isEditProfilePopupOpen = false;
const isAddPlacePopupOpen = false;
const isEditAvatarPopupOpen = false;


export default App;
