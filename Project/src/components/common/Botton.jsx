// MyButton.jsx
// eslint-disable-next-line react/prop-types
const MyButton = ({ label, onClick, type = "button", className = "", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MyButton;
