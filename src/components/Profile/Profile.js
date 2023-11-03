import React from "react";
import "./Profile.css";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
export function Profile(props) {
  const [isEditBurgerMenuOpen, setIsEditBurgerMenuOpen] = React.useState(false);
  const handleEditBurgerMenuClick = React.useCallback(() => {
    setIsEditBurgerMenuOpen((prev) => !prev);
  });
  const ProfileButtonFormClassName = `profile__button-form ${
    props.isOpen ? `profile__button-form_nofing` : ""
  }`;
  const ProfileButtonClassName = `profile__button ${
    props.isOpen ? `profile__button_nofing` : ""
  }`;
  const ProfileButtonSaveClassName = `profile__button-save ${
    props.isOpen ? `profile__button-save_nofing` : ""
  }`;
  return (
    <section className="profile">
      <Header>
        <div className="header__link-conteiner">
          <Link to="/movies" className="header__link-movise">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link-movise">
            Сохранённые фильмы
          </Link>
        </div>
        <BurgerMenu
          isOpen={isEditBurgerMenuOpen}
          Menu={handleEditBurgerMenuClick}
        />
        <button className="header__link-button">Аккаунт</button>
      </Header>
      <div className="profile__conteiner">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__form-conteiner">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              placeholder="Виталий"
              type="text"
              disabled={props.isdisabled}
            ></input>
          </div>
          <div className="profile__form-conteiner">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              placeholder="pochta@yandex.ru"
              type="text"
              disabled={props.isdisabled}
            ></input>
          </div>
        </form>
        <button className={ProfileButtonSaveClassName} onClick={props.isClose}>
          Сохранить
        </button>
        <button className={ProfileButtonFormClassName} onClick={props.Menu}>
          Редактировать
        </button>
        <button className={ProfileButtonClassName}>Выйти из аккаунта</button>
      </div>
    </section>
  );
}
