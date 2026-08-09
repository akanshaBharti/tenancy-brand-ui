import React from "react";

function YellowButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center text-darkBlue whitespace-nowrap bg-[#FFD700]  ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="text-center w-[100%] m-0">{props.name}</p>
      </button>
    </div>
  );
}

export default YellowButton;
