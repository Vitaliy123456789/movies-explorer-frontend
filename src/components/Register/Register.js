import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export function Register() {
  return (
    <section className="register">
      <div className="register__conteiner">
        <img src={logo} alt="логотип дипломной работы" className="register__img" />
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input className="register__input"required></input>
        <span className="register__error"></span>
        <label className="register__label">E-mail</label>
        <input className="register__input"required></input>
        <span className="register__error"></span>
        <label className="register__label">Пароль</label>
        <input className="register__input"required></input>
        <span className="register__error"></span>
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__back">
        <p className="register__back-title">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__back-link">
          Войти
        </Link>
      </div>
    </section>
  );
}
