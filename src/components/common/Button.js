function Button(props) {
  const { className = "", text, type = "button", onClick } = props;
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
