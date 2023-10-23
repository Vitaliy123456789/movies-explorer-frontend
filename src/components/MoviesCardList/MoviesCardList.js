import "./MoviesCardList.css";
import movie from "../../images/pic__COLOR_piccccc.png";

export function MoviesCarList(props) {
  return (
    <section className="cardlist">
      <div className="movicard_conteiner">
        <button className={props.classButton}></button>
        <img className="movicard__img" src={movie}></img>
        <div className="movicard_content">
          <p className="movicard__title">33 слова о дизайне</p>
          <p className="movicard__timing">1ч 17м</p>
        </div>
      </div>
      <div className="movicard_conteiner">
        <button className={props.classButton}></button>
        <img className="movicard__img" src={movie}></img>
        <div className="movicard_content">
          <p className="movicard__title">33 слова о дизайне</p>
          <p className="movicard__timing">1ч 17м</p>
        </div>
      </div>
    </section>
  );
}
