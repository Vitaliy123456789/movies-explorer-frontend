import React from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

export function BurgerMenu(props) {
  const BurgerMenuButtonClassName = `burgermenu__span ${
    props.isOpen ? `burgermenu__span_opened` : ""
  }`;
  return (
    <section className="burgermenu">
      <div className="burgermenu__conteiner" onClick={props.Menu}>
        <span className={BurgerMenuButtonClassName}>
          <span className="burgermenu__span-middle"></span>
        </span>
      </div>
      <nav
        className={`burgermenu__menu ${
          props.isOpen ? `burgermenu__menu_opened` : ""
        }`}
      >
        <ul className="burgermenu__list">
          <li className="burgermenu__item">
            <Link to="/" className="burgermenu__link">
              Главная
            </Link>
          </li>
          <li className="burgermenu__item">
            <Link to="/movies" className="burgermenu__link">
              Фильмы
            </Link>
          </li>
          <li className="burgermenu__item">
            <Link to="/saved-movies" className="burgermenu__link">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <button className="burgermenu__button">Аккаунт</button>
      </nav>
    </section>
  );
}
