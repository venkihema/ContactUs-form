import "../ContactUs.css";
export const InputComponent = ({
  label,
  type,
  placeholder,
  InputValue,
  inputChangeHandler,
}) => {
  return (
    <div>
      <div className="infoField">
        <div className="labelField">
          <label> {label} </label>
        </div>
        <div className="inputField">
          <input
            type={type}
            placeholder={placeholder}
            value={InputValue}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};
