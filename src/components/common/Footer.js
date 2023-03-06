import "../../assets/scss/components/common/_Footer.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/footer/logo.svg";
import instagramIcon from "../../assets/images/footer/icon-instagram.svg";
import facebookIcon from "../../assets/images/footer/icon-facebook.svg";
import Modal from "./Modal";
function Footer() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <footer id="footer">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="list">
          <li className="list__item">
            <Link to="/Catalog">Каталог</Link>
          </li>
          <li className="list__item">
            <Link to="/">Про компанію</Link>
          </li>
          <li className="list__item">
            <Link to="/Individual-Furniture">Індивідуальні меблі</Link>
          </li>
          <li className="list__item">
            <a href="#">Партнерам Дизайнерам</a>
          </li>
        </ul>
        <ul className="list">
          <li className="list__item">
            <Link to={"/Models3D"}>2D, 3D Моделі</Link>
          </li>
          <li className="list__item">
            <Link to="/Show-Room">Шоу-Рум</Link>
          </li>
          <li className="list__item">
            <a href="#">Постачальникам</a>
          </li>
          <li className="list__item">
            <Link to="/Contacts">Контакти</Link>
          </li>
        </ul>
        <div className="list">
          <div className="list__item icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram"
            >
              <img src={instagramIcon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="facebook"
            >
              <img src={facebookIcon} alt="" />
            </a>
          </div>
          <div className="list__item">
            <a href="tel:+38099-638-45-37" className="phone">
              +38 (099)-638-45-37
            </a>
          </div>
          <div className="list__item">
            <button className="btn" onClick={toggleModal}>
              Персональна консультація<span className="arrow"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 1993–2021 Інтернет-магазин «EKMI™» — меблі
      </div>
      <Modal handleClose={toggleModal} show={showModal} />
    </footer>
  );
}

export default Footer;
