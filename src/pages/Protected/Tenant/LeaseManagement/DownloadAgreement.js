import WhiteButton from "components/Button/WhiteButton";
import DialogBox from "components/DialogBox";
import { saveAs } from "file-saver";
import React from "react";

const DownloadAgreement = ({ open, onClose, selectedDocument }) => {
  const yesClicked = () => {
    const fileName = selectedDocument.split("/").pop();
    saveAs(selectedDocument, fileName); // Use the extracted file name
  };

  return (
    <div>
      <DialogBox
        show={open}
        showYellowButton={false}
        showCancelButton={false}
        onClose={onClose}
        title="Uploaded Documents"
        titleFont="text-[1.2rem]"
        heading="bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180]  to-[#A0E4F180] px-[1rem] pt-[1rem] rounded-t-2xl border-b"
        padding="p-0"
      >
        <div className="text-center bg-[#E7E6E6] rounded-b-2xl p-[1rem] ">
          <div className="px-[6rem]">
            <img
              src={selectedDocument}
              alt=""
              className="w-[15rem] h-[10rem] rounded-md"
            />
            <div className="mt-[0.2rem] flex justify-center">
              <WhiteButton
                onClick={() => yesClicked()}
                name="Download"
                px={"px-[1.5rem]"}
                py={"py-[0.1rem]"}
                rounded={"rounded-lg"}
              />
            </div>
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default DownloadAgreement;
