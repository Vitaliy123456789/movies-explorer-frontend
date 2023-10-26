import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <section className="login">
      <div className="login__conteiner">
        <img src={logo} alt="логотип дипломной работы" className="login__img" />
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form">
        <label className="login__label">E-mail</label>
        <input className="login__input" required></input>
        <label className="login__label" >Пароль</label>
        <input className="login__input"required></input>
        <button className="login__button">Войти</button>
      </form>
      <div className="login__back">
        <p className="login__back-title">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__back-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}
