import "../../assets/scss/components/NewProducts.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import ProdList from "../../data/products.json";
import NewProductItem from "./NewProductItem";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

function NewProducts() {
  const params = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1800,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 20,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1214,
        settings: {
          centerPadding: 10,
        },
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <section id="newProducts">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <h2 className="title">Новинки</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={500}
          animateOnce={true}
        >
          <Slider {...params}>
            {ProdList.map((item, index) => {
              if (item.isnew === "true") {
                return (
                  <NewProductItem
                    key={index}
                    photo={item.photo}
                    name={item.name}
                    price={item.price}
                  />
                );
              }
            })}
          </Slider>
        </AnimationOnScroll>
        <AnimationOnScroll
          delay={600}
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <div className="btn-wrap">
            <Link to="/Catalog">
              <Button text={"Перейти в каталог"} />
            </Link>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default NewProducts;
