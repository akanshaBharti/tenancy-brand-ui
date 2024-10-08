import React from "react";

const TenantProfile = () => {
  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        My Profile
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
        <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Contact Information
          </h4>
          <div className="rounded-b-xl p-[0.8rem] border-t">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantProfile;
