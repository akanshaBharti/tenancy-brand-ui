import React, { useContext, useState } from "react";
import loginImg from "../../../assets/image/loginImg.svg";
import logo from "../../../assets/image/logo.svg";
import googleIcon from "../../../assets/image/googleIcon.svg";
import "../inputLabel.css";
import YellowButton from "../../../components/Button/YellowButton";
import { Link, useNavigate } from "react-router-dom";
import { AuthStateContext, UserDetailsContext } from "../../../App";

const Login = () => {
  const navigate = useNavigate();
  const { setUserDetails } = useContext(UserDetailsContext);
  const { setIsAuthenticated } = useContext(AuthStateContext);
  const [isActive, setIsActive] = useState(true);

  const handleTenant = () => {
    setIsActive(true);
  };
  const handleOwner = () => {
    setIsActive(false);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    navigate("/protected/tenant/home");
  }

  const Tenant = () => {
    return (
      <div className="mt-[1.5rem]">
        <form className="space-y-4">
          <div className="flex flex-col ">
            <label className="input-label">Email</label>
            <input type="email" className="input-box w-full" required placeholder="Enter your email"/>
          </div>
          <div className="flex flex-col ">
            <label className="input-label">Password</label>
            <input type="password" className="input-box w-full" required placeholder="Enter password"/>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="peer appearance-none h-4 w-4 border-2 rounded checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-[0.75rem] before:block before:text-center"
              />
              <h4 className="text-[#272727] font-[400] text-[0.9rem]">
                Remember me
              </h4>
            </div>
            <h4 className="text-[#F4923C]">Forgot password</h4>
          </div>
          <div className="flex flex-col justify-center text-center gap-[1rem]">
            <YellowButton
              px={"px-[1.3rem]"}
              py={"py-[0.5rem]"}
              rounded={"rounded-lg"}
              name="Sign in"
              onClick={handleSignIn}
            />
            <button className="flex items-center justify-center gap-2 border rounded-lg px[1.3rem] py-[0.5rem]"><img src={googleIcon} alt="google icon" className="w-5 h-5"/>Sign in with Google</button>
            <h4 className="text-lightGray">No account? <Link to="/register" className="text-[#F26664]">Create one</Link></h4>
          </div>
        </form>
      </div>
    );
  };

  const Owner = () => {
    return (
        <div className="mt-[1.5rem]">
        <form className="space-y-4">
          <div className="flex flex-col ">
            <label className="input-label">Email</label>
            <input type="email" className="input-box w-full" required placeholder="Enter your email"/>
          </div>
          <div className="flex flex-col ">
            <label className="input-label">Password</label>
            <input type="password" className="input-box w-full" required placeholder="Enter password"/>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="peer appearance-none h-4 w-4 border-2 rounded checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-[0.75rem] before:block before:text-center"
              />
              <h4 className="text-[#272727] font-[400] text-[0.9rem]">
                Remember me
              </h4>
            </div>
            <h4 className="text-[#F4923C]">Forgot password</h4>
          </div>
          <div className="flex flex-col justify-center text-center gap-[1rem]">
            <YellowButton
              px={"px-[1.3rem]"}
              py={"py-[0.5rem]"}
              rounded={"rounded-lg"}
              name="Sign in"
            />
            <button className="flex items-center justify-center gap-2 border rounded-lg px[1.3rem] py-[0.5rem]"><img src={googleIcon} alt="google icon" className="w-5 h-5"/>Sign in with Google</button>
            <h4 className="text-lightGray">No account? <Link to="/register" className="text-[#F26664]">Create one</Link></h4>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12  w-full">
      <div className="col-span-6 border p-[1rem] ">
        <div className="flex flex-col items-center justify-center">
            <Link to="/">
           
          <img
            src={logo}
            alt="logo"
            className="w-[258px] mt-[1rem] mb-[2rem]"
          />
           </Link>

          <h4 className="font-[500] text-[1.3rem] text-darkBlue">
            Welcome Back
          </h4>
          <p className="text-[0.9rem] font-[500] text-lightGray">
            Please Enter your details
          </p>

          <div className="px-2 mt-[2rem] font-[500] flex justify-center items-center py-[0.4rem] text-center bg-[#EEEEEE] gap-[1rem] rounded-xl">
            <button
              onClick={handleTenant}
              className={` py-[0.4rem] px-[1.5rem] rounded-lg ${
                isActive ? "bg-white font-[600]" : ""
              }`}
            >
              Login as Tenant
            </button>
            <button
              onClick={handleOwner}
              className={` rounded-lg py-[0.4rem] px-[1.5rem] ${
                isActive ? "" : "bg-white font-[600]"
              }`}
            >
              Login as Owner
            </button>
          </div>
        </div>

        <div className="px-[6rem]">{isActive ? <Tenant /> : <Owner />}</div>
      </div>

      <div className="col-span-6">
        <img
          src={loginImg}
          alt="login"
          className="h-[40rem] w-full object-contain object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
