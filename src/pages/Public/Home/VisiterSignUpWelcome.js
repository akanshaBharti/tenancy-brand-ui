import DialogBox from "components/DialogBox";
import React from "react";
import logo from "assets/image/Title/Logo.svg";
import YellowButton from "components/Button/YellowButton";
import charminarPic from "assets/image/Title/Charminar.svg";

const VisiterSignUpWelcome = ({ setIsOpenWelcome, isOpenWelcome }) => {
  const handleOpenContent = () => {
    return (
      <>
        <div className="px-[15px]">
          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="logo" width="230px" />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <img src={charminarPic} alt="charminarPic" />
          </div>
          <div className="mt-2 text-center">
            <p className="m-0 max-w-[180px] mx-auto text-[#111827] text-[1.1rem]">Welcome to Tenancy</p>
            <p className="m-0 max-w-[180px] mx-auto text-[#6B7280] text-[0.99rem] mt-1">
              Find Your Perfect Home in Hyderabad
            </p>
          </div>
          <div className="mt-2.5">
            <div className="mt-2 flex flex-col gap-1">
              <YellowButton
                name="Explore Properties"
                px={"px-[1.5rem]"}
                py={"py-[0.5rem]"}
                rounded={"rounded-md"}
                // onClick={handleOpenOtp}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <DialogBox
      showYellowButton={false}
      showCancelButton={false}
        show={isOpenWelcome}
        onClose={()=>setIsOpenWelcome(false)}
        children={handleOpenContent()}
        width="w-[350px]"
        bg="bg-[#F3F4F6]"
      />
    </div>
  );
};

export default VisiterSignUpWelcome;
