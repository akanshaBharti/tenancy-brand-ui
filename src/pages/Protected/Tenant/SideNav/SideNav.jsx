import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// images
import logo from "../../../../assets/image/logo.svg";
import homeActive from "../../../../assets/image/TenantHome/homeActive.svg";
import rentNotActive from "../../../../assets/image/TenantHome/rentNotActive.svg";
import mainNotActive from "../../../../assets/image/TenantHome/mainNotActive.svg";
import contactNotActive from "../../../../assets/image/TenantHome/contactNotActive.svg";
import rentActive from "../../../../assets/image/TenantHome/rentActive.svg";
import mainActive from "../../../../assets/image/TenantHome/mainActive.svg";
import contactActive from "../../../../assets/image/TenantHome/contactActive.svg";
import homeNotActive from "../../../../assets/image/TenantHome/homeNotActive.svg";
import logOutNotActive from "../../../../assets/image/TenantHome/logOutNotActive.svg";
import logOutActive from "../../../../assets/image/TenantHome/logOutActive.svg";
import Logout from "pages/Protected/Logout/Logout";

const TenantSideNav = () => {
  const location = useLocation();
  const [isLogoutClicked, setIsLogoutClicked] = useState("");

  const handleLogoutClicked = () => {
    setIsLogoutClicked(true);
  };

  const handleClose = () => {
    setIsLogoutClicked(false);
  };

  return (
    <div className="bg-white flex flex-col  h-screen fixed justify-between border border-[#E2E8F0] rounded-r-2xl">
      <div className="p-[1.5rem] ">
        <Link to="/">
          <img src={logo} alt="logo" className="max-w-[134px]" />
        </Link>
        <ul className=" mt-[3rem] flex flex-col gap-[1rem]">
          {/* home */}
          <Link to="/protected/tenant/home">
            <li
              id="home"
              className={`${
                location.pathname === "/protected/tenant/home"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/tenant/home" ? (
                <img src={homeActive} alt="homeActive" />
              ) : (
                <img src={homeNotActive} alt="homeNotActive" />
              )}
              Home
            </li>
          </Link>

          {/* maintenance request */}
          <Link to="/protected/tenant/maintenance">
            <li
              id="maintenance"
              className={`${
                location.pathname === "/protected/tenant/maintenance"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/tenant/maintenance" ? (
                <img src={mainActive} alt="mainActive" />
              ) : (
                <img src={mainNotActive} alt="mainNotActive" />
              )}
              Maintenance Request
            </li>
          </Link>

          {/* rent */}
          <Link to="/protected/tenant/rent">
            <li
              id="rent"
              className={`${
                location.pathname === "/protected/tenant/rent"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/tenant/rent" ? (
                <img src={rentActive} alt="rentActive" />
              ) : (
                <img src={rentNotActive} alt="rentNotActive" />
              )}
              Rent & Payment History
            </li>
          </Link>

          {/* contact */}
          <Link to="/protected/tenant/contact">
            <li
              id="contact"
              className={`${
                location.pathname === "/protected/tenant/contact"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/tenant/contact" ? (
                <img src={contactActive} alt="contactActive" />
              ) : (
                <img src={contactNotActive} alt="contactNotActive" />
              )}
              Contact Us
            </li>
          </Link>
        </ul>

        {/* logout */}
        {/* mt-[17rem]  */}
        <div className="mt-[200%]">
          <hr/>
          <button
            onClick={handleLogoutClicked}
            className={`${
              isLogoutClicked
                ? "font-[600] text-darkBlue"
                : "font-[500] text-[#64748B]"
            }   flex items-center gap-[3rem] text-[1rem]  rounded-md leading-[1.5rem] px-[2rem] py-[0.3rem]`}
          >
             Log Out
            {isLogoutClicked ? (
                <img src={logOutActive} alt="logOutActive" />
              ) : (
                <img src={logOutNotActive} alt="logOutNotActive" />
              )}
           
          </button>
        </div>

        {isLogoutClicked && (
          <Logout onClose={handleClose} open={isLogoutClicked} />
        )}
      </div>
    </div>
  );
};

export default TenantSideNav;
