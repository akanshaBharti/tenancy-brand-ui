import React, { useEffect, useState } from "react";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import upload from "../../../../assets/image/Owners/comprehensive.svg";
import mainetenance from "../../../../assets/image/Owners/regular.svg";
import InputField from "../../../../components/InputFields/inputField";
import sample_profile from "../../../../assets/image/TenantHome/Sample_profile.svg";
import BlueButton from "../../../../components/Button/BlueButton";
import available from "../../../../assets/image/OwnerHome/available.svg";
import occupied from "../../../../assets/image/OwnerHome/occupied.svg";
import { useNavigate } from "react-router-dom";
import AddNewProperty from "./AddNewProperty";
import userProfile from "../../../../assets/image/TenantHome/userProfile.png";
import useGetOwnerDashboard from "../data/usegetOwnerDashboard";
import usePatchProfilePicture from "pages/Protected/Tenant/data/usePatchProfilePicture";
import useDeleteProfilePicture from "pages/Protected/Tenant/data/useDeleteProfilePicture";
import { showSuccessToast } from "components/toaster/toastHelper";
import useGetOwnerProfile from "../data/useGetOwnerProfile";
import usePatchOwnerProfile from "../data/usePatchOwnerProfile";

const OwnerHome = () => {
  const navigate = useNavigate();
  const [contactEditClicked, setContactEditClicked] = useState(false);
  const [IsAddpropertyClicked, setIsAddPropertyClicked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [emergencyContactName, setemergencyContactName] = useState("");
  const [emergencyContactPerson, setemergencyContactPerson] = useState("");
  const [emergencyContactNumber, setemergencyContactNumber] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const [data, isError, isLoading, getOwnerDashboardDetails] =
    useGetOwnerDashboard();

  const [getData, getIsError, getIsLoading, getOwnerProfileDetails] =
    useGetOwnerProfile();

  const [
    patchOwnerInfoData,
    patchOwnerIsError,
    patchOwnerIsLoading,
    patchOwnerInfoDetails,
  ] = usePatchOwnerProfile();

  const [
    patchProfileData,
    patchProfileIsError,
    patchProfileIsLoading,
    patchProfileDetails,
  ] = usePatchProfilePicture();

  const [
    deleteProfileData,
    deleteProfileIsError,
    deleteProfileIsLoading,
    deleteProfileDetails,
  ] = useDeleteProfilePicture();

  useEffect(() => {
    getOwnerDashboardDetails();
    getOwnerProfileDetails();
  }, []);

  useEffect(() => {
    if (patchOwnerInfoData) {
      showSuccessToast("Profile Details Updated");
      setContactEditClicked(false);
    }
  }, [patchOwnerInfoData]);

  useEffect(() => {
    if (patchProfileData) {
      showSuccessToast("Profile Uploaded");
      getOwnerProfileDetails();
    }
  }, [patchProfileData]);

  useEffect(() => {
    if (deleteProfileData) {
      showSuccessToast("Profile picture deleted successfully");
      getOwnerProfileDetails();
    }
  }, [deleteProfileData]);

  useEffect(() => {
    if (data) {
      setFirstName(data?.data?.name);
      setEmail(data?.data?.email);
      setMobileNumber(data?.data?.phone_number);
      setemergencyContactNumber(data?.data?.emergency_contact_number);
      setemergencyContactPerson(data?.data?.emergency_contact_relation);
      setemergencyContactName(data?.data?.emergency_contact_name);
    }
    if (getData) {
      setProfilePicture(getData?.data?.contact_information?.profile_picture);
    }
  }, [data, getData]);

  const handleUpdateProfile = (e) => {
    const profilePicture = e.target.files[0];
    if (!profilePicture) return;
    const formDataProfile = new FormData();
    formDataProfile.append("profile_picture", profilePicture);
    patchProfileDetails(formDataProfile);
  };

  const deletePicture = () => {
    deleteProfileDetails();
  };

  const handleUpdateOwnerInfo = () => {
    const formDataProfile = new FormData();
    formDataProfile.append("name", firstName);
    formDataProfile.append("email", email);
    formDataProfile.append("mobile_number", mobileNumber);
    formDataProfile.append("emergency_contact_name", emergencyContactName);
    formDataProfile.append("emergency_contact_number", emergencyContactNumber);
    formDataProfile.append(
      "emergency_contact_relation",
      emergencyContactPerson
    );
    patchOwnerInfoDetails(formDataProfile);
  };

  return (
    <>
      {IsAddpropertyClicked ? (
        <AddNewProperty setIsAddPropertyClicked={setIsAddPropertyClicked} />
      ) : (
        <div className="mb-[2rem]">
          <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
            Welcome {user?.full_name}, 👋
          </h4>

          <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1.2rem]">
            {/* add new property */}
            <div className="col-span-6 flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[1.6rem] px-[1.4rem]">
              <div className="flex gap-[0.8rem] items-center">
                <img
                  src={mainetenance}
                  alt="mainetenance icon"
                  className="w-7 h-7"
                />
                <div>
                  <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                    Add a new Property
                  </h4>
                </div>
              </div>
              <WhiteButton
                px={"px-[1rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Add"
                showIcon={true}
                onClick={() => navigate("/protected/owner/add-property")}
                // onClick={() => setIsAddPropertyClicked(true)}
              />
            </div>

            {/* maintenance requests */}
            <div className="col-span-6 flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[1.6rem] px-[1.4rem]">
              <div className="flex gap-[0.8rem] items-center">
                <img src={upload} alt="upload icon" className="w-7 h-7" />
                <div>
                  <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                    Maintenace Requests
                  </h4>
                </div>
              </div>
              <WhiteButton
                px={"px-[1rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Manage"
                showIcon={true}
                onClick={() => navigate("/protected/owner/maintenance")}
              />
            </div>

            {/* owner information */}
            <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
              <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
                <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
                  Owner Information
                </h4>
                {contactEditClicked ? (
                  <BlueButton
                    // onClick={() => setContactEditClicked(false)}
                    onClick={handleUpdateOwnerInfo}
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
                {contactEditClicked ? (
                  <ContactEdit
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    mobileNumber={mobileNumber}
                    profilePicture={profilePicture}
                    emergencyContactName={emergencyContactName}
                    emergencyContactPerson={emergencyContactPerson}
                    emergencyContactNumber={emergencyContactNumber}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setMobileNumber={setMobileNumber}
                    setProfilePicture={setProfilePicture}
                    setemergencyContactNumber={setemergencyContactNumber}
                    setemergencyContactName={setemergencyContactName}
                    setemergencyContactPerson={setemergencyContactPerson}
                    handleUpdateProfile={handleUpdateProfile}
                    deletePicture={deletePicture}
                    handleUpdateOwnerInfo={handleUpdateOwnerInfo}
                  />
                ) : (
                  <ContactGet
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    mobileNumber={mobileNumber}
                    profilePicture={profilePicture}
                    emergencyContactName={emergencyContactName}
                    emergencyContactPerson={emergencyContactPerson}
                    emergencyContactNumber={emergencyContactNumber}
                    setProfilePicture={setProfilePicture}
                    handleUpdateProfile={handleUpdateProfile}
                    deletePicture={deletePicture}
                  />
                )}
              </div>
            </div>

            {/* added properties */}
            <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
              <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
                Added Properties
              </h4>

              <table className="min-w-full bg-white border-t rounded-b-xl">
                <thead className="bg-[#F1F1F1]">
                  <tr className="text-[0.9rem] font-[500] text-lightGray ">
                    <th className="pl-4 pr-[6rem] py-2 text-left font-[500]">
                      Name of the apartment
                    </th>
                    <th className="px-4 py-2 text-left font-[500]">Location</th>
                    <th className="px-4 py-2 text-left font-[500]">Rent</th>
                    <th className="px-4 py-2 text-left font-[500]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.properties?.length === 0 ? (
                    <div className="px-4 py-2 text-[0.9rem] text-red-500">
                      No Property Available
                    </div>
                  ) : (
                    data?.data?.properties?.map((item) => {
                      return (
                        <tr className="text-[0.9rem] text-darkBlue ">
                          <td
                            className="px-4 py-2 hover:underline"
                            onClick={() =>
                              navigate(
                                `/protected/owner/property-preview/${item.id}`
                              )
                            }
                          >
                            {item.building_name}
                          </td>
                          <td className="px-4 py-2 ">{item.area}</td>
                          <td className="px-4 py-2 ">
                            {item.current_rent_amount}
                          </td>
                          <td className="px-4 py-2 flex items-center">
                            {item.availability === true ? (
                              <img src={available} alt="status" className="" />
                            ) : (
                              <img src={occupied} alt="status" className="" />
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* tenancy notifications */}
            <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
              <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
                Tenancy Notifications
              </h4>
              <div className="text-center rounded-b-xl py-[4rem]">
                <p className="p-[0.5rem] font-[500] text-[1rem] text-darkBlue">
                  Stay informed with the latest updates, Important announcment,
                  and <br></br> news from
                  <span className="text-[#F26664]"> Tenancy</span> management to
                  keep you in the loop about any <br></br> changes or events.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OwnerHome;

const ContactGet = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  profilePicture,
  emergencyContactName,
  emergencyContactNumber,
  emergencyContactPerson,
  setProfilePicture,
  deletePicture,
  handleUpdateProfile,
}) => {
  return (
    <div className="flex">
      <div>
        <img
          src={profilePicture ? profilePicture : userProfile}
          alt="profile"
          className="w-[11rem] h-[12rem] rounded-xl"
        />
        <div className="flex gap-[0.5rem] mt-4">
          <input
            type="file"
            id={`file-input-profile1`}
            className="hidden"
            onChange={handleUpdateProfile}
          />
          <WhiteButton
            onClick={() =>
              document.querySelector(`#file-input-profile1`).click()
            }
            px={"px-[1.2rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Update"
          />
          <WhiteButton
            onClick={deletePicture}
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
            value={firstName}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>

        <div className="">
          <label className="input-label text-lightGray">Email</label>
          <InputField
            value={email}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>

        <div className="">
          <label className="input-label text-lightGray">Phone Number</label>
          <InputField
            value={mobileNumber}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>

        <div className="">
          <label className="input-label text-lightGray">
            Emergency Contact Number
          </label>
          <InputField
            value={emergencyContactNumber}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>

        <div className="">
          <label className="input-label text-lightGray">
            Emergency Contact Name
          </label>
          <InputField
            value={emergencyContactName}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-[4rem] ">
          <label className="input-label text-lightGray">
            Emergency Contact Relation
          </label>
          <InputField
            value={emergencyContactPerson}
            readOnly
            className="bg-[#E1FBFF] p-2 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

const ContactEdit = ({
  handleUpdateOwnerInfo,
  firstName,
  lastName,
  email,
  mobileNumber,
  profilePicture,
  emergencyContactName,
  emergencyContactNumber,
  emergencyContactPerson,
  setFirstName,
  setLastName,
  setEmail,
  setMobileNumber,
  setProfilePicture,
  setemergencyContactName,
  setemergencyContactNumber,
  setemergencyContactPerson,
  handleUpdateProfile,
  deletePicture,
}) => {
  return (
    <div className="flex justify-between gap-[1rem]">
      {/* input fields */}
      <div className="w-full ">
        <div className="flex justify-between items-center">
          <h4 className="input-label ">Name</h4>
          <InputField
            type="text"
            placeholder="Enter Name"
            value={firstName} // Concatenate firstName and lastName
            onChange={(e) => setFirstName(e.target.value)}
            // onChange={(e) => {
            //   const fullName = e.target.value;
            //   const [newFirstName, ...rest] = fullName.split(" "); // Split the full name
            //   setFirstName(newFirstName); // Update firstName
            //   setLastName(rest.join(" ")); // Update lastName with remaining parts
            // }}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>

        <div className="mt-[0.7rem] flex justify-between items-center">
          <label className="input-label ">Email</label>
          <InputField
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>

        <div className="mt-[0.7rem] flex justify-between items-center">
          <label className="input-label ">Phone Number</label>
          <InputField
            type="number"
            placeholder="Enter phone number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>

        <div className="mt-[0.7rem] flex justify-between items-center">
          <label className="input-label ">Emergency Contact Number</label>
          <InputField
            type="number"
            placeholder="Enter number"
            value={emergencyContactNumber}
            onChange={(e) => setemergencyContactNumber(e.target.value)}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>

        <div className="mt-[0.7rem] flex justify-between items-center">
          <label className="input-label ">Emergency Contact Name</label>
          <InputField
            type="text"
            placeholder="Enter Name"
            value={emergencyContactName}
            onChange={(e) => setemergencyContactName(e.target.value)}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>

        <div className="mt-[0.7rem] flex justify-between items-center">
          <label className="input-label ">Emergency Contact Relation</label>
          <InputField
            type="text"
            placeholder="Enter Name"
            value={emergencyContactPerson}
            onChange={(e) => setemergencyContactPerson(e.target.value)}
            className="border p-2 rounded-md w-[35%]"
          />
        </div>
      </div>

      {/* profile */}
      <div className="">
        <img
          src={profilePicture ? profilePicture : userProfile}
          alt="profile"
          className="w-[11rem] h-[12rem] rounded-xl"
        />{" "}
        <div className="flex gap-[0.5rem] mt-4">
          <input
            type="file"
            id={`file-input-profile1`}
            className="hidden"
            onChange={handleUpdateProfile}
          />
          <WhiteButton
            onClick={() =>
              document.querySelector(`#file-input-profile1`).click()
            }
            px={"px-[1.2rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Update"
          />
          <WhiteButton
            onClick={deletePicture}
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
