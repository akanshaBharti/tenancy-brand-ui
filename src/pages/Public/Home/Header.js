import React, { useContext, useState } from "react";
import tenancyLogo from "../../../assets/image/tenancyLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import YellowButton from "../../../components/Button/YellowButton";
import VisiterSignUp from "./VisiterSignUp";
import VisiterSignUpOtp from "./VisiterSignUpOtp";
import VisiterSignUpWelcome from "./VisiterSignUpWelcome";
import VisiterLogin from "./VisiterLogin";
import { AuthStateContext } from "App";
import TenantTopProfile from "pages/Protected/Tenant/Profile/TenantTopProfile";
import OwnerTopProfile from "pages/Protected/Owner/OwnerProfile/OwnerTopProfile";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthStateContext);
  const [isOpenDilog, setIsOpenDilog] = useState(false);
  const [isOpenOtp, setIsOpenOtp] = useState({ val: false, otp_id: "" });
  const [isOpenWelcome, setIsOpenWelcome] = useState(false);
  const [isOpenLoginDilog, setIsOpenLoginDilog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleOpenDilog = () => {
     navigate("/register")
    // setIsOpenDilog(true);
  };

  const handleOpenLoginDilog = () => {
    navigate("/login")
    // setIsOpenLoginDilog(true);
  };

  const handleOpenProfile = () => {
    navigate("/visiter/profile");
  };

  const handleOpenWishlist = () => {
    navigate("/visiter/wishlist");
  };

  const handleOpenScheduled = () => {
    navigate("/visiter/scheduledVisit");
  };
  console.log(isAuthenticated)

  return (
    <div className="py-[1.5rem] px-[5rem]">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img src={tenancyLogo} className="" alt="logo" />
        </Link>
        <div className="flex gap-[1.5rem] text-[1rem] font-[500]">
          <p>Services</p>
          {/* <p>For Tenants</p> */}
          <Link to="/protected/tenant/home">For Tenants</Link>
          {/* <Link to="/public/owners">For Owners</Link> */}
          <Link to="/protected/owner/home">For Owners</Link>
        </div>
        {isAuthenticated ? (
          <>
            <div className="flex items-center gap-[1.2rem] font-[500]">
              {user?.user_type === 1 && <TenantTopProfile />}
              {user?.user_type === 2 && <OwnerTopProfile />}
              {user?.user_type === null && (
                <>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={handleOpenProfile}
                    >
                      Profile
                    </button>
                  </div>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={handleOpenWishlist}
                    >
                      Wishlist
                    </button>
                  </div>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={handleOpenScheduled}
                    >
                      Scheduled Visit
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-[1.2rem] font-[500]">
              <button className="cursor-pointer" onClick={handleOpenLoginDilog}>
                Log In
              </button>
              <YellowButton
                px={"px-[1rem]"}
                py={"py-[0.5rem]"}
                rounded={"rounded-lg"}
                name="Sign Up"
                onClick={handleOpenDilog}
              />
            </div>
          </>
        )}
      </div>
      {isOpenDilog && (
        <VisiterSignUp
          isOpenDilog={isOpenDilog}
          setIsOpenDilog={setIsOpenDilog}
          setIsOpenOtp={setIsOpenOtp}
        />
      )}
      {isOpenOtp.val && (
        <VisiterSignUpOtp
          isOpenOtp={isOpenOtp}
          setIsOpenOtp={setIsOpenOtp}
          setIsOpenWelcome={setIsOpenWelcome}
        />
      )}
      {isOpenWelcome && (
        <VisiterSignUpWelcome
          isOpenWelcome={isOpenWelcome}
          setIsOpenWelcome={setIsOpenWelcome}
        />
      )}
      {isOpenLoginDilog && (
        <VisiterLogin
          isOpenLoginDilog={isOpenLoginDilog}
          setIsOpenLoginDilog={setIsOpenLoginDilog}
        />
      )}
    </div>
  );
};

export default Header;
