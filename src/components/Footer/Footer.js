import "./Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__continer-title">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__continer-down">
        <p className="footer__down-title">© 2020 </p>
        <div className="footer__down-conteiner">
          <a
            href="https://practicum.yandex.ru/"
            target="blank"
            className="footer__down-title"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Vitaliy123456789?tab=repositories"
            target="blank"
            className="footer__down-title"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
