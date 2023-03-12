import "../../assets/scss/components/LatestPublications.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProdList from "../../data/products.json";
import React from "react";
import LatestPublicationsItem from "./LatestPublicationsItem";
function LatestPublications() {
  const params = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="latest-publications">
      <div className="container">
        <h2 className="title">Останні публікації</h2>
        <Slider {...params}>
          {ProdList.map((item, index) => {
            if (item.islatest === "true") {
              return (
                <LatestPublicationsItem
                  key={index}
                  photo={item.photo}
                  name={item.name}
                />
              );
            }
          })}
        </Slider>
      </div>
    </section>
  );
}

export default LatestPublications;
