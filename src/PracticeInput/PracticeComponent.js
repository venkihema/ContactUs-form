export const PracticeComponent = ({
  label,
  type,
  name,
  value,
  ChangeHandler,
}) => {
  return (
    <div>
      <label>{label} </label>
      <input type={type} name={name} value={value} onChange={ChangeHandler} />
    </div>
  );
};
