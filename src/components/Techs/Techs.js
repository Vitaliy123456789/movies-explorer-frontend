import "./Techs.css";

export function Techs() {
  return (
    <section className="techs">
      <p className="techs__title" id="techs">
        Технологии
      </p>
      <div className="techs__container">
        <p className="techs__container-title">7 технологий</p>
        <p className="techs__container-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
