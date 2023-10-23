import "./SearchForm.css";

export function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform-form">
        <div className="searchform__container">
          <input className="searchform__input" placeholder="Фильм"></input>
          <button className="searchform__button" type="submit"></button>
        </div>
        <div className="searchform__container-checkbox">
          <label className="searchform-checkbox__switch">
            <input type="checkbox" />
            <span className="searchform-checkbox__slider" />
          </label>
          <label className="searchform-checkbox__label">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}
