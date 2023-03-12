import LazyLoad from "react-lazy-load";
function LatestPublicationsItem(props) {
  const { photo, name } = props;
  return (
    <div className="item-wrap">
      <div className="item">
        <div className="img-wrap">
          <LazyLoad>
            <img src={`./images/products/${photo}`} alt={name} />
          </LazyLoad>
        </div>
        <div className="item-name">{name}</div>
      </div>
    </div>
  );
}

export default LatestPublicationsItem;
