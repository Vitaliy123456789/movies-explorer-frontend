import "./AboutProject.css";

export function AboutProject() {
  return (
    <section className="aboutProject">
      <p className="aboutProject__title" id="aboutProject">
        О проекте
      </p>
      <div className="aboutProject__conteiner">
        <div className="aboutProject__conteiner-flex">
          <p className="aboutProject__conteiner-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutProject__conteiner-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__conteiner-flex">
          <p className="aboutProject__conteiner-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutProject__conteiner-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__date">
        <p className="aboutProject__date-one">1 неделя</p>
        <p className="aboutProject__date-four">4 недели</p>
        <p className="aboutProject__date-back">Back-end</p>
        <p className="aboutProject__date-front">Front-end</p>
      </div>
    </section>
  );
}
