import LazyLoad from "react-lazy-load";
import image1 from "../../assets/images/IndividualFurniture/HowItWorkSection/bg.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
function HowItWorkSection() {
  return (
    <section id="howItWorkSection">
      <div className="container">
        <div className="info-wrap">
          <div className="img-wrap">
            <LazyLoad>
              <img src={image1} alt="Background Image" />
            </LazyLoad>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <h3 className="title">Як влаштовано роботу на виробництві</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={400}
            animateOnce={true}
          >
            <p className="info">
              Виробництво компанії та центральний офіс об'єднані в єдину
              комп'ютерну мережу, і майстер кожного цеху отримує наряди на
              роботу та відзначає їх виконання у єдиному інформаційному
              середовищі компанії.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default HowItWorkSection;
