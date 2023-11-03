import "./MoviesCardList.css";
import movie from "../../images/pic__COLOR_piccccc.png";

export function MoviesCarList(props) {
  return (
    <section className="cardlist">
      <div className="movicard">
        <button className={props.classButton}></button>
        <img className="movicard__img" src={movie} alt="обложка фильма"></img>
        <div className="movicard__content">
          <p className="movicard__title">33 слова о дизайне</p>
          <p className="movicard__timing">1ч 17м</p>
        </div>
      </div>
      <div className="movicard">
        <button className={props.classButton}></button>
        <img className="movicard__img" src={movie} alt="обложка фильма"></img>
        <div className="movicard__content">
          <p className="movicard__title">33 слова о дизайне</p>
          <p className="movicard__timing">1ч 17м</p>
        </div>
      </div>
    </section>
  );
}
