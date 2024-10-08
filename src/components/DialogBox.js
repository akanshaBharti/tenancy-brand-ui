import React, { useState } from "react";
import YellowButton from "./Button/YellowButton";
import x from "../assets/image/Property/x.svg";


const DialogBox = ({
  show,
  onClose,
  title,
  children,
  onSubmit,
  yellowBtn,
  CancelBtn = "Close",
  width = 'max-w-lg', 
  titleFont = 'text-xl'
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className={`bg-[#F3F4F6] relative bg-white p-6 rounded-2xl shadow-lg w-full ${width}`}>
        {/* Close Button */}
        <button
          className="absolute top-[1.5rem] right-6 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          {/* &times; */}
          <img src={x} alt="x icon"/>
        </button>

        <h2 className={` font-[500] mb-4 text-center ${titleFont}`}>{title}</h2>

        {/* DialogBox Content */}
        <div className="mb-4">{children}</div>

        {/* Action Buttons */}
        <div className="font-[500] px-[1.5rem]">
          <YellowButton
            px={"px-[1.3rem]"}
            py={"py-[0.5rem]"}
            rounded={"rounded-lg"}
            name={yellowBtn}
            onClick={onSubmit}
          />
          <button
            className="mt-1 py-2 px-4 rounded w-full"
            onClick={onClose}
          >
            {/* Cancel */}
            {CancelBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
