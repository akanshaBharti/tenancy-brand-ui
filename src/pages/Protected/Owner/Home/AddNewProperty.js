import React, { useEffect, useState } from "react";
import WhiteButton from "../../../../components/Button/WhiteButton";
import "../../../Public/inputLabel.css";
import InputField from "../../../../components/InputFields/inputField";
import YellowButton from "../../../../components/Button/YellowButton";
import SendForVerification from "./SendForVerification";
import { showSuccessToast } from "components/toaster/toastHelper";
import usePostCreateLandDetails from "../data/usePostCreateLandDetails";
import { useLocation } from "react-router-dom";

const AddNewProperty = ({ setIsAddPropertyClicked }) => {
  const location = useLocation();
  const [isSendClicked, setIsSendClicked] = useState(false);
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [fullAddress, setfullAddress] = useState("");
  const [mapLink, setmapLink] = useState("");
  const [propertyType, setpropertyType] = useState("");
  const [propertyPlan, setpropertyPlan] = useState("");
  const [noOfBed, setnoOfBed] = useState("");
  const [noOfBath, setnoOfBath] = useState("");
  const [totalSqFootage, settotalSqFootage] = useState("");
  const [propertyCondition, setpropertyCondition] = useState("");
  const [amenties, setamenties] = useState("");
  const [availability, setavailability] = useState("");
  const [moveInDate, setmoveInDate] = useState("");
  const [currentMontRent, setcurrentMontRent] = useState("");
  const [expectedRent, setexpectedRent] = useState("");
  const [securityDeposit, setsecurityDeposit] = useState("");
  const [leaseDuration, setleaseDuration] = useState("");
  const [visitationHours, setvisitationHours] = useState("");
  const id = location?.state?.id;
  const data = location?.state?.getData;

  const [postData, postIsError, postIsLoading, postLandDetails] =
    usePostCreateLandDetails();

  useEffect(() => {
    if (postData) {
      setIsSendClicked(true);
      showSuccessToast("Land Details Posted");
    }
  }, [postData]);

  useEffect(() => {
    if (data) {
      setfullAddress(
        `${data?.flat_no}, ${data?.building_name}, ${data?.area}, ${data?.landmark}, ${data?.city}, ${data?.state}, ${data?.country}, ${data?.pincode}`
      );
      setmapLink(data?.google_map_link);
      setpropertyType(data?.property_type);
      setpropertyPlan(data?.property_plan);
      setnoOfBed(data?.number_of_bed_rooms);
      setnoOfBath(data?.number_of_bath_rooms);
      settotalSqFootage(data?.total_square_feet);
      setpropertyCondition(data?.property_condition);
      // setamenties();
      setavailability(data?.renting_details?.availability);
      setmoveInDate(data?.renting_details?.move_in_date);
      setcurrentMontRent(data?.renting_details?.current_monthly_rent_amount);
      setexpectedRent(data?.renting_details?.expected_rent_amount);
      setsecurityDeposit(data?.renting_details?.security_deposit);
      setleaseDuration(data?.renting_details?.lease_duration);
      setvisitationHours(data?.renting_details?.visitation_hours);
    }
  }, [data]);

  // const handleSendForVerification = () => {
  //   setIsSendClicked(true);
  // };

  const handleClose = () => {
    setIsSendClicked(false);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("full_address", fullAddress);
    formData.append("google_map_link", mapLink);
    formData.append("property_plan", propertyPlan);
    formData.append("property_type", propertyType);
    formData.append("number_of_bed_rooms", noOfBed);
    formData.append("number_of_bath_rooms", noOfBath);
    formData.append("total_square_feet", totalSqFootage);
    formData.append("property_condition", propertyCondition);
    // formData.append("unique_aminities", uploadPhoto);
    formData.append("unique_aminities", amenties);
    formData.append("media[0][media_type]", "photo");
    formData.append("media[0][photo]", uploadPhoto);
    formData.append("media[1][media_type]", "video");
    formData.append("media[1][video]", uploadPhoto);
    formData.append("renting_details[availability]", availability);
    formData.append("renting_details[move_in_date]", moveInDate);
    formData.append(
      "renting_details[current_monthly_rent_amount]",
      currentMontRent
    );
    formData.append("renting_details[expected_rent_amount]", expectedRent);
    formData.append("renting_details[security_deposit]", securityDeposit);
    formData.append("renting_details[lease_duration]", leaseDuration);
    formData.append("renting_details[visitation_hours]", visitationHours);
    postLandDetails(formData);
  };

  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        {data ? "Edit Property" : "Add a new property"}
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1.2rem]">
        {/* upload photos */}
        <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Upload Photos or Videos
          </h4>

          <div className="flex flex-col rounded-b-xl py-[2rem]">
            {data && (
              <div className="flex mb-2 gap-[1rem] justify-center">
                {data?.media?.map((item, index) => (
                  <img
                    src={item.photo}
                    alt=""
                    className="w-[10rem] h-[6rem] rounded-md"
                  />
                ))}
              </div>
            )}
            <div className="flex justify-center ">
              <input
                type="file"
                accept=".jpeg, .png, .jpg"
                id={`file-input-photo`}
                className="hidden"
                onChange={(e) => setUploadPhoto(e.target.files[0])}
              />
              <WhiteButton
                onClick={() =>
                  document.querySelector(`#file-input-photo`).click()
                }
                px={"px-[3.5rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Upload"
              />
            </div>
          </div>
        </div>

        {/* property details */}
        <div className="col-span-6 bg-white rounded-xl border border-[#D1D5DB]">
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Property Details
          </h4>
          <div className="p-[0.8rem] mt-[0.5rem] flex flex-col gap-2">
            <div>
              <label className="input-label text-lightGray">Full Address</label>
              <InputField
                type="text"
                placeholder="Flat/Block No, Building Name, area, landmark, city, state, country, pincode"
                value={fullAddress}
                onChange={(e) => setfullAddress(e.target.value)}
                className="input-box"
              />
            </div>
            <div>
              <label className="input-label text-lightGray">
                Google Maps Link
              </label>
              <InputField
                type="text"
                placeholder="Link URL"
                value={mapLink}
                onChange={(e) => setmapLink(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Property Type
              </label>
              <select
                className="input-box text-lightGray"
                value={propertyType}
                onChange={(e) => setpropertyType(e.target.value)}
              >
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="building">Building</option>
                <option value="individual">Individual</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Property Plan
              </label>
              <select
                className="input-box text-lightGray"
                value={propertyPlan}
                onChange={(e) => setpropertyPlan(e.target.value)}
              >
                <option value="">Select Property Plan</option>
                <option value="1">Premium Plan</option>
                <option value="2">Standard Plan</option>
                <option value="3">Shared Plan</option>
              </select>
            </div>

            <div className="flex gap-1 mt-2">
              <div className="">
                <label className="input-label text-lightGray">
                  No. of Bedrooms
                </label>
                <InputField
                  type="number"
                  placeholder="No of Bedrooms"
                  value={noOfBed}
                  onChange={(e) => setnoOfBed(e.target.value)}
                  className="input-box"
                />
              </div>

              <div className="">
                <label className="input-label text-lightGray">
                  No. of Bathrooms
                </label>
                <InputField
                  type="number"
                  placeholder="No. of Bathrooms"
                  value={noOfBath}
                  onChange={(e) => setnoOfBath(e.target.value)}
                  className="input-box"
                />
              </div>

              <div className="">
                <label className="input-label text-lightGray">
                  Total Sq. Footage
                </label>
                <InputField
                  type="text"
                  placeholder="Total Sq. Footage"
                  value={totalSqFootage}
                  onChange={(e) => settotalSqFootage(e.target.value)}
                  className="input-box"
                />
              </div>
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Property Condition
              </label>
              <select
                className="input-box text-lightGray"
                value={propertyCondition}
                onChange={(e) => setpropertyCondition(e.target.value)}
              >
                <option>Select Property condition</option>
                <option value="Fully-Furnished">Fully Furnished</option>
              </select>
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Unique Amenties
              </label>
              <select
                className="input-box text-lightGray"
                value={amenties}
                onChange={(e) => setamenties(e.target.value)}
              >
                <option>Select amenties</option>
                <option value="Gym">Gym</option>
                <option value="Swimming Pool">Swimming pool</option>
              </select>
            </div>
          </div>
        </div>

        {/* rental details */}
        <div className="col-span-6 bg-white rounded-xl border border-[#D1D5DB]">
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Rental Details
          </h4>

          <div className="p-[0.8rem] mt-[0.5rem] flex flex-col gap-2">
            <div className="">
              <label className="input-label text-lightGray">Availability</label>
              <select
                className="input-box text-lightGray"
                value={availability}
                onChange={(e) => setavailability(e.target.value)}
              >
                <option value="">Select availability</option>
                <option value="true">Available</option>
                <option value="false">Occupied</option>
              </select>
            </div>

            <div>
              <label className="input-label text-lightGray">Move In Date</label>
              <InputField
                type="date"
                value={moveInDate}
                onChange={(e) => setmoveInDate(e.target.value)}
                className="input-box text-lightGray"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Current Monthly Rent Amount
              </label>
              <InputField
                type="text"
                placeholder="Enter Current Monthly Rent Amt."
                value={currentMontRent}
                onChange={(e) => setcurrentMontRent(e.target.value)}
                className="input-box"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Expected Rent Amount
              </label>
              <InputField
                type="number"
                placeholder="Enter Expected Rent Amount"
                value={expectedRent}
                onChange={(e) => setexpectedRent(e.target.value)}
                className="input-box"
              />
            </div>

            <div>
              <label className="input-label text-lightGray">
                Security Deposit
              </label>
              <InputField
                type="number"
                placeholder="Enter Security Deposit"
                value={securityDeposit}
                onChange={(e) => setsecurityDeposit(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Lease Duration
              </label>
              <InputField
                type="number"
                placeholder="Enter Lease Duration"
                value={leaseDuration}
                onChange={(e) => setleaseDuration(e.target.value)}
                className="input-box"
              />
            </div>

            <div className="">
              <label className="input-label text-lightGray">
                Visitation Hours
              </label>
              <InputField
                type="number"
                placeholder="Enter Visitation Hours"
                value={visitationHours}
                onChange={(e) => setvisitationHours(e.target.value)}
                className="input-box"
              />
            </div>
          </div>
        </div>

        {/* send for verification button */}
        <div className="col-span-12 flex justify-center items-center">
          <YellowButton
            // onClick={handleSendForVerification}
            onClick={handleSubmit}
            name="Send for Verification"
            px={"px-[1rem]"}
            py={"py-[0.4rem]"}
            rounded={"rounded-lg"}
          />
        </div>

        {isSendClicked && (
          <SendForVerification
            onClose={handleClose}
            open={isSendClicked}
            setIsAddPropertyClicked={setIsAddPropertyClicked}
          />
        )}
      </div>
    </div>
  );
};

export default AddNewProperty;
