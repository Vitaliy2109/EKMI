import "atropos/css";
import image1 from "../../assets/images/IndividualFurniture/BrandSection/image-1.png";
import image2 from "../../assets/images/IndividualFurniture/BrandSection/image-2.png";
import Atropos from "atropos/react";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function BrandSection() {
  return (
    <section id="brandSection">
      <div className="top">
        <div className="container">
          <div className="img-wrap">
            <Atropos activeOffset={20} shadowScale={1}>
              <LazyLoad>
                <img src={image1} alt="Sofa Image" />
              </LazyLoad>
            </Atropos>
          </div>

          <div className="text-wrap">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce={true}
            >
              <h3 className="title">Напрацювання довжиною 25 років</h3>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              delay={300}
              animateOnce={true}
            >
              <p className="text top">
                Дуже важливим фактором є системність, упорядкованість та чітке
                регламентування термінів під час виробництва.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              delay={1000}
              animateOnce={true}
            >
              <p className="text center">
                У компанії «Екмі-Меблі» це досягається за рахунок застосування
                сучасних комп'ютерних програмних систем автоматизації виробничої
                діяльності, розроблених спеціально під технологічний ланцюжок,
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={1000}
              animateOnce={true}
            >
              <p className="text">
                Від прийому кожного, за своїм індивідуальним, замовлення до
                відвантаження готової продукції споживачеві.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="text-info">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce={true}
            >
              <h3 className="title">
                Чому індивідуальні меблі є ключовою перевагою компанії?
              </h3>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce={true}
              delay={500}
            >
              <p className="info">
                Багаторічний досвід фахівців цеху розробки дозволяє компанії
                «Екмі-Меблі» втілити будь-яку фантазію замовника щодо м'яких
                меблів – природно, за індивідуальним замовленням.
              </p>
            </AnimationOnScroll>
          </div>
          <div className="img-wrap">
            <Atropos activeOffset={20} shadowScale={1}>
              <LazyLoad>
                <img src={image2} alt="Sofa Image" />
              </LazyLoad>
            </Atropos>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
