import "../assets/scss/components/OurPartners.scss";
import image from "../assets/images/OurPartners/img-1.png";
function OurPartners() {
  return (
    <section id="ourPartners">
      <div className="bg"></div>
      <div className="container">
        <h2 className="title">Наші партнери</h2>
        <div className="info-wrap">
          <div className="text-info">
            <p className="title">Копанії співпрацюють з нами по всьому світу</p>
            <p className="subtitle top">
              На сьогодні дилерська мережа фабрики «Екмі-Меблі» налічує понад 30
              салонів по всій Україні. Зараз ми зацікавлені у розширенні мережі
              та пропонуємо вигідні умови для співпраці.
            </p>
            <p className="subtitle">
              Основною перевагою фабрики є виготовлення будь-якого
              індивідуального виробу, м'яких меблів та аксесуарів з наших
              основних колекцій. Також є лінійка оригінальних інтер'єрних
              корпусних виробів.
            </p>
          </div>
          <div className="img-wrap">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
