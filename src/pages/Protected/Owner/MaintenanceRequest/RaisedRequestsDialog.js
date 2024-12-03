import React, { useState } from "react";
import DialogBox from "../../../../components/DialogBox";
import WhiteButton from "../../../../components/Button/WhiteButton";
import RedButton from "components/Button/RedButton";
import GreenButton from "components/Button/GreenButton";

const RaisedRequestsDialog = ({
  open,
  onClose,
  details,
  tenantName,
  tenantContact,
}) => {
  const [callTenant, setCallTenant] = useState(false);
  const [call, setCall] = useState(false);
  const [hideCallTenant, setHideCallTenant] = useState(false);

  return (
    <div>
      <DialogBox
        showYellowButton={false}
        showCancelButton={false}
        title={`From ${tenantName}`}
        show={open}
        onClose={onClose}
        titleFont="text-[1.2rem]"
        heading="bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180] px-[1rem] pt-[1rem] pb-[0.1rem] rounded-t-2xl border-b"
        padding="p-0"
      >
        <div className="text-center bg-[#E7E6E6] py-[2rem] rounded-b-2xl p-[6rem]">
          {/* // initial dialog, detail portion. */}
          {!callTenant && !call && (
            <div>
              <h4>{details}</h4>
              <div className="mt-[1rem] flex justify-center items-center gap-[1rem]">
                <WhiteButton
                  px={"px-[2rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="OK"
                  onClick={onClose}
                />
                <WhiteButton
                  px={"px-[1rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Call Tenant"
                  onClick={() => setCallTenant(true)}
                />
              </div>
            </div>
          )}

          {/* would you like to call */}
          {callTenant && !hideCallTenant && (
            <div>
              <h4>Would you like to call {tenantName}?</h4>
              <h6>{tenantContact}</h6>
              <div className="mt-[1rem] flex justify-center items-center gap-[1rem]">
                <RedButton
                  px={"px-[1.8rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Cancel"
                  onClick={onClose}
                />
                <GreenButton
                  px={"px-[2.2rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Call"
                  onClick={() => {
                    setCall(true);
                    setHideCallTenant(true);
                  }}
                />
              </div>
            </div>
          )}

          {/* calling */}
          {call && (
            <div>
              <h4>Calling {tenantName}...</h4>
              <h6>Please wait while we connect your call</h6>
              <div className="mt-[1rem] flex justify-center items-center gap-[1rem]">
                <RedButton
                  px={"px-[2rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Cancel"
                  onClick={onClose}
                />
              </div>
            </div>
          )}
        </div>
      </DialogBox>
    </div>
  );
};

export default RaisedRequestsDialog;
