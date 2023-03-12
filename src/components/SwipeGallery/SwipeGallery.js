import "../../assets/scss/components/SlideGallery.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import LightGallery from "lightgallery/react";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";
import ProdList from "../../data/products.json";

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
  return (
    <section id="slideGallery" className={className}>
      <div className="container">
        <Slider {...params}>
          {ProdList.map((item, index) => {
            if (item.name !== "Malta") {
              return (
                <div className="item-wrap" key={index}>
                  <div className="item">
                    <LightGallery>
                      <a href={`./images/products/${item.photo}`}>
                        <LazyLoad>
                          <img
                            src={`./images/products/${item.photo}`}
                            alt={item.name}
                          />
                        </LazyLoad>
                        <i className="icon-zoom-in"></i>
                      </a>
                    </LightGallery>
                  </div>
                </div>
              );
            }
          })}{" "}
        </Slider>
      </div>
    </section>
  );
}

export default SwipeGallery;
