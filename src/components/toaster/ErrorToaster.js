import React from "react";
import { toast } from "react-toastify";

const ErrorToaster = ({title, summary}) => {
  return (
    <div className="flex justify-center items-center bg-[#FEF2F2] rounded-lg w-[400px] h-[100px] relative">
      <div className="text-start">
        <p className="font-[700] text-[#334155] text-[20px] m-0">
         {title ? title : "Uh oh! Something went wrong."}
        </p>
        <p className="font-[400] text-[#334155] text-[1rem] m-0">
          {summary ? summary : "There was a problem with your request."}
        </p>
      </div>
      <button
        className="text-[#272727] absolute top-2 right-2 font-[700]"
        onClick={() => toast.dismiss()}
      >
        ✕
      </button>
    </div>
  );
};

export default ErrorToaster;
