import React from "react";
import tenancyLogo from "../../../assets/image/tenancyLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#A0E4F1] via-[#D4F7FC] to-[#A0E4F1] rounded-t-2xl">
      <div className="px-[5rem] py-[3rem] ">
        <div className="flex flex-col justify-center items-center">
        <img src={tenancyLogo} alt="logo" />
        <div className="flex gap-[2rem] my-[1.5rem]">
        <p>Tenants</p>
        <Link to="/public/owners">Owners</Link>
        </div>
        </div>
        
        <hr className="border-darkBlue"/>
 
 <div className="flex justify-between">
 <h4 >© 2024 Tenancy. All rights reserved.</h4>
 <div className="flex gap-[1rem]">
 <h4>Terms</h4>
 <h4>Privacy</h4>
 <h4>Cookies</h4>
 </div>
 
 </div>
      </div>
    </div>
  );
};

export default Footer;
