import "../assets/scss/components/TechnicalInfo.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TechInfo from "../data/TechInfo.json";
function TechnicalInformation() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
      <section id="technical-info">
        <div className="container">
          <div className="info-wrap">
            <h3 className="title">Технічна інформація</h3>
            <ul className="list">
              {Object.keys(TechInfo[0]).map((key, index) => (
                <li key={index} className="list__item">
                  <AnimationOnScroll
                    animateIn={
                      window.innerWidth > 1180
                        ? "animate__fadeInLeft"
                        : "animate__fadeInUp"
                    }
                    animateOnce={true}
                    delay={500}
                  >
                    <p className="title">{key}:</p>
                  </AnimationOnScroll>

                  <AnimationOnScroll
                    animateIn={
                      window.innerWidth > 1180
                        ? "animate__fadeInRight"
                        : "animate__fadeInUp"
                    }
                    animateOnce={true}
                    delay={500}
                  >
                    <p className="info"> {TechInfo[0][key]}</p>
                  </AnimationOnScroll>
                </li>
              ))}
            </ul>
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce={true}
            delay={800}
          >
            <a href="./PDF/TechInfo.pdf" download className="btn">
              Завантажити характеристику
            </a>
          </AnimationOnScroll>
        </div>
      </section>
    </AnimationOnScroll>
  );
}

export default TechnicalInformation;
