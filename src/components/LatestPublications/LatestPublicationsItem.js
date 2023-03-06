function LatestPublicationsItem(props) {
  const { photo, name } = props;
  return (
    <div className="item-wrap">
      <div className="item">
        <div className="img-wrap">
          <img src={`/images/products/${photo}`} alt="" />
        </div>
        <div className="item-name">{name}</div>
      </div>
    </div>
  );
}

export default LatestPublicationsItem;
