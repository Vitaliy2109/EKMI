import "../../assets/scss/components/common/_Footer.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/footer/logo.svg";
import instagramIcon from "../../assets/images/footer/icon-instagram.svg";
import facebookIcon from "../../assets/images/footer/icon-facebook.svg";
import Modal from "./Modal";
import ScrollToTop from "../common/ScrollToTop";
import LazyLoad from "react-lazy-load";
export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const clickHandler = (e) => {
    if (`#${pathname}` === e.target.getAttribute("href")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const links = [
    {
      linkto: "/Catalog",
      text: "Каталог",
    },
    {
      linkto: "/Models3D",
      text: "2D, 3D Моделі",
    },
    {
      linkto: "/",
      text: "Про компанію",
    },
    {
      linkto: "/Show-Room",
      text: "Шоу-Рум",
    },
    {
      linkto: "/Individual-Furniture",
      text: "Індивідуальні меблі",
    },
    {
      linkto: "/Dealers",
      text: "Постачальникам",
    },
    {
      linkto: "/Partners",
      text: "Партнерам Дизайнерам",
    },
    {
      linkto: "/Contacts",
      text: "Контакти",
    },
  ];

  return (
    <footer id="footer">
      <div className="container">
        <div className="logo">
          <Link to={"/"} onClick={clickHandler}>
            <LazyLoad>
              <img src={logo} alt="Logo" />
            </LazyLoad>
          </Link>
        </div>
        <div className="text-info">
          <ul className="list">
            {links.map((el, index) => {
              return (
                <li className="list__item" key={index}>
                  <Link to={el.linkto} onClick={clickHandler}>
                    {el.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list socials-list">
          <div className="socials">
            <div className="list__item icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="instagram"
              >
                <LazyLoad>
                  <img src={instagramIcon} alt="Instagram Icon" />
                </LazyLoad>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="facebook"
              >
                <LazyLoad>
                  <img src={facebookIcon} alt="Facebook Icon" />
                </LazyLoad>
              </a>
            </div>
            <div className="list__item">
              <a href="tel:+38099-638-45-37" className="phone">
                +38 (099)-638-45-37
              </a>
            </div>
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
