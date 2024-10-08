import React from "react";
import Header from "../Home/Header";
import YellowButton from "../../../components/Button/YellowButton";

// images
import ownerImg from "../../../assets/image/Owners/ownerImg.svg";
import arrow from "../../../assets/image/Owners/arrow.svg";
import { useNavigate } from "react-router-dom";

const TranformYour = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#DCE4FD] via-[#E3F2FE] to-[#D6DAFC] rounded-b-2xl relative">
      <Header />
      <div className="px-[5rem]  flex justify-between ">
        <div className="py-[3rem] mt-[2.5rem]">
          <h2 className=" text-[#243375] text-[2.8rem] font-[600]">
            Transform Your Property into<br></br> a Profitable Smart Asset
          </h2>
          <p className=" text-[#245380] font-[500] mt-2">
            Join our platform and enjoy hassle-free property <br></br>
            management while maximizing your rental income.
          </p>
          <div className="flex gap-[1rem] font-[500] mt-[1.5rem] items-center">

           
          <YellowButton px={"px-[1rem]"} py={"py-[0.5rem]"} rounded={"rounded-xl"} name="Get Started Now" onClick={handleGetStarted}/>
          <button className="flex gap-[0.5rem] items-center">
           Schedule a Free Consultation
           <img src={arrow} alt="arrow img" />
          </button>
          </div>

        </div>

        <img src={ownerImg} alt="owner img" />
      </div>
    </div>
  );
};

export default TranformYour;
