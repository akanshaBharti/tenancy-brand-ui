import React from "react";
import { Link } from "react-router-dom";

// images
import profile from "../../../../assets/image/TenantHome/profile.svg";

const TenantTopProfile = () => {
  return (
    <div className="mt-2">
      <Link to="/protected/tenant/profile" className="flex items-center gap-[0.5rem]">
      {/* <div className="bg-white rounded-full w-10 h-10 overflow-hidden"> */}
      <img src={profile} alt="profile" className="w-7 h-7 object-cover"/>

      {/* </div> */}
      <h4 className="text-[1rem] font-[600] text-[#334155]">Dheeraj Rao</h4>
      </Link>
    </div>
  );
};

export default TenantTopProfile;
