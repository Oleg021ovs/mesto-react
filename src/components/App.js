import {useEffect, useState } from "react";
import Header from "./Header";
import Main from "./main";
import Footer from "./footer";
import ImagePopup from "./imagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [isSelectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
    }).catch((err) => {
      console.log(err)
    })
}

function handleDeleteCard(card){
api.deleteCard(card._id)
.then(() =>{
  setCards((state) => state.filter((item) => item._id !== card._id));
}).catch((err) => {
  console.log(err)
})
}

useEffect(() => {
  api
  .getInitialCards()
  .then((res) => {
    setCards(res);
  })
  .catch((err) => {
    console.log(err);
  });

  api.getProfile()
      .then((res) => {
        setCurrentUser(res);
       
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

   // попап аватар
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
// попап профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
// попап добавление карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
 
  // открытие попап карточки
  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
    setImagePopupOpen(true);
  }
 
  //закрытие попапов на крестик
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

 function handleEditUser({name, about}) {
api.editProfile({name, about})
.then((res) =>{
  setCurrentUser(res);
  closeAllPopups();
}).catch((err) =>{
  console.log(err)
})
  }

  function handleAddPlaceSubmit({name, link}){
    api.addCard(name, link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    }).catch((err) => {
      console.log(err)
    })
  }

  function handleUpdateAvatar({ avatar }){
    api.addAvatar({avatar})
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    }).catch((err) => {
      console.log(err)
      })
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
<div className="page">
      <>
        <Header />
         
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCard}
        />
        
       <EditProfilePopup
       isOpen={isEditProfilePopupOpen}
       onClose={closeAllPopups}
       onUpdateUser={handleEditUser}
       />
        <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        />
        
        <Footer />

        <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar}
        />
       
        
        <ImagePopup
          card={isSelectedCard}
          onClose={closeAllPopups}
          isOpen={imagePopupOpen}
        />
      </>
    </div>

    </CurrentUserContext.Provider>
    
  );
}

export default App;
