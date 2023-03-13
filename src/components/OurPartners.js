import "../assets/scss/components/OurPartners.scss";
import image from "../assets/images/OurPartners/img-1.png";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function OurPartners() {
  return (
    <section id="ourPartners">
      <div className="bg"></div>
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <h2 className="title">Наші партнери</h2>
        </AnimationOnScroll>
        <div className="info-wrap">
          <div className="text-info">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce={true}
              delay={100}
            >
              <p className="title">
                Копанії співпрацюють з нами по всьому світу
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce={true}
              delay={500}
            >
              <p className="subtitle top">
                На сьогодні дилерська мережа фабрики «Екмі-Меблі» налічує понад
                30 салонів по всій Україні. Зараз ми зацікавлені у розширенні
                мережі та пропонуємо вигідні умови для співпраці.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce={true}
              delay={900}
            >
              <p className="subtitle">
                Основною перевагою фабрики є виготовлення будь-якого
                індивідуального виробу, м'яких меблів та аксесуарів з наших
                основних колекцій. Також є лінійка оригінальних інтер'єрних
                корпусних виробів.
              </p>
            </AnimationOnScroll>
          </div>
          <div className="img-wrap">
            <LazyLoad>
              <img src={image} alt="Sofa Image" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
