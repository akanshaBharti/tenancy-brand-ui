import React, { useEffect, useState } from "react";
import "../../../Public/inputLabel.css";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import chat from "../../../../assets/image/TenantHome/chat.svg";
import call from "../../../../assets/image/TenantHome/call.svg";
import mail from "../../../../assets/image/TenantHome/mail.svg";
import usePostCallbackRequest from "../data/usePostCallbackRequest";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";
import Loader from "components/Loader/Loader";

const TenantContact = () => {
  const [preferredTime, setPreferredTime] = useState("");
  const [desc, setDesc] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [
    callbackData,
    callbackIsError,
    callbackIsLoading,
    postCallbackDetails,
  ] = usePostCallbackRequest();

  useEffect(() => {
    if (callbackIsError) {
      const err =
        callbackIsError?.err?.response?.data?.data?.upload_photo || "Try Again";
      console.log("err:", err);
      showErrorToast(err);
    }
  }, [callbackIsError]);

  useEffect(() => {
    if (callbackData) {
      showSuccessToast("Callback request created successfully.");
      setPreferredTime("");
      setDesc("");
      setUploadPhoto("");
    }
  }, [callbackData]);

  const handleSubmitRequest = () => {
    const formData = new FormData();
    formData.append("preferred_time", preferredTime);
    formData.append("description", desc);
    formData.append("upload_photo", uploadPhoto);
    postCallbackDetails(formData);
  };

  return (
    <div className="mb-[1rem] min-h-screen">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        Contact Tenancy
      </h4>
      {callbackIsLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] ">
          <div className="col-span-12 mb-[1rem]">
            <h4 className="font-[500] text-[1.5rem] text-darkBlue ml-1">
              Need Our Assistance?
            </h4>
            <p className="text-lightGray text-[0.9rem] font-[500]">
              Reach out to our team for personalized support, inquiries about
              your account, or any other questions you may have.<br></br> Use
              our contact options to get assistance quickly and effectively.
            </p>
          </div>

          {/* Callback request */}
          <div className="col-span-6 bg-white rounded-xl border border-[#D1D5DB]">
            <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
              Callback Request
            </h4>
            <div className="rounded-b-xl p-[0.8rem] border-t">
              <div className="mb-[1rem]">
                <label className="input-label text-lightGray">
                  Preferred Time
                </label>
                <select
                  className="input-box"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="9:00">9:00 A.M</option>
                  <option value="10:00">10:00 A.M</option>
                  <option value="11:00">11:00 A.M</option>
                </select>
              </div>
              <div className="mb-[1rem] flex flex-col w-full">
                <label className="input-label text-lightGray">
                  Description
                </label>
                <textarea
                  type="text"
                  className="text-area h-[8rem]"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div>
                <label className="input-label text-lightGray ">
                  Upload Photos (Optional)
                </label>
                <div className="w-[30%]">
                  <input
                    type="file"
                    // accept=".pdf"
                    id={`file-input-photo`}
                    className="hidden"
                    onChange={(e) => setUploadPhoto(e.target.files[0])}
                  />
                  <WhiteButton
                    onClick={() =>
                      document.querySelector(`#file-input-photo`).click()
                    }
                    px={"px-[2.2rem]"}
                    py={"py-[0.3rem]"}
                    rounded={"rounded-lg"}
                    name="Upload"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmitRequest}
                  disabled={!preferredTime || !desc || !uploadPhoto}
                  className={`font-[500] rounded-lg py-2 px-3 mt-[1.5rem]
                  ${
                    preferredTime && desc && uploadPhoto
                      ? "bg-[#FFD700] text-darkBlue"
                      : "bg-[#808080] cursor-not-allowed text-white"
                  }
                  `}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
          <h4 className="flex items-center font-[600] text-[1.1rem] justify-center">
            OR
          </h4>
          {/* methods to contact */}
          <div className="col-span-5">
            {/* whatsapp */}
            <div className=" border border-[#D1D5DB] bg-[#34C75926] px-[1rem] py-[0.8rem] rounded-xl mb-2">
              <img src={chat} alt="chat" />
              <h4 className="font-[500] text-[1rem] text-darkBlue">
                {" "}
                Text on WhatsApp
              </h4>
              <p className="text-[0.8rem] text-lightGray">
                Speak to our Friendly team.
              </p>
              <div className="flex justify-between items-center mt-[1rem]">
                <h4 className="text-[0.9rem] text-darkBlue">+91-9897564738</h4>
                <WhiteButton
                  px={"px-[1rem]"}
                  py={"py-[0.5rem]"}
                  rounded={"rounded-lg"}
                  name=""
                  showIcon={true}
                  onClick={() =>
                    window.open("https://wa.me/919897564738", "_blank")
                  }
                />
              </div>
            </div>
            {/* call */}
            <div className=" border border-[#D1D5DB] bg-[#34C75926] px-[1rem] py-[0.8rem] rounded-xl mb-2">
              <img src={call} alt="call" />
              <h4 className="font-[500] text-[1rem] text-darkBlue">
                Call for query
              </h4>
              <p className="text-[0.8rem] text-lightGray">
                Monday to Friday - 9am to 5pm
              </p>
              <div className="flex justify-between items-center mt-[1rem]">
                <h4 className="text-[0.9rem] text-darkBlue">+91-9897564738</h4>
                <WhiteButton
                  px={"px-[1rem]"}
                  py={"py-[0.5rem]"}
                  rounded={"rounded-lg"}
                  name=""
                  showIcon={true}
                  onClick={() => window.open("tel:+919897564738", "_self")}
                />
              </div>
            </div>
            {/* mail */}
            <div className=" border border-[#D1D5DB] bg-[#34C75926] px-[1rem] py-[0.8rem] rounded-xl">
              <img src={mail} alt="mail" />
              <h4 className="font-[500] text-[1rem] text-darkBlue">Mail</h4>
              <p className="text-[0.8rem] text-lightGray">Send us a mail</p>
              <div className="flex justify-between items-center mt-[1rem]">
                <h4 className="text-[0.9rem] text-darkBlue">
                  tenancy123@gmail.com
                </h4>
                <WhiteButton
                  px={"px-[1rem]"}
                  py={"py-[0.5rem]"}
                  rounded={"rounded-lg"}
                  name=""
                  showIcon={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantContact;
