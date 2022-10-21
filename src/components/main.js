import React from 'react';
import profileAvatar from '../images/image.jpg';
import profileAddCardButton from '../images/button-img.svg';

function Main({onEditAvatar,onEditProfile,onAddPlace}) {
    return(
<main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            className="profile__avatar-img"
            src={profileAvatar}/>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            className="profile__edit-button popup-open"
            type="button"
            onClick={onEditProfile} ></button>
          <p className="profile__text"></p>
        </div>
        <button className="profile__add-button" aria-label="Добавить" type="button" onClick={onAddPlace}>
          <img
            src={profileAddCardButton}/>
           
        </button>
      </section>

      <section className="elements">
        <ul className="elements__element"></ul>
      </section>
    </main>
    )
}

export default Main;