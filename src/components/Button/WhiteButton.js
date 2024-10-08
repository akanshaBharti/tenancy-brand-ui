import React, { useState } from "react";
import arrow_right from "../../assets/image/Home/arrow-right.svg";

function YellowButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center whitespace-nowrap border border-[#E7E6E6] text-darkBlue bg-white   ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="flex  items-center gap-[0.5rem] text-center w-[100%] m-0">{props.name}
            <img src={arrow_right} alt="arrow img" className="w-4 h-4"/>
        </p>
      </button>
    </div>
  );
}

export default YellowButton;
