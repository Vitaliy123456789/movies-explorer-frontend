import "./Portfolio.css";
import arrow from "../../images/text__COLOR_font-main.svg";

export function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://github.com/Vitaliy123456789/how-to-learn"
            target="blank"
          >
            Статичный сайт
            <img className="portfolio__link-logo" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://github.com/Vitaliy123456789/russian-travel"
            target="blank"
          >
            Адаптивный сайт
            <img className="portfolio__link-logo" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://github.com/Vitaliy123456789/react-mesto-api-full-gha"
            target="blank"
          >
            Одностраничное приложение
            <img className="portfolio__link-logo" src={arrow} alt="стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}
