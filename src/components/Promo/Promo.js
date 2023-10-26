import "./Promo.css";
import { NavTab } from "../NavTab/NavTab";
export function Promo() {
  return (
    <main className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab />
    </main>
  );
}
