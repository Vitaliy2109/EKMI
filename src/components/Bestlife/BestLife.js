import "../../assets/scss/components/BestLife.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import React from "react";
import Button from "../common/Button";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
SwiperCore.use([Autoplay]);
function BestLife() {
  return (
    <section id="bestLife">
      <div className="background-color"></div>
      <div className="container">
        <div className="left-info">
          <h1 className="title">Найкраще життя, створене для вас!</h1>
          <Link to="/Catalog">
            <Button text={"Перейти в каталог"}></Button>
          </Link>
        </div>
        <div className="right-info">
          <p className="since">Засновано у 1993 році</p>

          <Swiper
            className="swiper"
            slidesPerView={1}
            modules={[EffectCube, Pagination]}
            effect={"cube"}
            loop={true}
            autoplay={{ delay: 2500 }}
            speed={1000}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 10,
              shadowScale: 0.9,
            }}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <LazyLoad>
                <img src="./images/bestLife/slide-1.png" alt="Sofa Image" />
              </LazyLoad>
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoad>
                <img src="./images/bestLife/slide-2.png" alt="Sofa Image" />
              </LazyLoad>
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoad>
                <img src="./images/bestLife/slide-3.png" alt="Sofa Image" />
              </LazyLoad>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default BestLife;
