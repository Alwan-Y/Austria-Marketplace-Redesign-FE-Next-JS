const Input = ({ type, className, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
