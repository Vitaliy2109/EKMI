import "../../assets/scss/components/common/_Header.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/header/logo.png";
import phoneIcon from "../../assets/images/header/phone.svg";
import Hamburger from "hamburgers/dist/hamburgers.min.css";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const changeClass = () => {
    setIsActive(!isActive);
  };
  const clickHandler = (e) => {
    if (pathname === e.target.getAttribute("href")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <header id="header">
      <div className="container">
        <nav className="navigation">
          <ul className="list">
            <li className="list__item">
              <Link to="/Catalog" onClick={clickHandler}>
                Каталог
              </Link>
            </li>
            <li className="list__item">
              <Link to="/Individual-Furniture" href="#" onClick={clickHandler}>
                Індивідуальні Меблі
              </Link>
            </li>
            <li className="list__item">
              <Link to="/Contacts" onClick={clickHandler}>
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logo-wrap">
          <Link to={"/"} onClick={clickHandler}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="about">
          <Link to="/Show-Room" onClick={clickHandler}>
            Шоу рум
          </Link>
          <Link to="/Models3D" onClick={clickHandler}>
            2D, 3D Моделі
          </Link>
          <a href="tel:+38099-638-45-37" className="tel">
            +38 (099)-638-45-37
          </a>
        </div>
        <div className="mobile-wrap">
          <div className="phone-wrap">
            <a href="tel:+38099-638-45-37" className="tel">
              <img src={phoneIcon} alt="" />
            </a>
          </div>
          <div className="hamburger-menu">
            <button
              className={`hamburger hamburger--collapse ${
                isActive ? "is-active" : ""
              }`}
              type="button"
              onClick={changeClass}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <nav className={`mobile-navigation ${isActive ? "is-active" : ""}`}>
              <ul className="list">
                <li className="list__item">
                  <Link to="/Catalog" onClick={clickHandler}>
                    Каталог
                  </Link>
                </li>
                <li className="list__item">
                  <Link
                    to="/Individual-Furniture"
                    href="#"
                    onClick={clickHandler}
                  >
                    Індивідуальні Меблі
                  </Link>
                </li>
                <li className="list__item">
                  <Link to="/Models3D" onClick={clickHandler}>
                    2D, 3D Моделі
                  </Link>
                </li>
                <li className="list__item">
                  <Link to="/Show-Room" onClick={clickHandler}>
                    Шоу рум
                  </Link>
                </li>
                <li className="list__item">
                  <Link to="/Partners" onClick={clickHandler}>
                    Сторінка партнерів дизайнерів
                  </Link>
                </li>
                <li className="list__item">
                  <Link to="/Dealers" onClick={clickHandler}>
                    Постачальникам
                  </Link>
                </li>
                <li className="list__item">
                  <Link to="/Contacts" onClick={clickHandler}>
                    Контакти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
