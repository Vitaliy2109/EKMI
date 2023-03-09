import image1 from "../../assets/images/IndividualFurniture/BrandSection/image-1.png";
import image2 from "../../assets/images/IndividualFurniture/BrandSection/image-2.png";
import "atropos/css";
import Atropos from "atropos/react";
function BrandSection() {
  return (
    <section id="brandSection">
      <div className="top">
        <div className="container">
          <div className="img-wrap">
            <Atropos activeOffset={20} shadowScale={1}>
              <img src={image1} alt="" />
            </Atropos>
          </div>

          <div className="text-wrap">
            <h3 className="title">Напрацювання довжиною 25 років</h3>
            <p className="text top">
              Дуже важливим фактором є системність, упорядкованість та чітке
              регламентування термінів під час виробництва.
            </p>
            <p className="text center">
              У компанії «Екмі-Меблі» це досягається за рахунок застосування
              сучасних комп'ютерних програмних систем автоматизації виробничої
              діяльності, розроблених спеціально під технологічний ланцюжок,
            </p>
            <p className="text">
              Від прийому кожного, за своїм індивідуальним, замовлення до
              відвантаження готової продукції споживачеві.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="text-info">
            <h3 className="title">
              Чому індивідуальні меблі є ключовою перевагою компанії?
            </h3>
            <p className="info">
              Багаторічний досвід фахівців цеху розробки дозволяє компанії
              «Екмі-Меблі» втілити будь-яку фантазію замовника щодо м'яких
              меблів – природно, за індивідуальним замовленням.
            </p>
          </div>
          <div className="img-wrap">
            <Atropos activeOffset={20} shadowScale={1}>
              <img src={image2} alt="" />
            </Atropos>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
