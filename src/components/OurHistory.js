import "../assets/scss/components/OurHistory.scss";
import image from "../assets/images/OurHistory/img-1.png";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function OurHistory() {
  return (
    <section id="our-history">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <h2 className="title">Наша історія</h2>
        </AnimationOnScroll>
        <div className="info-top">
          <div className="text-block">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={1}
              animateOnce={true}
            >
              <p className="title">Напрацювання довжиною в 25 років</p>
              <p className="subtitle">
                Кожен виробник заявляє, що робить все для своїх покупців, але не
                кожен виробник здатний підтвердити свої заяви багаторічною
                історією
              </p>
            </AnimationOnScroll>
          </div>

          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            delay={0.5}
            animateOnce={true}
          >
            <div className="img-wrap">
              <LazyLoad>
                <img src={image} alt="Sofa-Image" />
              </LazyLoad>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="year">
          <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
            className="small"
          >
            <p className="small">1993</p>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOnce={true}
            className="big"
          >
            <p className="big">25 років</p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            animateOnce={true}
            className="small"
          >
            <p className="small">2021</p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
