import "../assets/scss/components/ContactsSection.scss";
import Background from "../assets/images/ContactsSection/background.png";
import ContactsList from "../data/ContactsList.json";
function ContactsSection() {
  const Shops = [
    {
      street: "С. Петропавлівська Борщагівка",
      adress: "Вул. Велика Окружна 4-В",
      adressLink:
        "https://www.google.com/maps/place/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F+%D0%9E%D0%BA%D1%80%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+4,+%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%91%D0%BE%D1%80%D1%89%D0%B0%D0%B3%D0%BE%D0%B2%D0%BA%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08130/@50.4313742,30.3607878,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cb9d485df91d:0x444ffb346e9637f2!8m2!3d50.4313742!4d30.3607878!16s%2Fg%2F11jm9jy2qv",
      phone: "+38(044)502-99-70",
      mail: "info@ekmi-mebli.com",
      corpClients: "+38(050)353-36-68",
      designers: "+38(067)956-58-07",
    },
    {
      street: "С. Петропавлівська Борщагівка",
      adress: "Вул. Петропавлівська",
      adressLink:
        "https://www.google.com/maps/place/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%91%D0%BE%D1%80%D1%89%D0%B0%D0%B3%D0%BE%D0%B2%D0%BA%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@50.4304428,30.3352476,14z/data=!3m1!4b1!4m6!3m5!1s0x40d4cb6f68fa123b:0xf05847799e2d2c50!8m2!3d50.4336783!4d30.3286144!16s%2Fg%2F121914jf",
      adressName:
        "Фірмовий салон 'Екмі-Меблі' ТЦ «4ROOM» 2 поверх, секція №338",
      phone: "067-548-32-70",
      viber: "067-956-58-07",
      mail: "ekmi.araks@gmail.com",
      corpClients: "+38 (050) 353-36-68",
      designers: "+38 (067) 956-58-07",
    },
  ];

  return (
    <section id="contactsSection">
      <div className="container">
        <div className="top-info">
          <div className="item-wrap">
            <img src={Background} alt="" className="background" />
            {Shops.map((el) => {
              if (el.adress === "Вул. Велика Окружна 4-В") {
                return (
                  <ul className="list">
                    <li className="list__item">
                      <h3 className="street">{el.street}</h3>
                    </li>
                    <li className="list__item">
                      <h3 className="title">Київська обл.</h3>
                    </li>
                    <li className="list__item">
                      <h3 className="title">
                        Адреса:{" "}
                        <a
                          href={el.adressLink}
                          target="_blank"
                          className="adress"
                        >
                          {el.adress}
                        </a>
                      </h3>
                      <ul className="info-list">
                        <li className="infolist__item">
                          Тел.:{" "}
                          <a href={`tel:${el.phone}`} className="link">
                            {el.phone}
                          </a>
                        </li>
                        <li className="infolist__item">{el.mail}</li>
                      </ul>
                    </li>

                    <li className="list__item">
                      <h3 className="title">
                        Відділ по роботі з корпоративними клієнтами,
                        постачальниками та експортом
                      </h3>
                      <ul className="info-list">
                        <a
                          href={`tel:${el.corpClients}`}
                          className="infolist__item"
                        >
                          {el.corpClients}
                        </a>
                      </ul>
                    </li>
                    <li className="list__item">
                      <h3 className="title">
                        Відділ по роботі з дизайнерами та архітекторами
                        <a
                          href={`tel:${el.designers}`}
                          className="infolist__item"
                        >
                          Тел.: {el.designers}
                        </a>
                      </h3>
                    </li>
                  </ul>
                );
              }
            })}
          </div>
          <div className="item-wrap">
            <img src={Background} alt="" className="background" />
            {Shops.map((el) => {
              if (el.adress === "Вул. Петропавлівська") {
                return (
                  <ul className="list">
                    <li className="list__item">
                      <h3 className="street">{el.street}</h3>
                    </li>
                    <li className="list__item">
                      <h3 className="title">Київська обл.</h3>
                    </li>
                    <li className="list__item">
                      <h3 className="title">
                        Адреса:{" "}
                        <a
                          href={el.adressLink}
                          target="_blank"
                          className="adress"
                        >
                          {el.adress}
                        </a>
                      </h3>
                      <h3 className="title">
                        Фірмовий Салон "Екмі-Меблі" ТЦ "4ROOM" 2 Поверх, Секція
                        №338
                      </h3>
                      <ul className="info-list">
                        <li className="infolist__item">{el.mail}</li>
                        <li className="infolist__item">
                          Тел.:{" "}
                          <a href={`tel:${el.phone}`} className="link">
                            {el.phone}
                          </a>
                        </li>
                        <li className="infolist__item">
                          Тел.:{" "}
                          <a href={`tel:${el.viber}`} className="link">
                            {el.viber} (Viber)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list__item">
                      <h3 className="title">Графік роботи:</h3>
                      <ul className="info-list">
                        Понеділок-Неділя: 10:00-20:00
                      </ul>
                    </li>
                  </ul>
                );
              }
            })}
          </div>
        </div>
        <div className="small-list">
          {ContactsList.map((el) => {
            return (
              <div className="item-wrap">
                <img src={Background} className="background" alt="" />

                <div className="text-wrap">
                  <h3 className="city">{el.city}</h3>
                  <div className="item">
                    <p className="title">Адреса: </p>
                    <a href={el.adressLink} target="_blank">
                      {el.adress}{" "}
                    </a>
                  </div>
                  <div className="item">
                    <p className="title">{el.location}</p>
                  </div>
                  <div className="item">
                    <p className="title">Пошта: </p>
                    <p className="mail">{el.mail}</p>
                  </div>
                  <div className="item">
                    <p className="title">Телефон:</p>
                    <a href={`tel:${el.phone}`}>{el.phone}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
