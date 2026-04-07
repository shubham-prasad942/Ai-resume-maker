const Button = ({ text, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-white text-sm sm:text-lg rounded-xl px-3 py-1.5 font-bold transition
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"}`}
    >
      {text}
    </button>
  );
};

export default Button;