import React from "react";

const InputField = ({
  className ="",
  placeholder,
  type = "text",
  onChange,
  value,
}) => {
  return (
    <div>
      <input
        // className={className}
        className={`p-2 rounded-md w-full ${className}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
