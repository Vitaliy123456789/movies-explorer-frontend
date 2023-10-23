import './AboutMe.css'
import photo from '../../images/pic__COLOR_pic.png'

export function AboutMe() {
  return(
    <section className="AboutMe">
    <p className="AboutMe__title" id='AboutMe'>Студент</p>
    <div className="AboutMe__container">
      <img className="AboutMe__img" src={photo} alt="фото" ></img>
      <div className="AboutMe__text">
        <h3 className="AboutMe__name">Виталий</h3>
        <p className="AboutMe__subtext">Фронтенд-разработчик, 30 лет</p>
        <p className="AboutMe__maintext">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="AboutMe__link" href="https://github.com/Vitaliy123456789?tab=repositories" target='blank'>Github</a>
      </div>
    </div>
  </section>
  )
}