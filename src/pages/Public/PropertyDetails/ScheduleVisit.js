import React, { useState } from "react";
import DialogBox from "../../../components/DialogBox";

// images
import dateIcon from "../../../assets/image/Property/Date.svg";
import timeIcon from "../../../assets/image/Property/time.svg";
import location from "../../../assets/image/Property/location.svg";
import usePostScheduleVisit from "../data/usePostScheduleVisit";
import { useParams } from "react-router-dom";
import usePatchScheduleVisit from "../data/usePatchScheduleVisit";

const ScheduleVisit = ({
  buildingName,
  onClose,
  open,
  getData,
  propertyId,
}) => {
  const [activeDialog, setActiveDialog] = useState("provideDetails");
  const { itemId } = useParams();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  // const[date, setdate] = useState("");
  const [postData, , postScheduleDetails] =
    usePostScheduleVisit();
  const [, , , patchScheduleDetails] =
    usePatchScheduleVisit();

  const handleProceed = () => {
    setActiveDialog("selectDateTime");
  };

  const handleConfirmVisit = () => {
    setActiveDialog("youAreSet");
  };

  const handleAddToCalender = () => {
    const formData = new FormData();
    formData.append("full_name", name);
    formData.append("email", email);
    formData.append("mobile_number", mobileNo);
    formData.append("date", date);
    formData.append("time_slot", time);
    formData.append("building_name", buildingName);

    if (postData?.data?.data?.id) {
      formData.append("id", postData?.data?.data?.id);
      patchScheduleDetails(formData);
    } else if (propertyId) {
      formData.append("id", propertyId);
      patchScheduleDetails(formData);
    } else {
      formData.append("id", itemId);
      postScheduleDetails(formData, itemId);
    }
  };

  const YouAreSet = () => {
    return (
      <DialogBox
        show={activeDialog === "youAreSet"}
        onClose={onClose}
        title="You're All Set"
        yellowBtn="Add to Google Calender"
        CancelBtn="Reschedule my visit"
        onSubmit={handleAddToCalender}
        width="max-w-md"
        titleFont="text-[1.8rem]"
      >
        <div>
          <p className="text-lightGray text-center text-[500] text-[1rem] mb-[1rem]">
            We're Excited to Meet You Soon.<br></br> We have booked a slot for
            you and our representative<br></br> will get in touch shortly.
          </p>
          <div className="flex flex-col gap-[1rem] px-[1rem]">
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={dateIcon} alt="date icon" />
              <div>
                <h4 className="input-label text-lightGray">Date</h4>
                <h4 className="text-darkBlue">{date}</h4>{" "}
              </div>
            </div>
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={timeIcon} alt="time icon" />
              <div>
                <h4 className="input-label text-lightGray">Time</h4>
                <h4 className="text-darkBlue">{time}</h4>{" "}
              </div>
            </div>
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={location} alt="location icon" />
              <div className="">
                <h4 className="input-label text-lightGray">Location</h4>
                <h4 className="text-darkBlue">
                  {/* buildingName, Gachibowli */}
                  {buildingName}
                </h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </DialogBox>
    );
  };

  return (
    <div>
      <ProvideDetails
        name={name}
        setName={setName}
        email={email}
        setemail={setemail}
        mobileNo={mobileNo}
        setMobileNo={setMobileNo}
        activeDialog={activeDialog}
        setActiveDialog={setActiveDialog}
        handleProceed={handleProceed}
        onClose={onClose}
      />
      <SelectDataTime
        time={time}
        settime={settime}
        date={date}
        setdate={setdate}
        activeDialog={activeDialog}
        setActiveDialog={setActiveDialog}
        handleConfirmVisit={handleConfirmVisit}
        onClose={onClose}
      />
      <YouAreSet />
    </div>
  );
};

export default ScheduleVisit;

const ProvideDetails = ({
  name,
  setName,
  email,
  setemail,
  mobileNo,
  setMobileNo,
  handleProceed,
  activeDialog,
  setActiveDialog,
  onClose,
}) => {
  return (
    <DialogBox
      show={activeDialog === "provideDetails"}
      onClose={onClose}
      title="Please provide your details."
      yellowBtn="Proceed"
      onSubmit={handleProceed}
      width="max-w-md"
    >
      <form className="space-y-4">
        <div className="flex flex-col ">
          <label className="input-label">Name</label>
          <input
            type="text"
            className="input-box "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="input-label">Mobile Number</label>
          <input
            type="number"
            className="input-box w-full"
            required
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="input-label">Email</label>
          <input
            type="email"
            className="input-box w-full"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            className="peer appearance-none h-4 w-4 border-2 rounded checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-[0.75rem] before:block before:text-center"
          />
          <h4 className="text-[#334155] font-[400] text-[0.8rem]">
            I agree to be contacted by Housing and agents via WhatsApp,
            <br></br> SMS, phone, email etc.
          </h4>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            className="peer appearance-none h-4 w-4 border-2 rounded checked:bg-purple-100 checked:border-[#9065B4] checked:before:content-['✔'] checked:before:text-[#9065B4] checked:before:text-[0.75rem] before:block before:text-center"
          />
          <label className="text-[#334155] font-[400] text-[0.8rem]">
            I am interested in Home Loans
          </label>
        </div>
      </form>
    </DialogBox>
  );
};

const SelectDataTime = ({
  handleConfirmVisit,
  activeDialog,
  setActiveDialog,
  time,
  settime,
  date,
  setdate,
  onClose,
}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    settime(slot);
  };

  return (
    <DialogBox
      show={activeDialog === "selectDateTime"}
      onClose={onClose}
      title="Select your Favourable date & time to visit."
      yellowBtn="Confirm my Visit"
      onSubmit={handleConfirmVisit}
      width="max-w-[480px]"
      titleFont="text-[1.2rem]"
    >
      <form className="space-y-4">
        <div className="flex flex-col ">
          <label className="input-label">Date</label>
          <input
            type="date"
            className="input-box "
            required
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="input-label">Select preferred time slot</label>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.9rem] font-[500]">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => handleSlotSelect(slot)}
                className={`py-[0.4rem] px-[0.5rem] rounded-lg border ${
                  selectedSlot === slot
                    ? "bg-[#F6908E] text-white border border-[#D1D5DB]"
                    : "bg-white border-gray-300"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </form>
    </DialogBox>
  );
};
