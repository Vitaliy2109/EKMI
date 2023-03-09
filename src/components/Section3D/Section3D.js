import Sofa from "./Sofa";
import "../../assets/scss/components/Section3D.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import icon360 from "../../assets/images/section3D/360-icon.jpg";
import { useState } from "react";
function Section3D() {
  const [classBig, setClassBig] = useState(false);
  const changeClass = () => {
    setClassBig(!classBig);
  };
  return (
    <section id="section3D" className={`${classBig ? "big" : ""}`}>
      <div className="container">
        <div className="left-info">
          <div className="sofa-wrap">
            <Sofa />
            <button
              type="button"
              className="changeClassbtn"
              onClick={changeClass}
            ></button>
            <div className="icon-wrap">
              <img src={icon360} alt="" />
            </div>
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
