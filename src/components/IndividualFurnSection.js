import "../assets/scss/components/IndividualFurnSection.scss";
import Background from "../assets/images/individualFurnSection/bg.svg";
import image from "../assets/images/individualFurnSection/image-1.png";
import Button from "./common/Button";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
function IndividualFurnSection() {
  return (
    <section id="individual-furniture">
      <div className="background-image">
        <img src={Background} alt="Background Image" />
      </div>
      <div className="background-color"></div>
      <div className="container">
        <div className="img-wrap">
          <LazyLoad>
            <img src={image} alt="Sofa Image" />
          </LazyLoad>
        </div>
        <div className="info-wrap">
          <h2 className="title">Індивідуальні меблі</h2>
          <p className="subtitle">Повний цикл виробництва.</p>
          <p className="info">
            Якість м'яких меблів починається задовго до початку її виробництва.
          </p>

          <Link to="/Individual-Furniture">
            <Button text={"Індивідуальні меблі"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default IndividualFurnSection;
