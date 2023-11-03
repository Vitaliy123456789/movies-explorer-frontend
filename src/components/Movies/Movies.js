import React from "react";
import "./Movies.css";
import { SearchForm } from "../SearchForm//SearchForm";
import { MoviesCarList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
export function Movies() {
  const [isEditBurgerMenuOpen, setIsEditBurgerMenuOpen] = React.useState(false);
  const handleEditBurgerMenuClick = React.useCallback(() => {
    setIsEditBurgerMenuOpen((prev) => !prev);
  });

  return (
    <section className="movies">
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
      <SearchForm />
      <MoviesCarList classButton="movicard__button" />
      <section className="button-more">
        <button className="button-more__button">Ещё</button>
      </section>
      <Footer />
    </section>
  );
}
