import React from "react";

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
}) => {
  return (
    <div>
      
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="input"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
