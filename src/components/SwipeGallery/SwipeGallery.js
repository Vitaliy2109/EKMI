import "../../assets/scss/components/SlideGallery.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";
import ProdList from "../../data/products.json";
import { useState } from "react";

function SwipeGallery(props) {
  const { className } = props;
  const params = {
    rows: 2,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,

    animated: false,
    showClass: false,
    hideClass: false,

    dragToClose: false,

    Images: {
      zoom: true,
    },

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Thumbs: {
      type: "none",
    },
  });

  let evenItems = [...ProdList];
  evenItems.splice(evenItems.length - 1);

  return (
    <section
      id="slideGallery"
      className={`${className} animate__animated animate__fadeInUp `}
    >
      <div className="container">
        <Slider {...params}>
          {(ProdList.length % 2 === 0 ? ProdList : evenItems).map(
            (item, index) => {
              return (
                <div className="item-wrap" key={index}>
                  <div className="item">
                    <div
                      data-fancybox="gallery"
                      href={`./images/products/${item.photo}`}
                      className="img-wrap"
                    >
                      <LazyLoad>
                        <img
                          src={`./images/products/${item.photo}`}
                          alt={item.name}
                        />
                      </LazyLoad>
                      <i className="icon-zoom-in"></i>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </section>
  );
}

export default SwipeGallery;
