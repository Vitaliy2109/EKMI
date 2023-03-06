import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "../assets/scss/components/GallerySection.scss";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
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
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          thumbWidth={100}
          actualSize={false}
        >
          {items.map((el, index) => {
            return (
              <a
                href={`./images/gallery-section/${el.img}`}
                className="item"
                key={index}
              >
                <img src={`./images/gallery-section/${el.img}`} alt="" />
                <i className="icon-zoom-in"></i>
              </a>
            );
          })}
        </LightGallery>
      </div>
    </section>
  );
}

export default GallerySection;
