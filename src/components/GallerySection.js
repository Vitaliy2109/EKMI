import "../assets/scss/components/GallerySection.scss";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
function GallerySection() {
  const items = [
    {
      img: "image-1.jpg",
    },
    {
      img: "image-2.jpg",
    },
    {
      img: "image-3.png",
    },
    {
      img: "image-4.jpg",
    },
  ];

  return (
    <section id="gallerySection">
      <div className="container">
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
          <div className="items-wrap">
            {items.map((el, index) => {
              return (
                <div
                  data-fancybox="gallery"
                  href={`./images/gallery-section/${el.img}`}
                  className="item"
                  key={index}
                >
                  <img
                    src={`./images/gallery-section/${el.img}`}
                    alt="Gallery Image"
                  />
                  <i className="icon-zoom-in"></i>
                </div>
              );
            })}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default GallerySection;
