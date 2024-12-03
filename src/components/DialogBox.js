import React from "react";
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
  width = "max-w-lg",
  titleFont = "text-xl text-center",
  heading,
  showYellowButton = true, // Default to true
  showCancelButton = true, // Default to true
  padding = "p-6",
  bg="bg-[#F3F4F6]"
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div
        className={`${bg} relative bg-white rounded-2xl shadow-lg ${width} ${padding}`}
      >
        {/* Close Button */}
        <div className={`${heading}`}>
          <button
            className="absolute top-[1.5rem] right-6 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <img src={x} alt="x icon" />
          </button>

          <h2 className={`font-[500] mb-4 ${titleFont}`}>{title}</h2>
        </div>
        {/* DialogBox Content */}
        <div className="">{children}</div>

        {/* Action Buttons */}
        <div className="font-[500] px-[1.5rem] ">
          {showYellowButton && (
            <YellowButton
              px={"px-[1.3rem]"}
              py={"py-[0.5rem]"}
              rounded={"rounded-lg mt-2"}
              name={yellowBtn}
              onClick={onSubmit}
            />
          )}
          {showCancelButton && (
            <button className="mt-1 py-2 px-4 rounded w-full" onClick={onClose}>
              {CancelBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
