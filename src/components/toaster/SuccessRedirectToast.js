import React from "react";
import { toast } from "react-toastify";

const SuccessRedirectToast = ({ summary, countdown }) => {
  return (
    <div className="flex justify-start items-center bg-[#F0FDF4] rounded-lg w-[400px] pl-5 h-[80px] relative">
      <div className="text-start">
        <p className="font-[500] text-[#334155] text-[20px] m-0">
          {summary ? summary : "Added Successfully"}
        </p>
        <p className="font-[400] text-[#64748B] text-[16px] m-0">
          Redirecting in {countdown} seconds...
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

export default SuccessRedirectToast;
