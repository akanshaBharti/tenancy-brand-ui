import React, { useState } from "react";
import arrow_right from "../../assets/image/Home/arrow-right.svg";

function BlueButton(props) {
  return (
    <div>
      <button
        className={`flex w-[100%] items-center whitespace-nowrap text-darkBlue bg-[#007AFF26]   ${props.px} ${props.py} ${props.rounded} `}
        onClick={props.onClick}
      >
        <p className="text-center w-[100%] m-0">{props.name}</p>
        </button>
    </div>
  );
}

export default BlueButton;
