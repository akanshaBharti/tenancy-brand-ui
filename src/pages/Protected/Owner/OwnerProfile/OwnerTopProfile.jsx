import React, { useState } from "react";
import { Link } from "react-router-dom";

const OwnerTopProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showPP] = useState(false);

  const firstNameLetter = user?.full_name
    ? user?.full_name.split(" ")[0].charAt(0).toUpperCase()
    : user?.business_name.split(" ")[0].charAt(0).toUpperCase();
  const lastNameLetter = user?.full_name
    ? user?.full_name.split(" ")[1].charAt(0).toUpperCase()
    : user?.business_name.split(" ")[1].charAt(1).toUpperCase();

  const fullNameLetter = firstNameLetter + lastNameLetter;

  return (
    <div className="mt-2">
      <Link
        to="/protected/owner/profile"
        className="flex items-center gap-[0.5rem]"
      >
        {/* <img src={profile} alt="profile" className="w-7 h-7 object-cover"/> */}
        {showPP === false && (
          <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden bg-lightGray flex items-center">
            {" "}
            <p className="m-0 w-full text-center text-white font-[500] text-[1rem] leading-[1.3rem]">
              {fullNameLetter}
            </p>
          </div>
        )}
        {/* {showPP === true && (
              <div className=" w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={profilePic}
                  alt="profile"
                />
              </div>
            )} */}
        <h4 className="text-[1rem] font-[600] text-[#334155]">
          {user?.full_name}
        </h4>{" "}
      </Link>
    </div>
  );
};

export default OwnerTopProfile;
