import React from "react";
import "./SavedMovies.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCarList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
export function SavedMovies() {
  const [isEditBurgerMenuOpen, setIsEditBurgerMenuOpen] = React.useState(false);
  const handleEditBurgerMenuClick = React.useCallback(() => {
    setIsEditBurgerMenuOpen(true);
  });
  const closeEditBurgerMenuClick = React.useCallback(() => {
    setIsEditBurgerMenuOpen(false);
  });
  return (
    <section className="savedmovise">
      <Header>
        {" "}
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
          isClose={closeEditBurgerMenuClick}
          Menu={handleEditBurgerMenuClick}
        />
        <button className="header__link-button">Аккаунт</button>
      </Header>
      <SearchForm />
      <MoviesCarList classButton="movicard__button movicard__button_delite" />
      <div className="savedmovise__nothing"></div>
      <Footer />
    </section>
  );
}
