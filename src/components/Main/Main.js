import "./Main.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <main className="main">
      <Header>
        <div className="header__links">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button">Войти</Link>
        </div>
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}
