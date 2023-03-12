import LazyLoad from "react-lazy-load";
function NewProductItem(props) {
  const { photo, name, price } = props;
  return (
    <div className="item-wrap">
      <div className="item">
        <div className="img-wrap">
          <LazyLoad>
            <img src={`./images/products/${photo}`} alt={name} />
          </LazyLoad>
        </div>
        <div className="item-name">{name}</div>
        <div className="item-price">{price} UAH</div>
      </div>
    </div>
  );
}

export default NewProductItem;
