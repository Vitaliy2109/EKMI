import "../../assets/scss/components/NewProducts.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import ProdList from "../../data/products.json";
import NewProductItem from "./NewProductItem";
import Button from "../common/Button";

import { Link } from "react-router-dom";

function NewProducts() {
  const params = {
    dots: false,
    infinite: true,
    speed: 500,
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
          autoplay: false,
        },
      },
    ],
  };
  return (
    <section id="newProducts">
      <div className="container">
        <h2 className="title">Новинки</h2>
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
        <div className="btn-wrap">
          <Link to="/Catalog">
            <Button text={"Перейти в каталог"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
