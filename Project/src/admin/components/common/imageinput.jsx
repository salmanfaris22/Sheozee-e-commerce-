// components/ReusableImageInput.js
// eslint-disable-next-line react/prop-types
const ReusableImageInput = ({ value, onChange, onAddImage }) => {
    return (
      <div className="flex space-x-2 items-center">
        <input
          type="text"
          placeholder="Image URL"
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="button"
          onClick={onAddImage}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Image
        </button>
      </div>
    );
  };
  
  export default ReusableImageInput;
  