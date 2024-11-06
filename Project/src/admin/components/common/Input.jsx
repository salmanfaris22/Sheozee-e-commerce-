
// eslint-disable-next-line react/prop-types
const ReusableInput = ({ type, name, value, onChange, placeholder, required = false }) => {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
        required={required}
      />
    );
  };
  
  export default ReusableInput;
  
  // components/ReusableImageInput.js

  