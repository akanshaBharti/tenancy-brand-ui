// import React from "react";

// const InputField = ({
//   className ="",
//   placeholder,
//   type = "text",
//   onChange,
//   value,
//   name
// }) => {
//   return (
//       <input
//         // className={className}
//         // className={`p-2 rounded-md w-full ${className}`}
//         className={className}
//         placeholder={placeholder}
//         type={type}
//         onChange={onChange}
//         value={value}
//         name={name}
//       />
//   );
// };

// export default InputField;
import React, { forwardRef } from "react";

const InputField = (
  { className = "p-2 rounded-md w-full", placeholder, type = "text", onChange, value, name, options=[], id, ...rest },
  ref // Accept ref as a second argument
) => {
  return (
    <>
     {
        type === "select" ? <>
          <select
            className={className}
            onChange={onChange}
            value={value}
            name={name}
            id={id || undefined}
            {...rest}
          >
            {options.map((option, index) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>:<>
            <input
              className={className}
              placeholder={placeholder} 
              type={type}
              id={id || undefined}
              onChange={onChange}
              value={value}
              name={name}
              ref={ref} // Pass ref to the input element
            />
        </>

     }
    
    </>
  );
};

export default forwardRef(InputField);
