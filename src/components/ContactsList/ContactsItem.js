import LazyLoad from "react-lazy-load";
import Background from "../../assets/images/ContactsSection/background.png";
export default function ContactsItem(props) {
  const { city, adressLink, adress, location, email, phone } = props;
  return (
    <li className="item-wrap">
      <LazyLoad>
        <img src={Background} className="background" alt="background" />
      </LazyLoad>
      <ul className="text-wrap">
        <li>
          <h3 className="city">{city}</h3>
        </li>
        <li className="item">
          <p className="title">Адреса: </p>
          <a href={adressLink} target="_blank" rel="noreferrer noopener">
            {adress}{" "}
          </a>
        </li>
        <li className="item">
          <p className="title">{location}</p>
        </li>
        <li className="item">
          <p className="title">Пошта: </p>
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className="item">
          <p className="title">Телефон:</p>
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
      </ul>
    </li>
  );
}
