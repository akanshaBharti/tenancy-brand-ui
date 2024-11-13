import React, { useState } from "react";
import DialogBox from "../../../components/DialogBox";
import { useNavigate } from "react-router-dom";

// images
import date from "../../../assets/image/Property/Date.svg";
import time from "../../../assets/image/Property/time.svg";
import location from "../../../assets/image/Property/location.svg";
 
const ScheduleVisit = () => {
  const navigate = useNavigate();
  const [activeDialog, setActiveDialog] = useState("provideDetails");

  const handleProceed = () => {
    setActiveDialog("selectDateTime");
  };

  const handleConfirmVisit = () => {
    setActiveDialog("youAreSet");
  };

  const handleReVisit = () => {
    setActiveDialog("provideDetails");
  };

  const handleAddCalender = () => {
    setActiveDialog(null);
  };

  const ProvideDetails = () => {
    return (
      <DialogBox
        show={activeDialog === "provideDetails"}
        onClose={() => setActiveDialog(null)}
        title="Please provide your details."
        yellowBtn="Proceed"
        onSubmit={handleProceed}
        width="max-w-md"
      >
        <form className="space-y-4">
          <div className="flex flex-col ">
            <label className="input-label">Name</label>
            <input type="text" className="input-box " required />
          </div>
          <div className="flex flex-col ">
            <label className="input-label">Mobile Number</label>
            <input type="number" className="input-box w-full" required />
          </div>
          <div className="flex flex-col ">
            <label className="input-label">Email</label>
            <input type="email" className="input-box w-full" required />
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

  const SelectDataTime = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = [
      "9-10 am",
      "10-11 am",
      "11-12 am",
      "12-01 pm",
      "01-02 pm",
      "02-03 pm",
      "03-04 pm",
      "04-05 pm",
    ];

    const handleSlotSelect = (slot) => {
      setSelectedSlot(slot);
    };

    return (
      <DialogBox
        show={activeDialog === "selectDateTime"}
        onClose={() => setActiveDialog(null)}
        title="Select your Favourable date & time to visit."
        yellowBtn="Confirm my Visit"
        onSubmit={handleConfirmVisit}
        width="max-w-[480px]"
        titleFont="text-[1.2rem]"
      >
        <form className="space-y-4">
          <div className="flex flex-col ">
            <label className="input-label">Date</label>
            <input type="date" className="input-box " required />
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

  const YouAreSet = () => {
    return (
      <DialogBox
        show={activeDialog === "youAreSet"}
        onClose={handleReVisit}
        title="You're All Set"
        yellowBtn="Add to Google Calender"
        CancelBtn="Reschedule my visit"
        onSubmit={handleAddCalender}
        width="max-w-md"
        titleFont="text-[1.8rem]"
      >
        <div >
          <p className="text-lightGray text-center text-[500] text-[1rem] mb-[1rem]">
            We're Excited to Meet You Soon.<br></br> We have booked a slot for
            you and our representative<br></br> will get in touch shortly.
          </p>
          <div className="flex flex-col gap-[1rem] px-[1rem]">
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={date} alt="date icon" />
              <div>
                <h4 className="input-label text-lightGray">Date</h4>
                <h4 className="text-darkBlue">15/09/2024</h4>{" "}
              </div>
            </div>
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={time} alt="time icon" />
              <div>
                <h4 className="input-label text-lightGray">Time</h4>
                <h4 className="text-darkBlue">4 Pm to 5 Pm</h4>{" "}
              </div>
            </div>
            <div className="flex  items-center gap-[1rem] bg-white border rounded-xl p-[0.4rem] shadow-md">
              <img src={location} alt="location icon" />
              <div>
                <h4 className="input-label text-lightGray">Loaction</h4>
                <h4 className="text-darkBlue">Alekhya Apartments, Gachibowli</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </DialogBox>
    );
  };

  return (
    <div>
      <ProvideDetails />
      <SelectDataTime />
      <YouAreSet />
    </div>
  );
};

export default ScheduleVisit;
