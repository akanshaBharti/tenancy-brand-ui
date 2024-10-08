import React from "react";
import YellowButton from "../../../../components/Button/YellowButton";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import mainetenance from "../../../../assets/image/Owners/regular.svg";
import upload from "../../../../assets/image/Owners/comprehensive.svg";
import payment from "../../../../assets/image/Owners/owner_tenant.svg";
import info from "../../../../assets/image/TenantHome/info.svg";
import profile from "../../../../assets/image/TenantHome/profile.svg";

const TenantHome = () => {
  return (
    <div className="mb-[2rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        Welcome Dheeraj, 👋
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
        {/* upcoming rent due */}
        <div className="col-span-12 flex justify-between items-center border border-[#F26664] bg-[#FDECEC] p-[0.8rem] rounded-xl">
          <div className="flex items-start gap-[0.5rem]">
            <img src={info} alt="info icon" className="w-5 h-5" />
            <div>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Upcoming Rent Due Date
              </h4>

              <h4 className="font-[600] text-[1.1rem] text-[#9B0003]">
                01 September 2024
              </h4>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Pay early on time to keep your tenancy score up.
              </h4>
            </div>
          </div>
          <YellowButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Pay Early"
          />
        </div>

        {/* my profile */}
        <div className="col-span-6 mt-[0.5rem] flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[0.8rem] px-[1rem]">
          <div className="flex gap-[0.5rem] items-center">
            <img src={profile} alt="profile icon" className="w-7 h-7" />
            <div>
              <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                My Profile
              </h4>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Update your personal information to<br></br> keep your profile
                up-to-date
              </h4>
            </div>
          </div>
          <WhiteButton
            px={"px-[1.9rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Edit"
          />
        </div>

        {/* payment info */}
        <div className="col-span-6 mt-[0.5rem] flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[0.8rem] px-[1rem]">
          <div className="flex gap-[0.5rem] items-center">
            <img src={payment} alt="payment icon" className="w-7 h-7" />
            <div>
              <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                Payment Information
              </h4>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Manage your payment methods
              </h4>
            </div>
          </div>
          <WhiteButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Manage"
          />
        </div>

        {/* maintenance */}
        <div className="col-span-6 flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[0.8rem] px-[1rem]">
          <div className="flex gap-[0.5rem] items-center">
            <img
              src={mainetenance}
              alt="mainetenance icon"
              className="w-7 h-7"
            />
            <div>
              <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                Maintenance Requests
              </h4>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Submit and track your maintenance<br></br> requests
              </h4>
            </div>
          </div>
          <WhiteButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Manage"
          />
        </div>

        {/* Upload doc */}
        <div className="col-span-6 mt-[0.5rem] flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[0.8rem] px-[1rem]">
          <div className="flex gap-[0.5rem] items-center">
            <img src={upload} alt="upload icon" className="w-7 h-7" />
            <div>
              <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                Upload Documents
              </h4>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Upload important documents and manage your files.
              </h4>
            </div>
          </div>
          <WhiteButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Upload"
          />
        </div>

        {/* tenancy notifications */}
        <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">  
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Tenancy Notifications
          </h4>
          <div className="text-center rounded-b-xl py-[4rem]">
          <p className="p-[0.5rem] font-[500] text-[1rem] text-darkBlue">
            Stay informed with the latest updates, Important announcment, and news from <br></br>
          <span className="text-[#F26664]">Tenancy</span>  management to keep you in the loop about any changes or events.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantHome;
