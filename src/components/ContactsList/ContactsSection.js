import "../../assets/scss/components/ContactsSection.scss";
import Background from "../../assets/images/ContactsSection/background.png";
import ContactsList from "../../data/ContactsList.json";
import ContactsItem from "./ContactsItem";
import LazyLoad from "react-lazy-load";

function ContactsSection(props) {
  const { className } = props;
  return (
    <section id="contactsSection" className={className}>
      <div className="container">
        <div className="top-info">
          {ContactsList.mainAdress.map((el, index) => {
            return (
              <div className="item-wrap" key={index}>
                <LazyLoad>
                  <img
                    src={Background}
                    alt="Background"
                    className="background"
                  />
                </LazyLoad>
                <ul className="list">
                  <li className="list__item">
                    <h3 className="street">{el.street}</h3>
                  </li>
                  <li className="list__item">
                    <h3 className="title">Київська обл.</h3>
                  </li>
                  {el.departments.map((depart, index) => {
                    return (
                      <li className="list__item" key={index}>
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
                        <div className="info-list">
                          {depart.phone ? (
                            <div className="infolist__item">
                              Тел.:
                              <a href={`tel:${depart.phone}`}>
                                {" "}
                                {depart.phone}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                          {depart.viber ? (
                            <div className="infolist__item">
                              Тел.:
                              <a href={`tel:${depart.viber}`}>
                                {" "}
                                {depart.viber}{" "}
                              </a>
                              (Viber)
                            </div>
                          ) : (
                            ""
                          )}
                          {depart.email ? (
                            <div className="infolist__item">
                              Email:
                              <a href={`mailto:${depart.email}`}>
                                {" "}
                                {depart.email}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}{" "}
                        </div>
                        {depart.workdays ? <div>{depart.workdays}:</div> : ""}{" "}
                        {depart.worktime ? <div>{depart.worktime}</div> : ""}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <ul className="small-list">
          {ContactsList.additional.map((el, index) => {
            return (
              <ContactsItem
                city={el.city}
                adressLink={el.adressLink}
                adress={el.adress}
                location={el.location}
                email={el.email}
                phone={el.phone}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ContactsSection;
