import "../assets/scss/components/OurHistory.scss";
import image from "../assets/images/OurHistory/img-1.png";
import LazyLoad from "react-lazy-load";
function OurHistory() {
  return (
    <section id="our-history">
      <div className="container">
        <h2 className="title">Наша історія</h2>
        <div className="info-top">
          <div className="text-block">
            <p className="title">Напрацювання довжиною в 25 років</p>
            <p className="subtitle">
              Кожен виробник заявляє, що робить все для своїх покупців, але не
              кожен виробник здатний підтвердити свої заяви багаторічною
              історією
            </p>
          </div>
          <div className="img-wrap">
            <LazyLoad>
              <img src={image} alt="Sofa-Image" />
            </LazyLoad>
          </div>
        </div>
        <div className="year">
          <p className="small">1993</p>
          <p className="big">25 років</p>
          <p className="small">2021</p>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
