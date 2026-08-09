import React from "react";

function GreenButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center whitespace-nowrap text-darkBlue border-1 bg-[#CBFCC7] border-[#81FF8C]   ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="text-center w-[100%] m-0">{props.name}</p>
        </button>
    </div>
  );
}

export default GreenButton;
