import React, { useState } from "react";
import arrow_right from "../../assets/image/Home/arrow-right.svg";

function RedButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center whitespace-nowrap text-darkBlue border-1 bg-[#F7D7BE] border-[#F8C0AE]   ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="text-center w-[100%] m-0">{props.name}</p>
        </button>
    </div>
  );
}

export default RedButton;
