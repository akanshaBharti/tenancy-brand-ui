import React, { useEffect, useState } from "react";
import BlueButton from "../../../../components/Button/BlueButton";
import WhiteButton from "../../../../components/Button/WhiteButton";
import "../../../Public/inputLabel.css";
import copyAddress from "../../../../assets/image/TenantHome/copyAddress.svg";
import userProfile from "../../../../assets/image/TenantHome/userProfile.png";
import InputField from "../../../../components/InputFields/inputField";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";

// APIs
import useGetTenantProfile from "../data/useGetProfile";
import usePostProfileContact from "../data/usePostProfileContact";
import usePostProfileRental from "../data/usePostProfileRental";
import usePatchProfileRental from "../data/usePatchProfileRental";
import usePatchProfileContact from "../data/usePatchProfileContact";
import usePostUploadPan from "../data/usePostUploadPan";
import usePostUploadAadhar from "../data/usePostUploadAadhar";
import usePatchProfilePicture from "../data/usePatchProfilePicture";
import useDeleteProfilePicture from "../data/useDeleteProfilePicture";
import Loader from "components/Loader/Loader";

const TenantProfile = () => {
  const [contactEditClicked, setContactEditClicked] = useState(false);
  const [rentalEditClicked, setRentalEditClicked] = useState(false);
  const [profile, setProfile] = useState([
    {
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: "",
      profile_picture: "",
      tenant_basic_details: {
        emergency_contact_name: "",
        emergency_contact_person: "",
        emergency_contact_number: "",
        pan_card: "",
        aadhar_card: "",
        agreement: "",
      },
      rental_address: {
        flat_number: "",
        building_name: "",
        landmark: "",
        area: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
      },
      subscription_details: {
        subscription_plan: "",
        subscription_plan_display: "",
        fixed_deposit: "",
        rent_per_month: "",
      },
    },
  ]);

  const [getData, , isLoading, getProfileDetails] = useGetTenantProfile();

  const [
    postContactData,
    postContactIsError,
    ,
    postContactDetails,
  ] = usePostProfileContact();
  const [
    patchContactData,
    patchContactIsError,
    ,
    patchContactDetails,
  ] = usePatchProfileContact();
  const [
    ,
    postRentalIsError,
    ,
    ,
  ] = usePostProfileRental();
  const [
    patchRentalData,
    patchRentalIsError,
    ,
    patchRentalDetails,
  ] = usePatchProfileRental();
  const [postPanData, , , postPanDetails] = usePostUploadPan();
  const [
    postAAdharData,
    ,
    ,
    postAAdharDetails,
  ] = usePostUploadAadhar();
  const [
    patchProfileData,
    ,
    ,
    patchProfileDetails,
  ] = usePatchProfilePicture();
  const [
    deleteProfileData,
    ,
    ,
    deleteProfileDetails,
  ] = useDeleteProfilePicture();

  useEffect(() => {
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postContactData) {
      showSuccessToast("Contact Details Uploaded");
      setContactEditClicked(false);
      getProfileDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postContactData]);

  useEffect(() => {
    if (patchProfileData) {
      showSuccessToast("Profile Uploaded");
      getProfileDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patchProfileData]);

  useEffect(() => {
    if (postContactIsError) {
      showErrorToast("Something went wrong");
    }
  }, [postContactIsError]);
  useEffect(() => {
    if (patchContactIsError) {
      showErrorToast("Something went wrong");
    }
  }, [patchContactIsError]);

  useEffect(() => {
    if (patchContactData) {
      showSuccessToast("Contact Details Updated");
      setContactEditClicked(false);
      getProfileDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patchContactData]);

  useEffect(() => {
    if (postRentalIsError) {
      showErrorToast("Try again");
    }
  }, [postRentalIsError]);
  useEffect(() => {
    if (patchRentalIsError) {
      showErrorToast("Try again");
    }
  }, [patchRentalIsError]);
  useEffect(() => {
    if (deleteProfileData) {
      showSuccessToast("Profile picture deleted successfully");
      getProfileDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteProfileData]);

  useEffect(() => {
    if (patchRentalData) {
      showSuccessToast("Rental Details Updated");
      setRentalEditClicked(false);
      getProfileDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patchRentalData]);
  useEffect(() => {
    if (postPanData) {
      showSuccessToast("Pan Uploaded");
      // setContactEditClicked(false);
    } else if (postAAdharData) {
      showSuccessToast("aadhar uploaded");
    }
  }, [postPanData, postAAdharData]);

  useEffect(() => {
    if (getData?.data) {
      setProfile(getData?.data);
    }
  }, [getData]);

  const ContactEdit = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [emergencyContactName, setemergencyContactName] = useState("");
    const [emergencyContactPerson, setemergencyContactPerson] = useState("");
    const [emergencyContactNumber, setemergencyContactNumber] = useState("");
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
      const errors = {};
      if (!firstName) {
        errors.firstName = "Name is required";
      } else if (!/^[A-Za-z\s]+$/.test(firstName.trim())) {
        errors.firstName = "Area can only contain letters.";
      }
      if (!mobileNumber) {
        errors.mobileNumber = "mobileNumber is required";
      }
      if (!email) {
        errors.email = "email is required";
      }
      if (!emergencyContactName) {
        errors.emergencyContactName = "emergencyContactName is required";
      }
      if (!emergencyContactNumber) {
        errors.emergencyContactNumber = "emergencyContactNumber is required";
      }
      if (!emergencyContactPerson) {
        errors.emergencyContactPerson = "emergencyContactPerson is required";
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    useEffect(() => {
      if (getData?.data) {
        setFirstName(getData?.data?.first_name);
        setLastName(getData?.data?.last_name);
        setEmail(getData?.data?.email);
        setMobileNumber(getData?.data?.mobile_number);
        setProfilePicture(getData?.data?.profile_picture);
        setemergencyContactName(
          getData?.data?.tenant_basic_details?.emergency_contact_name
        );
        setemergencyContactPerson(
          getData?.data?.tenant_basic_details?.emergency_contact_person
        );
        setemergencyContactNumber(
          getData?.data?.tenant_basic_details?.emergency_contact_number
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleContactSaveChanges = () => {
      const formData = new FormData();
      const formDataProfile = new FormData();
      // formData.append("name", firstName);
      formData.append("name", `${firstName} ${lastName}`);
      formData.append("email", email);
      formData.append("mobile_number", mobileNumber);
      formData.append("emergency_contact_number", emergencyContactNumber);
      formData.append("emergency_contact_name", emergencyContactName);
      formData.append("emergency_contact_person", emergencyContactPerson);
      formDataProfile.append("profile_picture", profilePicture);
      if (validateInputs()) {
        if (getData?.data?.tenant_basic_details === null) {
          postContactDetails(formData);
        } else {
          patchContactDetails(formData);
          patchProfileDetails(formDataProfile);
        }
      }
    };

    const deletePicture = () => {
      deleteProfileDetails();
    };

    return (
      <div className="">
        <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
          <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
            Contact Information
          </h4>
          <BlueButton
            onClick={handleContactSaveChanges}
            px={"px-[0.9rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Save Changes"
          />
        </div>
        <div className="flex justify-between ">
          {/* input fields */}
          <div className=" w-full p-[0.8rem]">
            <div className="flex justify-between items-center">
              <h4 className="input-label ">Name</h4>
              {/* <InputField
                type="text"
                placeholder="Enter Name"
                className="border p-2 rounded-md w-[35%]"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              /> */}

              <InputField
                type="text"
                placeholder="Enter Full Name"
                className="border p-2 rounded-md w-[35%]"
                value={`${firstName} ${lastName}`} // Concatenate firstName and lastName
                onChange={(e) => {
                  const fullName = e.target.value;
                  const [newFirstName, ...rest] = fullName.split(" "); // Split the full name
                  setFirstName(newFirstName); // Update firstName
                  setLastName(rest.join(" ")); // Update lastName with remaining parts
                }}
              />
            </div>
            <div className="flex justify-end">
              {errors.firstName && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="mt-[0.7rem] flex justify-between items-center">
              <label className="input-label ">Email</label>
              <InputField
                type="email"
                placeholder="Enter Email"
                className="border p-2 rounded-md w-[35%]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              {errors.email && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.email}
                </span>
              )}
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
            </div>{" "}
            <div className="flex justify-end">
              {errors.mobileNumber && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.mobileNumber}
                </span>
              )}
            </div>
            <div className="mt-[0.7rem]  flex justify-between items-center">
              <label className="input-label ">Emergency Contact</label>
              <InputField
                type="number"
                placeholder="Enter number"
                value={emergencyContactNumber}
                onChange={(e) => setemergencyContactNumber(e.target.value)}
                className="border p-2 rounded-md w-[35%]"
              />
            </div>{" "}
            <div className="flex justify-end">
              {errors.emergencyContactNumber && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.emergencyContactNumber}
                </span>
              )}
            </div>
            <div className=" mt-[0.7rem] flex justify-between  items-center">
              <label className="input-label ">
                Emergency Contact Person Name
              </label>
              <InputField
                type="text"
                placeholder="Enter Name "
                value={emergencyContactName}
                onChange={(e) => setemergencyContactName(e.target.value)}
                className="border p-2 rounded-md w-[35%]"
              />{" "}
            </div>
            <div className="flex justify-end">
              {errors.emergencyContactName && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.emergencyContactName}
                </span>
              )}
            </div>
            <div className="mt-[0.7rem] flex justify-between  items-center">
              <label className="input-label ">Emergency Contact Relation</label>
              <InputField
                type="text"
                placeholder="Enter Name "
                value={emergencyContactPerson}
                onChange={(e) => setemergencyContactPerson(e.target.value)}
                className="border p-2 rounded-md w-[35%]"
              />{" "}
            </div>
            <div className="flex justify-end">
              {errors.emergencyContactPerson && (
                <span className=" text-red-500 text-[0.7rem]">
                  {errors.emergencyContactPerson}
                </span>
              )}
            </div>
          </div>

          {/* profile */}
          <div className=" p-[0.8rem]">
            <div className="flex justify-center">
              <img
                src={profilePicture ? profilePicture : userProfile}
                alt="profile"
                className="w-[11rem] h-[12rem] rounded-xl "
              />
            </div>
            <div className="flex gap-[0.5rem] mt-4">
              <input
                type="file"
                // accept=".pdf"
                id={`file-input-profile`}
                className="hidden"
                onChange={(e) => setProfilePicture(e.target.files[0])}
              />
              <WhiteButton
                onClick={() =>
                  document.querySelector(`#file-input-profile`).click()
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
      </div>
    );
  };

  const ContactGet = ({ profile }) => {
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
      if (getData?.data) {
        setProfilePicture(getData?.data?.profile_picture);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    return (
      <div>
        <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
          <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
            Contact Information
          </h4>
          <BlueButton
            onClick={() => setContactEditClicked(true)}
            px={"px-[0.9rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Edit Details"
          />
        </div>
        <div className="flex p-[0.8rem]">
          <div>
            <div className="flex justify-center">
              <img
                src={profilePicture ? profilePicture : userProfile}
                alt="profile"
                className="w-[11rem] h-[12rem] rounded-xl"
              /> 
            </div>
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
                readOnly
                type="text"
                value={`${profile?.first_name} ${profile?.last_name}`}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">Email</label>
              <InputField
                readOnly
                value={profile?.email}
                type="email"
                // placeholder="Enter Name"
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">Phone Number</label>
              <InputField
                value={profile?.mobile_number}
                type="number"
                readOnly
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Emergency Contact Number
              </label>
              <InputField
                value={profile?.tenant_basic_details?.emergency_contact_number}
                type="number"
                readOnly
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Emergency Contact Name
              </label>
              <InputField
                value={profile?.tenant_basic_details?.emergency_contact_name}
                type="text"
                readOnly
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div className="mb-[4rem] ">
              <label className="input-label text-lightGray">
                Emergency Contact Relation
              </label>
              <InputField
                value={profile?.tenant_basic_details?.emergency_contact_person}
                type="text"
                readOnly
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RentalGet = ({ profile }) => {
    return (
      <>
        <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
          <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
            Rental Information
          </h4>

          <BlueButton
            onClick={() => setRentalEditClicked(true)}
            px={"px-[0.9rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Edit Details"
          />
        </div>
        <div className="p-[0.8rem]">
          <div className="flex justify-between">
            <label className="input-label text-lightGray">
              Property Address
            </label>
            <img src={copyAddress} alt="copy address" className="w-[6rem]" />
          </div>
          <div className="mt-[1rem] grid grid-cols-4 gap-[1rem]">
            <div>
              <label className="input-label text-lightGray">
                Flat/House Number
              </label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.flat_number}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Building Name
              </label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.building_name}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">Landmark</label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.landmark}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">Area</label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.area}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">Pincode</label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.pincode}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">City</label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.city}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">State</label>
              <InputField
                readOnly
                type="text"
                value={profile?.rental_address?.state}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
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
                readOnly
                type="text"
                value={profile?.subscription_details?.subscription_plan_display}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Fixed Deposit
              </label>
              <InputField
                readOnly
                value={profile?.subscription_details?.fixed_deposit}
                type="number"
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Rent Per Month
              </label>
              <InputField
                readOnly
                type="number"
                value={profile?.subscription_details?.rent_per_month}
                className="bg-[#E1FBFF] p-2 rounded-md w-full"
              />
            </div>
          </div>

          <hr className="" />

          <label className="input-label text-lightGray">Documents</label>
          <div className="flex mt-[1rem] gap-[3rem]">
            <h4 className="text-[1rem]">Download Rent Agreement PDF</h4>
            <WhiteButton
              onClick={() => {
                if (profile?.tenant_basic_details?.agreement) {
                  window.open(
                    profile?.tenant_basic_details?.agreement,
                    "_blank"
                  ); // Opens the rentAgreement in a new tab
                } else {
                  showErrorToast(
                    "Rent agreement not available. Upload Agreement"
                  ); // Optional: Inform the user if it's missing
                }
              }}
              name="Download"
              px={"px-[2.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>

          <div className="flex my-[0.8rem] gap-[10.5rem]">
            <h4 className="text-[1rem]">Upload Aadhar</h4>
            <WhiteButton
              onClick={() => {
                if (profile?.tenant_basic_details?.aadhar_card) {
                  window.open(
                    profile?.tenant_basic_details?.aadhar_card,
                    "_blank"
                  ); // Opens the rentAgreement in a new tab
                } else {
                  showErrorToast("Aadhar not available. Upload Aadhar"); // Optional: Inform the user if it's missing
                }
              }}
              name="Download"
              px={"px-[2.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>

          <div className="flex gap-[9.8rem]">
            <h4 className="text-[1rem]">Upload Pan Card</h4>
            <WhiteButton
              onClick={() => {
                if (profile?.tenant_basic_details?.pan_card) {
                  window.open(
                    profile?.tenant_basic_details?.pan_card,
                    "_blank"
                  ); // Opens the rentAgreement in a new tab
                } else {
                  showErrorToast("Pan not available.Upload Pan"); // Optional: Inform the user if it's missing
                }
              }}
              name="Download"
              px={"px-[2.1rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>
        </div>
      </>
    );
  };

  const RentalEdit = () => {
    const [flatNo, setFlatNo] = useState("");
    const [buildingName, setbuildingName] = useState("");
    const [landmark, setlandmark] = useState("");
    const [area, setarea] = useState("");
    const [pincode, setpincode] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [country, setcountry] = useState("");
    const [panCard, setpanCard] = useState("");
    const [aadharCard, setaadharCard] = useState("");
    const [rentAgreement, setrentAgreement] = useState("");

    const [errors, setErrors] = useState({});

    const validateInputs = () => {
      const errors = {};
      if (!flatNo) {
        errors.flatNo = "Flat/House number is required.";
      } else if (isNaN(flatNo) || !/^\d+$/.test(flatNo)) {
        errors.flatNo = "Flat/House number must be a whole no.";
      }
      if (!buildingName) {
        errors.buildingName = "Building Name is required";
      } else if (!/^[A-Za-z\s]+$/.test(buildingName)) {
        errors.buildingName = "Building Name can only contain letters.";
      }

      if (!landmark) {
        errors.landmark = "Landmark Name is required";
      } else if (!/^[A-Za-z\s]+$/.test(landmark)) {
        errors.landmark = "Landmark Name can only contain letters.";
      }
      if (!area) {
        errors.area = "Area is required.";
      } else if (!/^[A-Za-z\s]+$/.test(area)) {
        errors.area = "Area can only contain letters.";
      }

      if (!city) {
        errors.city = "City is required.";
      } else if (!/^[A-Za-z\s]+$/.test(city)) {
        errors.city = "City can only contain letters.";
      }

      if (!pincode) {
        errors.pincode = "Pincode is required.";
      } else if (!/^[1-9][0-9]{5}$/.test(pincode)) {
        errors.pincode =
          "Pincode must be a 6-digit number and cannot start with 0.";
      }

      if (!state) errors.state = "State is required.";

      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    useEffect(() => {
      if (getData?.data) {
        setFlatNo(getData?.data?.rental_address?.flat_number);
        setbuildingName(getData?.data?.rental_address?.building_name);
        setlandmark(getData?.data?.rental_address?.landmark);
        setarea(getData?.data?.rental_address?.area);
        setpincode(getData?.data?.rental_address?.pincode);
        setcity(getData?.data?.rental_address?.city);
        setstate(getData?.data?.rental_address?.state);
        setcountry(getData?.data?.rental_address?.country);
        setrentAgreement(getData?.data?.tenant_basic_details?.agreement);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRentalSubmit = () => {
      const formData = new FormData();
      const formDataPAN = new FormData();
      const formDataAadhar = new FormData();
      formData.append("flat_number", flatNo);
      formData.append("building_name", buildingName);
      formData.append("landmark", landmark);
      formData.append("area", area);
      formData.append("pincode", pincode);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("country", country);
      formDataPAN.append("pan_card", panCard);
      formDataAadhar.append("aadhar_card", aadharCard);
      if (validateInputs()) {
        patchRentalDetails(formData);
        postPanDetails(formDataPAN);
        postAAdharDetails(formDataAadhar);
      }
    };

    return (
      <>
        <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
          <h4 className=" font-[500] text-[1.1rem] text-darkBlue ">
            Rental Information
          </h4>
          <BlueButton
            onClick={handleRentalSubmit}
            px={"px-[0.9rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="Save Changes"
          />
        </div>
        <div className="p-[0.8rem]">
          <h4 className="input-label text-lightGray">Property Address</h4>
          <div className="mt-[1rem] flex justify-between items-center">
            <h4 className="text-[1rem]">Flat/House Number</h4>
            <InputField
              type="text"
              placeholder="Flat/House Number"
              value={flatNo}
              onChange={(e) => setFlatNo(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
          </div>{" "}
          <div className="flex justify-end">
            {errors.flatNo && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.flatNo}
              </span>
            )}
          </div>
          <div className="mt-[0.6rem] flex justify-between items-center">
            <h4 className="text-[1rem]">Building Name</h4>
            <InputField
              type="text"
              placeholder="Building Name"
              value={buildingName}
              onChange={(e) => setbuildingName(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
          </div>
          <div className="flex justify-end">
            {errors.buildingName && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.buildingName}
              </span>
            )}
          </div>
          <div className="mt-[0.6rem] flex justify-between items-center">
            <h4 className="text-[1rem]">Landmark</h4>
            <InputField
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setlandmark(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
          </div>
          <div className="flex justify-end">
            {errors.landmark && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.landmark}
              </span>
            )}
          </div>
          <div className="mt-[0.6rem] flex justify-between items-center">
            <h4 className="text-[1rem]">Area</h4>
            <InputField
              type="text"
              placeholder="Area"
              value={area}
              onChange={(e) => setarea(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
          </div>
          <div className="flex justify-end">
            {errors.area && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.area}
              </span>
            )}
          </div>
          <div className="mt-[0.6rem] flex justify-between items-center">
            <h4 className="text-[1rem]">Pin Code</h4>
            <InputField
              type="text"
              placeholder="Pin Code"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
          </div>
          <div className="flex justify-end">
            {errors.pincode && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.pincode}
              </span>
            )}
          </div>
          <div className="mt-[0.6rem] flex justify-between items-center">
            <h4 className="text-[1rem]">City and State</h4>
            {/* <div className="flex gap-[1rem]"> */}
            {/* <InputField
                type="text"
                placeholder="City and State"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="border p-2 rounded-md w-[25%]"
              /> */}
            <InputField
              type="text"
              placeholder="City and State"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="border p-2 rounded-md w-[25%]"
            />
            {/* </div> */}
          </div>
          <div className="flex justify-end">
            {errors.state && (
              <span className=" text-red-500 text-[0.7rem] ">
                {errors.state}
              </span>
            )}
          </div>
          <hr />
          <label className="input-label text-lightGray">Documents</label>
          <div className="flex justify-between mt-[1rem] ">
            <h4 className="text-[1rem]">Upload Aadhar</h4>
            <input
              type="file"
              // accept=".pdf"
              id={`file-input-aadhar`}
              className="hidden"
              onChange={(e) => setaadharCard(e.target.files[0])}
            />
            <WhiteButton
              onClick={() =>
                document.querySelector(`#file-input-aadhar`).click()
              }
              name="Upload"
              px={"px-[2.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>
          <div className="flex justify-between my-[0.8rem]">
            <h4 className="text-[1rem]">Upload Pan Card</h4>
            <input
              type="file"
              // accept=".pdf"
              id={`file-input-pan`}
              className="hidden"
              onChange={(e) => setpanCard(e.target.files[0])}
            />
            <WhiteButton
              onClick={() => document.querySelector(`#file-input-pan`).click()}
              name="Upload"
              px={"px-[2.2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>
          <div className="flex justify-between ">
            <h4 className="text-[1rem]">Download Rent Agreement PDF</h4>
            <WhiteButton
              onClick={() => {
                if (rentAgreement) {
                  window.open(rentAgreement, "_blank"); // Opens the rentAgreement in a new tab
                } else {
                  showErrorToast(
                    "Rent agreement not available. Upload Agreement"
                  ); // Optional: Inform the user if it's missing
                }
              }}
              name="Download"
              px={"px-[1.5rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="mb-[4rem]">
        <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
          My Profile
        </h4>
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
          <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
            {/* contact information */}

            <div className="rounded-b-xl ">
              {contactEditClicked ? (
                <ContactEdit />
              ) : (
                <ContactGet profile={profile} />
              )}
            </div>
          </div>

          {/* rental info */}
          <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
            {/* <div className="px-[0.6rem] py-[0.8rem] flex justify-between items-center rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
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
          </div> */}
            <div className="rounded-b-xl ">
              {rentalEditClicked ? (
                <RentalEdit />
              ) : (
                <RentalGet profile={profile} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantProfile;
