import "../assets/scss/components/Brands.scss";
import "atropos/css";
import Atropos from "atropos/react";
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
        <div className="items-wrap">
          {brands.map((item, index) => {
            return (
              <Atropos activeOffset={100} shadowScale={0}>
                <div className="item" key={index}>
                  <img src={`./images/brands/${item.image}`} alt={item.name} />
                </div>
              </Atropos>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Brands;
