import "../assets/scss/components/IndividualFurnSection.scss";
import Background from "../assets/images/individualFurnSection/bg.svg";
import image from "../assets/images/individualFurnSection/image-1.png";
import Button from "./common/Button";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <h2 className="title">Індивідуальні меблі</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={500}
            animateOnce={true}
          >
            <p className="subtitle">Повний цикл виробництва.</p>
            <p className="info">
              Якість м'яких меблів починається задовго до початку її
              виробництва.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={800}
            animateOnce={true}
          >
            <Link to="/Individual-Furniture">
              <Button text={"Індивідуальні меблі"} />
            </Link>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}
export default IndividualFurnSection;
