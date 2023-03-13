export default function FilterButton(props) {
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
