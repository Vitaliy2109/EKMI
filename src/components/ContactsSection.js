import "../assets/scss/components/ContactsSection.scss";
import Background from "../assets/images/ContactsSection/background.png";
import ContactsList from "../data/ContactsList.json";
function ContactsSection() {
  return (
    <section id="contactsSection">
      <div className="container">
        <div className="top-info">
          {ContactsList.mainAdress.map((el) => {
            return (
              <div className="item-wrap">
                <img src={Background} alt="" className="background" />
                <ul className="list">
                  <li className="list__item">
                    <h3 className="street">{el.street}</h3>
                  </li>
                  <li className="list__item">
                    <h3 className="title">Київська обл.</h3>
                  </li>
                  {el.departments.map((depart, index) => {
                    return (
                      <li className="list__item">
                        <h3 className="title">
                          {index === 0 ? (
                            <div>
                              Адреса:
                              <a
                                href={el.adressLink}
                                target="_blank"
                                className="adress"
                              >
                                {" "}
                                {depart.title}
                              </a>
                            </div>
                          ) : (
                            depart.title
                          )}
                        </h3>
                        <ul className="info-list">
                          {depart.phone ? (
                            <li className="infolist__item">
                              Тел.:
                              <a href={`tel:${depart.phone}`}>
                                {" "}
                                {depart.phone}
                              </a>
                            </li>
                          ) : (
                            ""
                          )}
                          {depart.viber ? (
                            <li className="infolist__item">
                              Тел.:
                              <a href={`tel:${depart.viber}`}>
                                {" "}
                                {depart.viber}{" "}
                              </a>
                              (Viber)
                            </li>
                          ) : (
                            ""
                          )}
                          {depart.email ? (
                            <li className="infolist__item">
                              Email:
                              <a href={`mailto:${depart.email}`}>
                                {" "}
                                {depart.email}
                              </a>
                            </li>
                          ) : (
                            ""
                          )}{" "}
                        </ul>
                        {depart.workdays ? <li>{depart.workdays}:</li> : ""}{" "}
                        {depart.worktime ? <li>{depart.worktime}</li> : ""}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="small-list">
          {ContactsList.additional.map((el) => {
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
                    <a className="mail" href={`mailto:${el.email}`}>
                      {el.email}
                    </a>
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
