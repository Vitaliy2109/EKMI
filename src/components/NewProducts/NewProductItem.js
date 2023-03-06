function NewProductItem(props) {
  const { photo, name, price } = props;
  return (
    <div className="item-wrap">
      <div className="item">
        <div className="img-wrap">
          <img src={`./images/products/${photo}`} alt="" />
        </div>
        <div className="item-name">{name}</div>
        <div className="item-price">{price} UAH</div>
      </div>
    </div>
  );
}

export default NewProductItem;
