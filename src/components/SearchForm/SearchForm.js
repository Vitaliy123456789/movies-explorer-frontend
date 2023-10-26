import "./SearchForm.css";

export function SearchForm() {
  return (
    <main className="searchform">
      <form className="searchform-form">
        <div className="searchform__container">
          <input className="searchform__input" placeholder="Фильм"></input>
          <button className="searchform__button" type="submit"></button>
        </div>
        <div className="searchform__container-checkbox">
          <label className="searchform__checkbox-switch">
            <input type="checkbox" />
            <span className="searchform__checkbox-slider" />
          </label>
          <label className="searchform__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </main>
  );
}
