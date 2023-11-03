import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
export function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          src={logo}
          alt="логотип дипломной работы"
          className="header__img"
        />
      </Link>
      {props.children}
    </header>
  );
}
