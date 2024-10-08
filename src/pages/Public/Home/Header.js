import React from "react";
import tenancyLogo from "../../../assets/image/tenancyLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import YellowButton from "../../../components/Button/YellowButton";

const Header = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="py-[1.5rem] px-[5rem]">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img src={tenancyLogo} className="" alt="logo" />
        </Link>
        <div className="flex gap-[1.5rem] text-[1rem] font-[500]">
          <p>Services</p>
          <p>For Tenants</p>
          <Link to="/public/owners">For Owners</Link>
        </div>
        <div className="flex items-center gap-[1.2rem] font-[500]">
          <Link to="/login" className="">
            Log In
          </Link>
          <YellowButton
            px={"px-[1rem]"}
            py={"py-[0.5rem]"}
            rounded={"rounded-lg"}
            name="Sign Up"
            onClick={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
