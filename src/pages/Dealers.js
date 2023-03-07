import Reasons from "../components/IndividualFurnPage/Reasons";
import SwipeGallery from "../components/SwipeGallery/SwipeGallery";
import IndividualFurnSection from "../components/IndividualFurnSection";
import Brands from "../components/Brands";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import ContactsList from "../data/ContactsList.json";
import ContactsItem from "../components/ContactsList/ContactsItem";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "../assets/scss/components/Deallers.scss";

export function Dealers() {
  const info = [
    {
      title: "Хто купує наші меблі",
      text: "Фабрика «Екмі-Меблі» — один із провідних виробників меблів в Україні – відкрита для пошуку партнерів та пропонує взаємовигідну співпрацю. На сьогодні дилерська мережа налічує понад 30 салонів по всій Україні.",
      image: "image-4.jpg",
    },
    {
      title: "Де створюють наші меблі",
      text: "Дилер – це наш партнер та посередник між фабрикою та кінцевим споживачем. У рамках такого партнерства ми, з боку фабрики, надаємо будь-яку допомогу в роботі: надаємо знижку на виставкові зразки під час відкриття салону, забезпечуємо всіма матеріалами, з якими працює фабрика. Надаємо повністю робоче програмне забезпечення для розрахунку вартості меблів та промальовування моделі у 3D.",
      image: "image-4.jpg",
    },

    {
      title: "Етапи співробітництва",
      text: "У нас велика складська програма, більшість матеріалів та фурнітури постійно є на складі. У такому разі замовлення виготовляються за 13-15 днів.",
      image: "image-4.jpg",
    },
  ];
  return (
    <main>
      <Reasons info={info} className="deallers" />
      <div className="container">
        <h2 className="title deallers">Реалізовані проекти</h2>
      </div>
      <SwipeGallery />
      <IndividualFurnSection />
      <div className="container">
        <h2 className="title deallers">З нами працюють</h2>
      </div>
      <Brands />
      <FeedbackSection
        titleText="Зв'яжіться з нами"
        formClass="deallers"
        className="deallers"
      />
      <section id="ShowRoomsSmallList">
        <div className="container">
          <h2 className="title">Наші шоу-руми</h2>
          <div className="small-list">
            {ContactsList.additional.map((el, index) => {
              if (el.city === "Вінниця") {
                return (
                  <ContactsItem
                    key={index}
                    city={el.city}
                    adressLink={el.adressLink}
                    adress={el.adress}
                    location={el.location}
                    email={el.email}
                    phone={el.phone}
                  />
                );
              }
            })}
          </div>
          <Link to="/Contacts">
            <Button text="Дивитися всі" />
          </Link>
        </div>
      </section>
    </main>
  );
}
