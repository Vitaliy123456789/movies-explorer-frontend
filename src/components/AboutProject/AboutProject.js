import "./AboutProject.css";

export function AboutProject() {
  return (
    <section className="aboutproject">
      <p className="aboutproject__title" id="aboutProject">
        О проекте
      </p>
      <div className="aboutproject__conteiner">
        <div className="aboutproject__conteiner-flex">
          <p className="aboutproject__conteiner-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutproject__conteiner-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutproject__conteiner-flex">
          <p className="aboutproject__conteiner-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutproject__conteiner-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__date">
        <p className="aboutproject__date-one">1 неделя</p>
        <p className="aboutproject__date-four">4 недели</p>
        <p className="aboutproject__date-back">Back-end</p>
        <p className="aboutproject__date-front">Front-end</p>
      </div>
    </section>
  );
}
