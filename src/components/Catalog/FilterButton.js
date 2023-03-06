import Button from "../common/Button";

function FilterButton(props) {
  const { text, image = "", type, onClick, className } = props;

  return (
    <li onClick={onClick}>
      {image}

      <p className={className} type={type}>
        {text}
      </p>
    </li>
  );
}

export default FilterButton;
