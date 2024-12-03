import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// images
import logo from "../../../assets/image/logo.svg";
import homeActive from "../../../assets/image/TenantHome/rentNotActive.svg";
import rentNotActive from "../../../assets/image/TenantHome/rentNotActive.svg";
import mainNotActive from "../../../assets/image/TenantHome/mainNotActive.svg";
import contactNotActive from "../../../assets/image/TenantHome/contactNotActive.svg";
import rentActive from "../../../assets/image/TenantHome/rentActive.svg";
import mainActive from "../../../assets/image/TenantHome/mainActive.svg";
import contactActive from "../../../assets/image/TenantHome/contactActive.svg";
import homeNotActive from "../../../assets/image/TenantHome/homeNotActive.svg";
import leaseActive from "../../../assets/image/OwnerHome/leaseActive.svg";
import leaseNotActive from "../../../assets/image/OwnerHome/leaseNotActive.svg";
import manageActive from "../../../assets/image/OwnerHome/manageActive.svg";
import manageNotActive from "../../../assets/image/OwnerHome/manageNotActive.svg";
import TenantActive from "../../../assets/image/OwnerHome/TenantActive.svg";
import TenantsNotActive from "../../../assets/image/OwnerHome/TenantsNotActive.svg";
import logOutNotActive from "../../../assets/image/TenantHome/logOutNotActive.svg";
import logOutActive from "../../../assets/image/TenantHome/logOutActive.svg";
import Logout from "../Logout/Logout";

const OwnerSideNav = () => {
  const location = useLocation();
  const [isLogoutClicked, setIsLogoutClicked] = useState("");

  const handleLogoutClicked = () => {
    setIsLogoutClicked(true);
  };

  const handleClose = () => {
    setIsLogoutClicked(false);
  };

  return (
    <div className="bg-white flex flex-col h-screen fixed justify-between border border-[#E2E8F0] rounded-r-2xl">
      <div className="p-[1.5rem] ">
        <Link to="/">
          <img src={logo} alt="logo" className="max-w-[134px]" />
        </Link>
        <ul className=" mt-[3rem] flex flex-col gap-[0.6rem]">
          {/* home */}
          <Link to="/protected/owner/home">
            <li
              id="home"
              className={`${
                location.pathname === "/protected/owner/home"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/home" ? (
                <img src={homeActive} alt="homeActive" />
              ) : (
                <img src={homeNotActive} alt="homeNotActive" />
              )}
              Home
            </li>
          </Link>

          {/* manage property */}
          <Link to="/protected/owner/manage-property">
            <li
              id="manage-property"
              className={`${
                location.pathname === "/protected/owner/manage-property"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/manage-property" ? (
                <img src={manageActive} alt="manageActive" />
              ) : (
                <img src={manageNotActive} alt="manageNotActive" />
              )}
              Manage Property
            </li>
          </Link>

          {/* maintenance request */}
          <Link to="/protected/owner/maintenance">
            <li
              id="maintenance"
              className={`${
                location.pathname === "/protected/owner/maintenance"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/maintenance" ? (
                <img src={mainActive} alt="mainActive" />
              ) : (
                <img src={mainNotActive} alt="mainNotActive" />
              )}
              Maintenance Request
            </li>
          </Link>

          {/* rent management*/}
          <Link to="/protected/owner/rent-management">
            <li
              id="rent"
              className={`${
                location.pathname === "/protected/owner/rent-management"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/rent-management" ? (
                <img src={rentActive} alt="rentActive" />
              ) : (
                <img src={rentNotActive} alt="rentNotActive" />
              )}
              Rent Management
            </li>
          </Link>

          {/* lease management */}
          <Link to="/protected/owner/lease-management">
            <li
              id="lease-management"
              className={`${
                location.pathname === "/protected/owner/lease-management"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/lease-management" ? (
                <img src={leaseActive} alt="leaseActive" />
              ) : (
                <img src={leaseNotActive} alt="leaseNotActive" />
              )}
              Lease Management
            </li>
          </Link>

          {/* tenants management */}
          <Link to="/protected/owner/tenant-management">
            <li
              id="tenant-management"
              className={`${
                location.pathname === "/protected/owner/tenant-management"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/tenant-management" ? (
                <img src={TenantActive} alt="TenantActive" />
              ) : (
                <img src={TenantsNotActive} alt="TenantsNotActive" />
              )}
              Tenants Management
            </li>
          </Link>

          {/* contact */}
          <Link to="/protected/owner/contact">
            <li
              id="contact"
              className={`${
                location.pathname === "/protected/owner/contact"
                  ? "border-2 border-[#E2E8F0] bg-[#F1F5F9] font-[600] text-darkBlue"
                  : "font-[500] text-[#64748B]"
              }   flex gap-2 text-[1rem]  rounded-md leading-[1.5rem] px-[1rem] py-[0.3rem]`}
            >
              {location.pathname === "/protected/owner/contact" ? (
                <img src={contactActive} alt="contactActive" />
              ) : (
                <img src={contactNotActive} alt="contactNotActive" />
              )}
              Contact Us
            </li>
          </Link>
        </ul>


        {/* logout */}
        <div className="mt-[11rem]">
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

export default OwnerSideNav;
