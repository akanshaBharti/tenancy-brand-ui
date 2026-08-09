import DialogBox from "components/DialogBox";
import React, { useEffect, useState } from "react";
import logo from "assets/image/Title/Logo.svg";
import InputField from "components/InputFields/inputField";
import YellowButton from "components/Button/YellowButton";
import { Link } from "react-router-dom";
import usePostSignup from "../data/usePostSignup";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";

const VisiterSignUp = ({ isOpenDilog, setIsOpenDilog, setIsOpenOtp }) => {
  const [postSignupData, postSignupError, , postSignUp] =
    usePostSignup();

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    mobile_number: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (postSignupData) {
      // showSuccessToast("OTP sent successfully")
    }
    if (postSignupError) {
      showErrorToast("Error in Registration");
    }
  }, [postSignupData, postSignupError]);

  useEffect(() => {
    if (postSignupData?.data) {
      showSuccessToast("OTP sent successfully");
      setTimeout(() => {
        handleOpenOtp(postSignupData.data?.otp_id);
      }, 300);
      console.log("postSignupData", postSignupData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSignupData]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!signUpForm.name.trim()) {
      newErrors.name = "Name is required";
    } else if (signUpForm.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!signUpForm.mobile_number) {
      newErrors.mobile_number = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(signUpForm.mobile_number)) {
      newErrors.mobile_number = "Invalid mobile number";
    }

    if (!signUpForm.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(signUpForm.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!signUpForm.password) {
      newErrors.password = "Password is required";
    } else if (signUpForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      postSignUp(signUpForm);
      // handleOpenOtp()
      // Perform further actions, like API calls
    }
  };

  const handleOpenOtp = (id) => {
    setIsOpenOtp((prev) => ({
      ...prev, // Spread the previous object to keep all existing keys
      otp_id: id, // Update only the `otp_id` key
      val: true,
    }));
    setIsOpenDilog(false);
  };

  const handleOpenContent = () => {
    return (
      <>
        <div className="px-[15px]">
          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="logo" width="230px" />
            <span className="text-[0.9rem] font-[400] text-[#111827]">
              Sign Up to get the full experience
            </span>
          </div>
          <form className="mt-2">
            <div className="w-[100%] flex flex-col group">
              <label className="font-[500] text-[#111827] text-[0.75rem]">
                Name
              </label>
              <InputField
                type="text"
                className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                placeholder={"Enter Your Name"}
                value={signUpForm.name}
                onChange={handleInputChange}
                name="name"
              />
              {errors.name && (
                <p className="text-red-500 text-[0.75rem]">{errors.name}</p>
              )}
            </div>
            <div className="w-[100%] flex flex-col group mt-2">
              <label className="font-[500] text-[#111827] text-[0.75rem]">
                Mobile Number
              </label>
              <InputField
                type="number"
                className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                placeholder={"Enter Your Number"}
                value={signUpForm.mobile_number}
                onChange={handleInputChange}
                name="mobile_number"
              />
              {errors.mobile_number && (
                <p className="text-red-500 text-[0.75rem]">
                  {errors.mobile_number}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col group mt-2">
              <label className="font-[500] text-[#111827] text-[0.75rem]">
                Email
              </label>
              <InputField
                type="email"
                className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                placeholder={"Enter Your Email"}
                value={signUpForm.email}
                onChange={handleInputChange}
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-[0.75rem]">{errors.email}</p>
              )}
            </div>
            <div className="w-[100%] flex flex-col mt-2 group">
              <label className="font-[500] text-[#111827] text-[0.75rem]">
                Create a Password
              </label>
              <InputField
                type="password"
                className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                placeholder={"Enter Your Password"}
                value={signUpForm.password}
                onChange={handleInputChange}
                name="password"
              />
              {errors.password && (
                <p className="text-red-500 text-[0.75rem]">{errors.password}</p>
              )}
            </div>
            <div className="flex items-start space-x-3 mt-2">
              <div className="">
                <input
                  id="contacted"
                  className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-sm checked:before:font-bold checked:before:relative checked:before:top-[0px] before:block before:text-center"
                  type="checkbox"
                />
              </div>
              <label
                htmlFor="contacted"
                className="text-[0.79rem] text-[#334155] peer-checked:text-gray-900"
              >
                I agree to be contacted by Housing agents.
              </label>
            </div>

            <div className="flex items-start space-x-3 mt-2">
              <div className="">
                <input
                  id="interested"
                  className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-sm checked:before:font-bold checked:before:relative checked:before:top-[0px] before:block before:text-center"
                  type="checkbox"
                />
              </div>
              <label
                htmlFor="interested"
                className="text-[0.79rem] text-[#334155] peer-checked:text-gray-900"
              >
                I am interested in Home Loans.
              </label>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <YellowButton
                name="Sign Up"
                px={"px-[1.5rem]"}
                py={"py-[0.5rem]"}
                rounded={"rounded-md"}
                onClick={handleSubmit}
              />
              <button className="px-[1.5rem] py-[0.5rem] text-[#000000] rounded-md w-[100%] bg-[#FFFFFF] ">
                Cancel
              </button>
            </div>
            <div className="text-center mt-2">
              <Link to="/register" className="underline text-[#111827]">
                Log in as tenant/Owner?
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <div>
      <DialogBox
        showYellowButton={false}
        showCancelButton={false}
        show={isOpenDilog}
        onClose={()=>setIsOpenDilog(false)}
        children={handleOpenContent()}
        width="w-[350px]"
        bg="bg-[#F3F4F6]"
      />
    </div>
  );
};

export default VisiterSignUp;
