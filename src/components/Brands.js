import "../assets/scss/components/Brands.scss";

function Brands() {
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
    <section id="brands">
      <div className="container">
        {brands.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={`./images/brands/${item.image}`} alt={item.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brands;
