import DialogBox from "components/DialogBox";
import React from "react";
import uploadIcon from "assets/image/Owners/upload.svg";
import WhiteButton from "components/Button/WhiteButton";
import BlueButton from "components/Button/BlueButton";
import YellowButton from "components/Button/YellowButton";
import Loader from "components/Loader/Loader";

const UploadLeaseAgreement = ({
  patchIsLoading,
  open,
  onClose,
  setUploadAgreement,
  uploadAgreement,
  uploadLeaseAgreement,
}) => {
  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files; // Get dropped files
    handleDrop(files); // Call the handleDrop method
  };

  const handleDrop = (files) => {
    setUploadAgreement(files[0]);
  };
  return (
    <div>
      {patchIsLoading && <Loader />}
      <DialogBox
        show={open}
        showYellowButton={false}
        showCancelButton={false}
        onClose={onClose}
        title="Upload Documents"
        titleFont="text-[1.2rem]"
        heading="bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180]  to-[#A0E4F180] px-[1rem] pt-[1rem] rounded-t-2xl border-b"
        padding="p-0"
      >
        <div className="text-center bg-[#E7E6E6] rounded-b-2xl p-[1rem]">
          <div
            className="py-[2rem] px-[10rem] text-center border-[3px] border-dashed rounded-lg border-[#D1D5DB]"
            onDrop={(e) => handleFileDrop(e)}
            onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
          >
            {uploadAgreement ? (
              <div className="text-center flex flex-col items-center">
                <img src={uploadIcon} alt="File Icon" />

                <p className="text-center text-[#334155] font-[600] m-0">
                  {uploadAgreement.name}
                </p>
              </div>
            ) : (
              <p className="font-[500] m-0">Drag & Drop Here to upload</p>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2.5 items-center">
            <p className="text-[1rem] font-[500] m-0">
              Select the files Manually From your PC
            </p>

            <input
              type="file"
              //   accept=".jpeg, .png, .jpg"
              id={`file-input-land-photo`}
              className="hidden"
              onChange={(e) => setUploadAgreement(e.target.files[0])}
            />
            <div className="flex items-center gap-[1rem]">
              <WhiteButton
                onClick={onClose}
                name="Cancel"
                px={"px-[0.6rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
              />
              <WhiteButton
                onClick={() =>
                  document.querySelector(`#file-input-land-photo`).click()
                }
                name="Open Folder"
                px={"px-[0.6rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <YellowButton
              onClick={uploadLeaseAgreement}
              name="Upload"
              px={"px-[0.6rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
            />
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default UploadLeaseAgreement;
