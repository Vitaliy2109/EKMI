import LazyLoad from "react-lazy-load";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
function NewProductItem(props) {
  const { photo, name, price } = props;
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
  return (
    <div className="item-wrap">
      <div className="item">
        <div
          className="img-wrap"
          data-fancybox="gallery"
          href={`./images/products/${photo}`}
        >
          <LazyLoad>
            <img
              src={`./images/products/${photo}`}
              alt={name}
              className="rounded"
            />
          </LazyLoad>
        </div>
        <div className="item-name">{name}</div>
        <div className="item-price">{price} UAH</div>
      </div>
    </div>
  );
}

export default NewProductItem;
