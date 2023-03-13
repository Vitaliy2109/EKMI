import "../assets/scss/components/Brands.scss";
import "atropos/css";
import Atropos from "atropos/react";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Brands(props) {
  const { title = "", className } = props;
  const brands = [
    {
      name: "Vogue",
      image: "Vogue.png",
    },
    {
      name: "Apple",
      image: "Apple.jpg",
    },
    {
      name: "Zara",
      image: "Zara.jpg",
    },
    {
      name: "Samsung",
      image: "Samsung.jpg",
    },
  ];
  return (
    <section id="brands" className={className}>
      <div className="container">
        {title}
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="items-wrap">
            {brands.map((item, index) => {
              return (
                <Atropos activeOffset={100} shadowScale={0} key={index}>
                  <div className="item">
                    <LazyLoad>
                      <img
                        src={`./images/brands/${item.image}`}
                        alt={item.name}
                      />
                    </LazyLoad>
                  </div>
                </Atropos>
              );
            })}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Brands;
