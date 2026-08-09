import DialogBox from "components/DialogBox";
import InputField from "components/InputFields/inputField";
import React, { useEffect, useState, useRef } from "react";
import logo from "assets/image/Title/Logo.svg";
import YellowButton from "components/Button/YellowButton";
import usePostVerifySignUpOtp from "../data/usePostVerifySignUpOtp";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";

const VisiterSignUpOtp = ({ isOpenOtp, setIsOpenOtp, setIsOpenWelcome }) => {
  const [postVerifyData, postVerifyError, , postVerifyOtp] =
    usePostVerifySignUpOtp();
  useEffect(() => {
    if (postVerifyData) {
      showSuccessToast("Registered Successfully");
    }
    if (postVerifyError) {
      showErrorToast("Error in Registering");
    }
  }, [postVerifyData, postVerifyError]);
  const [otpForm, setOtpForm] = useState({
    otp: ["", "", "", ""], // Array for storing individual OTP digits
    otp_id: "", // For storing the OTP ID
  });
  const [resendTimer, setResendTimer] = useState(30);
  const [error, setError] = useState(""); // For validation messages

  const otpRefs = useRef([]); // Refs for OTP inputs

  // Set OTP ID from props when the component mounts or props change
  useEffect(() => {
    if (isOpenOtp.otp_id) {
      setOtpForm((prev) => ({ ...prev, otp_id: isOpenOtp.otp_id }));
    }
  }, [isOpenOtp]);

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    const newOtp = [...otpForm.otp];
    newOtp[index] = value.slice(-1); // Only allow one digit
    setOtpForm((prev) => ({ ...prev, otp: newOtp }));

    // Move to next input if a digit is entered
    if (value && index < otpForm.otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Resend OTP logic
  const handleResendOtp = () => {
    setResendTimer(30); // Reset timer
    setError(""); // Clear any errors
    console.log("Resend OTP logic goes here");
  };

  // Timer for OTP resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Confirm OTP logic
  const handleConfirmOtp = () => {
    const filledOtp = otpForm.otp.join(""); // Combine OTP digits into one string
    if (filledOtp.length < 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }
    setError(""); // Clear error if OTP is valid
    console.log("OTP confirmed:", filledOtp, "otp_id", otpForm.otp_id);
    postVerifyOtp({ otp: Number(filledOtp), otp_id: Number(otpForm.otp_id) });
    // handleOpenSignUpWelcome();
  };

  // Render OTP input and other content
  const handleOpenContent = () => (
    <div className="px-[15px]">
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="logo" width="230px" />
      </div>
      <div className="flex flex-col items-center mt-28">
        <p className="m-0 text-[1.3rem] font-[200] text-[#111827]">
          Verify Mobile Number
        </p>
        <p className="m-0 text-[0.8rem] font-[100] text-[#6B7280]">
          OTP Sent on 9xxxxxxxx4
        </p>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {otpForm.otp.map((digit, index) => (
          <InputField
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            ref={(el) => (otpRefs.current[index] = el)} // Attach ref to each input
            className="w-[62px] h-10 text-center border border-[#94A3B8] rounded focus:outline-none"
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4 mt-1">
        <span className="text-[#94A3B8] text-[0.8rem]">
          Resend OTP in {resendTimer > 0 ? `${resendTimer}s` : "now"}
        </span>
        {resendTimer === 0 && (
          <button
            onClick={handleResendOtp}
            className="hover:underline text-[#111827] text-[0.8rem]"
          >
            Resend OTP
          </button>
        )}
      </div>
      <div className="mt-2 mb-28">
        <div className="mt-2 flex flex-col gap-1">
          <YellowButton
            name="Confirm OTP"
            px={"px-[1.5rem]"}
            py={"py-[0.5rem]"}
            rounded={"rounded-md"}
            onClick={handleConfirmOtp}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <DialogBox
        showYellowButton={false}
        showCancelButton={false}
        show={isOpenOtp.val}
        onClose={() => setIsOpenOtp((prev) => ({ ...prev, val: false }))}
        children={handleOpenContent()}
        width="w-[350px]"
        bg="bg-[#F3F4F6]"
      />
    </div>
  );
};

export default VisiterSignUpOtp;
