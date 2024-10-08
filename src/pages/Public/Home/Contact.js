import React from "react";
import chat from "../../../assets/image/Home/chat.svg";
import support from "../../../assets/image/Home/support.svg";
import call from "../../../assets/image/Home/call.svg";
import map from "../../../assets/image/Home/map.svg";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  return (
    <div className="text-center  text-darkBlue">
      <div className="pt-[3rem] bg-gradient-to-r from-white via-[#FBEFD0] to-white">
        {location.pathname === "/public/owners" ? (
          <>
          <h4 className="font-[600] text-[1.6rem] ">
              Unlock Your Property's Full Potential Today
            </h4>
            <h4 className="font-[500] text-[0.99rem] ">
              Join thousands of satisfied property owners who've maximized their returns and minimized their stress.
            </h4></>
        ) : (
          <>
            <h4 className="font-[500] text-[1.7rem] ">
              Ready to Find Your Perfect Home?
            </h4>
            <h4 className="font-[500] text-[1rem] ">
              Our team is here to make your tenancy jouney seamless
            </h4>
          </>
        )}
        <div className="flex gap-[1rem] justify-center items-center m-0">
          <img src={chat} alt="chat img" className="w-32 " />
          <img src={support} alt="support img" className="w-28 h-28" />
          <img src={call} alt="call img" className="w-32 " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
