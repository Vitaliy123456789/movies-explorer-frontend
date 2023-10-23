import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";
export function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__conteiner">
        <Link to="/#aboutProject" className="navtab__link">
          О проекте
        </Link>
      </li>
      <li className="navtab__conteiner">
        <Link to="/#techs" className="navtab__link">
          Технологии
        </Link>
      </li>
      <li className="navtab__conteiner">
        <Link to="/#AboutMe" className="navtab__link">
          Студент
        </Link>
      </li>
    </ul>
  );
}
