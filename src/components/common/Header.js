import "../../assets/scss/components/common/_Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo.png";
function Header() {
  return (
    <header id="header">
      <div className="container">
        <nav className="navigation">
          <ul className="list">
            <li className="list__item">
              <Link to="/Catalog">Каталог</Link>
            </li>
            <li className="list__item">
              <Link to="/Individual-Furniture" href="#">
                Індивідуальні Меблі
              </Link>
            </li>
            <li className="list__item">
              <Link to="/Contacts">Контакти</Link>
            </li>
          </ul>
        </nav>
        <div className="logo-wrap">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="about">
          <Link to="/Show-Room">Шоу рум</Link>
          <Link to="/Models3D">2D, 3D Моделі</Link>
          <a href="tel:+38099-638-45-37" className="tel">
            +38 (099)-638-45-37
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
