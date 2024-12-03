import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="bg-opacity-25 spinner border-t-4 border-[#003366] rounded-full w-16 h-16 animate-spin"></div>
    <span className="ml-4 text-[#003366] font-[500] text-[1rem]">
      Loading...
    </span>
  </div>
);

export default Loader;  

// #A0E4F1