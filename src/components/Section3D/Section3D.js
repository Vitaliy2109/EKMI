import Sofa from "./Sofa";
import "../../assets/scss/components/Section3D.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import icon360 from "../../assets/images/section3D/360-icon.svg";

function Section3D() {
  return (
    <section id="section3D">
      <div className="container">
        <div className="left-info">
          <Sofa />
          <div className="icon-wrap">
            <img src={icon360} alt="" />
          </div>
        </div>

        <div className="text-info">
          <h2 className="item-name title">Barcelona</h2>
          <p className="collection">Колекція: Modern</p>
          <p className="info">
            Модель «Барселона» – головною перевагою цього дивана є мобільність.
            Модель складається з кількох абсолютно незалежних один від одного
            частин. Це свого роду конструктор, який кожен може скласти по-своєму
            та створити унікальний предмет інтер'єру.
          </p>
          <p className="price">Від 65 000 uah</p>
          <Link to="/Catalog">
            <Button text="Перейти в каталог" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section3D;
