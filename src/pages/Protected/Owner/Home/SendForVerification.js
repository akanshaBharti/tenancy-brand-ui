import React from "react";
import DialogBox from "../../../../components/DialogBox";
import WhiteButton from "../../../../components/Button/WhiteButton";

const SendForVerification = ({ open, onClose, setIsAddPropertyClicked }) => {
  return (
    <div>
      <DialogBox  
        showYellowButton={false}
        showCancelButton={false}
        title="Sent for Verification"
        show={open}
        onClose={onClose}
        titleFont="text-[1.2rem]"
        heading="bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180] px-[1rem] pt-[1rem] pb-[0.1rem] rounded-t-2xl border-b"
        padding="p-0"
      >
        <div className="text-center bg-[#E7E6E6] py-[2rem] rounded-b-2xl p-6">
          <h4>
            Successfully Submitted,<br></br>
            Our team will get in touch with you to take futher details
          </h4>
          <div className="mt-[1rem] flex justify-center items-center gap-[1rem]">
            <WhiteButton
              px={"px-[2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="OK"
              onClick={() => setIsAddPropertyClicked(false)}
            />
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default SendForVerification;
