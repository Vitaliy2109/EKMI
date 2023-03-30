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
export default function BestLife() {
  const images = [
    {
      img: "slide-1.png",
    },
    {
      img: "slide-2.png",
    },
    {
      img: "slide-3.png",
    },
  ];
  return (
    <section id="bestLife">
      <div className="background-color"></div>
      <div className="container">
        <div className="left-info">
          <h1 className="title animate__animated animate__fadeInDown">
            Найкраще життя, створене для вас!
          </h1>
          <Link to="/Catalog">
            <Button
              text={"Перейти в каталог"}
              className="animate__animated animate__fadeInUp animate__delay-1s"
            ></Button>
          </Link>
        </div>

        <div className="right-info">
          <p className="since animate__animated animate__fadeInDown animate__delay-1s">
            Засновано у 1993 році
          </p>
          <Swiper
            className={`swiper ${
              window.innerWidth > 1180
                ? "animate__animated animate__fadeInRight animate__delay-1s"
                : "animate__animated animate__fadeInUp"
            }`}
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
            {images.map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <LazyLoad>
                    <img src={`./images/bestLife/${el.img}`} alt="Sofa" />
                  </LazyLoad>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
