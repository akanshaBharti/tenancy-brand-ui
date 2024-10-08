import React from "react";
import Header from "./Header";
import YellowButton from "../../../components/Button/YellowButton";
import { Link, useNavigate } from "react-router-dom";

const FindYour = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
   navigate("/public/search");
  }
  return (
    <div className="h-screen bg-gradient-to-r from-[#A0E4F1] via-[#D4F7FC] to-[#A0E4F1] rounded-b-2xl relative">
      <Header />
      <div className="py-[7rem]  px-[20rem]">
        <p className="text-center text-[#245380] font-[500]">
          Connecting tenants with ideal properties across Telangana's tech hub
        </p>
        <h2 className="text-center text-blue text-[2.8rem] font-[600]">
          Find Your Perfect Home <br></br> in Hyderabad
        </h2>
        <div className="font-[500] flex justify-between bg-white mx-[9rem] rounded-full mt-[2rem] p-1 shadow-md">
            <input
            type="search"
            placeholder="Enter locality or landmark "
            className="font-[400] text-lightGray ml-2 w-full focus:outline-none"
            />
          <YellowButton px={"px-[1rem]"} py={"py-[0.2rem]"} rounded={"rounded-full"} name="Search" onClick={handleSearch}/>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  rounded-t-xl font-[400] bg-white p-2 ">
        <h3>
          Got a property?{" "}
          <Link to="#" className="underline">
            Connect with quality tenants
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default FindYour;
