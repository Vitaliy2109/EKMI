import "../../assets/scss/components/Reasons.scss";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Reasons(props) {
  const {
    info = [
      {
        title: "Якість",
        text: "Вивчаючи якість меблів виробництва компанії «Екмі-Меблі» важливо розуміти, що за цим словом стоять не лише найкращі матеріали та комплектуючі, багаторічний досвід, відпрацьовані технологічні процеси, всі необхідні сертифікати відповідності та високопрофесійний персонал, але, перш за все, філософія компанії « Екмі-Меблі» випливає з самого свого створення.",
        image: "image-1.png",
      },
      {
        title: "Чому нам можна довіряти",
        text: "Вся продукція компанії «Екмі-Меблі» пройшла державну сертифікацію системи УкрСЕПРО, яку здійснюється органом із сертифікації продукції ЗАТ «Український Інститут Меблів». М'які меблі виробництва компанії «Екмі-Меблі» відповідають санітарно-гігієнічним вимогам чинного законодавства України — що підтверджено висновками санітарно-гігієнічної експертизи Міністерства охорони здоров'я України та вимогами ГОСТ 19917-93 – «Меблі для сидіння та лежання. Загальні технічні умови», що підтверджено державними сертифікатами відповідності.",
        image: "image-2.png",
      },

      {
        title: "Гарантія",
        text: "Компанія «Екмі-Меблі» першою з українських виробників м'яких меблів забезпечила свої меблі повноцінною гарантією і першою обґрунтовано заявила про кращу якість меблів.",
        image: "image-3.png",
      },
    ],
    className = "",
  } = props;
  return (
    <section id="reasons" className={className}>
      <div className="container">
        {info.map((el, index) => {
          return (
            <div className="info-block" key={index}>
              <h3 className="title">{el.title}</h3>
              <AnimationOnScroll
                animateIn="animate__fadeInRight"
                animateOnce={true}
              >
                <div className="text-info">
                  <p className="text">{el.text}</p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOnce={true}
              >
                <div className="img-wrap">
                  <LightGallery
                    plugins={[lgThumbnail, lgZoom]}
                    thumbWidth={100}
                    actualSize={false}
                  >
                    <a href={`./images/Reasons/${el.image}`}>
                      <LazyLoad>
                        <img
                          src={`./images/Reasons/${el.image}`}
                          alt={el.text}
                        />
                      </LazyLoad>
                    </a>
                  </LightGallery>
                </div>
              </AnimationOnScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reasons;
