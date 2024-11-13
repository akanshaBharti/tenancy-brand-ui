import React from "react";
import arrow_right from "../../assets/image/Home/arrow-right.svg";

function WhiteButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center whitespace-nowrap border border-[#E7E6E6] text-darkBlue bg-white   ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="flex  items-center gap-[0.5rem] text-center w-[100%] m-0">
          {props.name}
          {props.showIcon && (
            <img
              src={props.icon || arrow_right} // Default to arrow_right if no custom icon is provided
              alt="icon"
              className="w-4 h-4"
            />
          )}
        </p>
      </button>
    </div>
  );
}

export default WhiteButton;


// with default icon
// <WhiteButton name="Click Me" showIcon={true} />


// without any icon
// <WhiteButton name="Click Me" showIcon={false} />

// with custom icon
// <WhiteButton name="Click Me" showIcon={true} icon={customIconPath} />
