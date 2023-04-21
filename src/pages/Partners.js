import "../assets/scss/components/Partners.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectFade, Navigation } from "swiper";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import ProdList from "../data/products.json";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import Brands from "../components/Brands";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import LazyLoad from "react-lazy-load";
export default function Partners() {
  const infoArr = [
    {
      title: "Провідний виробник",
      subtitle: "Реалізуємо ваш потенціал.",
      info: "Ми успішно реалізували велику кількість проектів за індивідуальними ескізами наших клієнтів, оскільки це є нашою основною перевагою на ринку.",
      image: "image-1.png",
    },
    {
      title: "Вигідні умови",
      subtitle: "Умови співпраці",
      info: "Ми пропонуємо прості та зрозумілі умови співпраці. Процес влаштований так: зв'язуємось з Вами, обговорюємо наші найближчі завдання, дивимося ваші напрацювання та знаходимо спільне рішення для перспективної співпраці.",
      image: "image-2.png",
    },
    {
      title: "Оперативність",
      subtitle: "",
      info: "У нас велика складська програма, більшість матеріалів та фурнітури постійно є на складі. У такому разі замовлення виготовляються за 13-15 днів.",
      image: "image-3.png",
    },
  ];
  const facts = [
    {
      title: "Оплата завжди без затримок",
      subtitle: "Отримуйте оплату в обумовлений термін",
      image: "image-1.png",
    },
    {
      title: "Якість найвищих світових стандартів",
      subtitle:
        "Пропонуєте найкращу європейську якість та підтримуєте репутацію професіонала",
      image: "image-2.png",
    },
    {
      title: "Відповідність ескізам",
      subtitle:
        "Отримуєте точну відповідність готового виробу візуалізації та вашим ескізам",
      image: "image-3.png",
    },
    {
      title: "Оперативність реалізації",
      subtitle:
        "Ми зацікавлені надати продукт клієнту якомога якісніше та швидше",
      image: "image-4.png",
    },
  ];
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
  });
  return (
    <main>
      <section id="mainProd">
        <div className="container">
          {infoArr.map((el, index) => {
            return (
              <div className="info-wrap" key={index}>
                <div className="text-info animate__animated animate__fadeInLeft">
                  <h3 className="title animate__animated animate__fadeInDown animate__delay-1s">
                    {el.title}
                  </h3>
                  {el.subtitle ? (
                    <p className="subtitle animate__animated animate__fadeInDown animate__delay-1s">
                      {el.subtitle}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="info animate__animated animate__fadeInDown animate__delay-1s">
                    {el.info}
                  </p>
                </div>

                <div className="img-wrap text-info animate__animated animate__fadeInRight">
                  <LazyLoad>
                    <img src={`./images/MainProd/${el.image}`} alt={el.info} />
                  </LazyLoad>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="whyWithUs">
        <div className="container">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <h2 className="title">Чому з нами комфортно працювати</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={300}
            animateOnce={true}
          >
            <Swiper
              loop={true}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: false,
              }}
              modules={[EffectFade, Pagination, Navigation]}
              autoplay={true}
            >
              {facts.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item-wrap">
                      <div className="item">
                        <div className="img-wrap">
                          <LazyLoad>
                            <img
                              src={`./images/Facts/${item.image}`}
                              alt={item.title}
                            />
                          </LazyLoad>
                        </div>
                        <div className="text-info">
                          <AnimationOnScroll
                            animateIn="animate__fadeInDown"
                            delay={700}
                            animateOnce={true}
                          >
                            <p className="suptitle">Факти:</p>
                          </AnimationOnScroll>

                          <AnimationOnScroll
                            animateIn="animate__fadeInDown"
                            delay={1100}
                            animateOnce={true}
                          >
                            <h3 className="title">{item.title}</h3>
                          </AnimationOnScroll>

                          <AnimationOnScroll
                            animateIn="animate__fadeInDown"
                            delay={1500}
                            animateOnce={true}
                          >
                            <p className="subtitle">{item.subtitle}</p>
                          </AnimationOnScroll>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </AnimationOnScroll>
        </div>
      </section>
      <section id="allProducts">
        <div className="container">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <h2 className="title">Всі товари</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={400}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={4}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              loop={true}
              autoplay={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper3d"
              resizeObserver={true}
              breakpoints={{
                340: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {ProdList.map((el, index) => {
                return (
                  <SwiperSlide key={index} className="partners">
                    <div
                      className="item-wrap"
                      data-fancybox="gallery"
                      href={`./images/products/${el.photo}`}
                    >
                      <LazyLoad>
                        <img
                          src={`./images/products/${el.photo}`}
                          alt={el.name}
                        />
                      </LazyLoad>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce={true}
            delay={700}
          >
            <Link to="/Catalog">
              <Button text="Перейти в каталог" />
            </Link>
          </AnimationOnScroll>
        </div>
      </section>

      <Brands
        title={<h2 className="title">З нами працюють</h2>}
        className="partners"
      />
      <FeedbackSection
        titleText="Зв'яжіться з нами"
        formClass="deallers"
        className="deallers"
      />
    </main>
  );
}
