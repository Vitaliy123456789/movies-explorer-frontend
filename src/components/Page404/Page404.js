import "./Page404.css";
import { useNavigate } from "react-router-dom";

export function PageNot() {
  const navigate = useNavigate();
  function Back() {
    navigate(-1);
  }
  return (
    <div className="page-not">
      <h1 className="page-not__title">404</h1>
      <p className="page-not__subtitle">Страница не найдена</p>
      <button onClick={Back} className="page-not__button">
        Назад
      </button>
    </div>
  );
}
