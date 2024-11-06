/* eslint-disable react/prop-types */
// components/ReusableSelect.js
// eslint-disable-next-line react/prop-types
const ReusableSelect = ({ name, value, onChange, options, placeholder, required = false }) => {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required={required}
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  
  export default ReusableSelect;
  