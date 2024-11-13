import React from "react";
import "../../../Public/inputLabel.css";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import chat from "../../../../assets/image/TenantHome/chat.svg";
import call from "../../../../assets/image/TenantHome/call.svg";
import mail from "../../../../assets/image/TenantHome/mail.svg";

const TenantContact = () => {
  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        Contact Tenancy
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] ">
        <div className="col-span-12 mb-[1rem]">
          <h4 className="font-[500] text-[1.5rem] text-darkBlue ml-1">
            Need Our Assistance?
          </h4>
          <p className="text-lightGray text-[0.9rem] font-[500]">
            Reach out to our team for personalized support, inquiries about your
            account, or any other questions you may have.<br></br> Use our
            contact options to get assistance quickly and effectively.
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
              <select className="input-box">
                <option>Select an option</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="mb-[1rem] flex flex-col w-full">
              <label className="input-label text-lightGray">Description</label>
              <textarea
                type="text"
                className="text-area h-[8rem]"
                value="Test issue"
              />
            </div>
            <div>
              <label className="input-label text-lightGray ">
                Upload Photos (Optional)
              </label>
              <div className="w-[30%]">
                <WhiteButton
                  px={"px-[2.2rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Upload"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-white font-[500] rounded-lg bg-[#808080] py-2 px-3 mt-[1.5rem]">
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
    </div>
  );
};

export default TenantContact;
