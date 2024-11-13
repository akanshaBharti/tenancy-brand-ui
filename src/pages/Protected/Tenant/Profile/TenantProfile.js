import React, { useState } from "react";
import BlueButton from "../../../../components/Button/BlueButton";
import WhiteButton from "../../../../components/Button/WhiteButton";
import "../../../Public/inputLabel.css";

// images
import sample_profile from "../../../../assets/image/TenantHome/Sample_profile.svg";
import copyAddress from "../../../../assets/image/TenantHome/copyAddress.svg";
import InputField from "../../../../components/InputFields/inputField";

const TenantProfile = () => {
  const [contactEditClicked, setContactEditClicked] = useState(false);
  const [rentalEditClicked, setRentalEditClicked] = useState(false);
  const ContactEdit = () => {
    return (
      <div className="flex justify-between">
        {/* input fields */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="input-label ">Name</h4>
            <InputField
              type="text"
              placeholder="Enter Name"
              // value="Tenant 1"
              className="border"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="input-label ">Email</label>
            <InputField
              type="email"
              placeholder="Enter Email"
              // value="Tenant 1"
              className="border"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="input-label ">Phone Number</label>
            <InputField
              type="number"
              placeholder="Enter phone number"
              // value="Tenant 1"
              className="border"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="input-label ">Emergency Contact</label>
            <InputField
              type="number"
              placeholder="Enter number"
              // value="Tenant 1"
              className="border"
            />
          </div>

          <div className="flex justify-between  items-center">
            <label className="input-label ">
              Emergency Contact Person Name
            </label>
            <div>
              <InputField
                type="text"
                placeholder="Enter Name "
                // value="Tenant 1"
                className="border"
              />
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="">
          <img src={sample_profile} alt="profile" />
          <div className="flex gap-[0.5rem] mt-4">
            <WhiteButton
              px={"px-[1.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Update"
            />
            <WhiteButton
              px={"px-[1.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Remove"
            />{" "}
          </div>
        </div>
      </div>
    );
  };

  const ContactGet = () => {
    return (
      <div className="flex">
        <div>
          <img src={sample_profile} alt="profile" />
          <div className="flex gap-[0.5rem] mt-4">
            <WhiteButton
              px={"px-[1.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Update"
            />
            <WhiteButton
              px={"px-[1.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Remove"
            />{" "}
          </div>
        </div>
        {/* input fields */}
        <div className="grid grid-cols-3 gap-[1rem] px-[2rem] py-[0.5rem] ">
          <div className="">
            <label className="input-label text-lightGray">Name</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Tenant 1"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div className="">
            <label className="input-label text-lightGray">Email</label>
            <InputField
              type="email"
              // placeholder="Enter Name"
              value="rohit12344@gmail.com"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div className="">
            <label className="input-label text-lightGray">Phone Number</label>
            <InputField
              type="number"
              // placeholder="Enter Name"
              value="34567898"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div className="">
            <label className="input-label text-lightGray">
              Emergency Contact Number
            </label>
            <InputField
              type="number"
              // placeholder="Enter Name"
              value="34567898"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div className="">
            <label className="input-label text-lightGray">
              Emergency Contact Name
            </label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Prakash"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div className="mb-[4rem]">
            <label className="input-label text-lightGray">
              Emergency Contact Relation
            </label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Father"
              className="bg-[#E1FBFF]"
            />
          </div>
        </div>
      </div>
    );
  };

  const RentalGet = () => {
    return (
      <>
        <div className="flex justify-between">
          <label className="input-label text-lightGray">Property Address</label>
          <img src={copyAddress} alt="copy address" className="w-[6rem]" />
        </div>
        <div className="mt-[1rem] grid grid-cols-4 gap-[1rem]">
          <div>
            <label className="input-label text-lightGray">
              Flat/House Number
            </label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="221B, first floor"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Building Name</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Alekhya Apartments"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Landmark</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Near Ratanadeep"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Area</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Gachibowli"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Pincode</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="567889"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">City</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Hyderabad"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">State</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Telangana"
              className="bg-[#E1FBFF]"
            />
          </div>
        </div>
        <hr />
        <label className="input-label text-lightGray">
          Subscription Details
        </label>
        <div className="mt-[1rem] grid grid-cols-4 gap-[1rem]">
          <div>
            <label className="input-label text-lightGray">Plan</label>
            <InputField
              type="text"
              // placeholder="Enter Name"
              value="Premium Plan"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Fixed Deposit</label>
            <InputField
              type="number"
              // placeholder="Enter Name"
              value="5678"
              className="bg-[#E1FBFF]"
            />
          </div>

          <div>
            <label className="input-label text-lightGray">Rent Per Month</label>
            <InputField
              type="number"
              // placeholder="Enter Name"
              value="456789"
              className="bg-[#E1FBFF]"
            />
          </div>
        </div>

        <hr className="" />

        <label className="input-label text-lightGray">Documents</label>
        <div className="flex mt-[1rem] gap-[3rem]">
          <h4 className="text-[1rem]">Download Rent Agreement PDF</h4>
          <WhiteButton
            name="Download"
            px={"px-[1.5rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>

        <div className="flex my-[0.8rem] gap-[10.5rem]">
          <h4 className="text-[1rem]">Upload Aadhar</h4>
          <WhiteButton
            name="Upload"
            px={"px-[2.2rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>

        <div className="flex gap-[9.8rem]">
          <h4 className="text-[1rem]">Upload Pan Card</h4>
          <WhiteButton
            name="Upload"
            px={"px-[2.1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>
      </>
    );
  };

  const RentalEdit = () => {
    return (
      <>
        <h4 className="input-label text-lightGray">Property Address</h4>
        <div className="mt-[1rem] flex justify-between items-center">
          <h4 className="text-[1rem]">Flat/House Number</h4>
          <InputField
            type="text"
            placeholder="Flat/House Number"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <div className="mt-[0.6rem] flex justify-between items-center">
          <h4 className="text-[1rem]">Building Name</h4>
          <InputField
            type="text"
            placeholder="Building Name"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <div className="mt-[0.6rem] flex justify-between items-center">
          <h4 className="text-[1rem]">Landmark</h4>
          <InputField
            type="text"
            placeholder="Landmark"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <div className="mt-[0.6rem] flex justify-between items-center">
          <h4 className="text-[1rem]">Area</h4>
          <InputField
            type="text"
            placeholder="Area"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <div className="mt-[0.6rem] flex justify-between items-center">
          <h4 className="text-[1rem]">Pin Code</h4>
          <InputField
            type="text"
            placeholder="Pin Code"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <div className="mt-[0.6rem] flex justify-between items-center">
          <h4 className="text-[1rem]">City and State</h4>
          <InputField
            type="text"
            placeholder="City and State"
            // value="Tenant 1"
            className="border"
          />
        </div>

        <hr />
        <label className="input-label text-lightGray">Documents</label>

        <div className="flex justify-between mt-[1rem] ">
          <h4 className="text-[1rem]">Upload Aadhar</h4>
          <WhiteButton
            name="Upload"
            px={"px-[2.2rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>

        <div className="flex justify-between my-[0.8rem]">
          <h4 className="text-[1rem]">Upload Pan Card</h4>
          <WhiteButton
            name="Upload"
            px={"px-[2.2rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>
        <div className="flex justify-between ">
          <h4 className="text-[1rem]">Download Rent Agreement PDF</h4>
          <WhiteButton
            name="Download"
            px={"px-[1.5rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
          />
        </div>
      </>
    );
  };

  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        My Profile
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
        <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
          {/* contact information */}
          <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
              Contact Information
            </h4>
            {contactEditClicked ? (
              <BlueButton
                onClick={() => setContactEditClicked(false)}
                px={"px-[0.9rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Save Changes"
              />
            ) : (
              <BlueButton
                onClick={() => setContactEditClicked(true)}
                px={"px-[0.9rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Edit Details"
              />
            )}
          </div>
          <div className="rounded-b-xl p-[0.8rem] border-t">
            {contactEditClicked ? <ContactEdit /> : <ContactGet />}
          </div>
        </div>

        {/* rental info */}
        <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
          <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
              Rental Information
            </h4>
            {rentalEditClicked ? (
              <BlueButton
                onClick={() => setRentalEditClicked(false)}
                px={"px-[0.9rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Save Changes"
              />
            ) : (
              <BlueButton
                onClick={() => setRentalEditClicked(true)}
                px={"px-[0.9rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Edit Details"
              />
            )}
          </div>
          <div className="rounded-b-xl p-[0.8rem] border-t">
            {rentalEditClicked ? <RentalEdit /> : <RentalGet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantProfile;
