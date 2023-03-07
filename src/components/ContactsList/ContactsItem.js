import Background from "../../assets/images/ContactsSection/background.png";
export default function ContactsItem(props) {
  const { city, adressLink, adress, location, email, phone } = props;
  return (
    <div className="item-wrap">
      <img src={Background} className="background" alt="" />
      <div className="text-wrap">
        <h3 className="city">{city}</h3>
        <div className="item">
          <p className="title">Адреса: </p>
          <a href={adressLink} target="_blank">
            {adress}{" "}
          </a>
        </div>
        <div className="item">
          <p className="title">{location}</p>
        </div>
        <div className="item">
          <p className="title">Пошта: </p>
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="item">
          <p className="title">Телефон:</p>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
