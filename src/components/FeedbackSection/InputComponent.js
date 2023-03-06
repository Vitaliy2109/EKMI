import { useId, useState, useEffect } from "react";
function InputComponent(props) {
  const { value, label, required } = props;
  const attrId = useId();
  const [currentValue, setValue] = useState(value);
  const [hasError, setError] = useState(false);
  const reqClass = required ? "req" : "";

  const checkValue = function () {
    if (required && currentValue === "") {
      setError(true);
    }
    props.setInputValue(currentValue);
  };
  useEffect(() => {
    setValue(value);
  }, [value]);
  const resetError = function () {
    if (hasError) {
      setError(false);
    }
  };
  return (
    <div className={`input-wrap${hasError ? " has-error" : ""}`}>
      <input
        value={currentValue}
        className="input"
        type="text"
        id={attrId}
        placeholder=" "
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={checkValue}
        onFocus={resetError}
      />
      <label htmlFor={attrId} className={`label ${reqClass}`}>
        {label}
      </label>
      <div className="underline"></div>
    </div>
  );
}

export default InputComponent;
