import React, { useEffect, useState } from "react";
import "../../../Public/inputLabel.css";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import resolvedIcon from "../../../../assets/image/TenantHome/resolvedIcon.svg";

// APIs
import useGetMaintenanceRequest from "../data/useGetMaintenanceRequest";
import usePostMaintenanceRequest from "../data/usePostMaintenanceRequest";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";
const TenantMaintenanceRequest = () => {
  const [categoryOfReq, setCategoryOfReq] = useState("");
  const [desc, setDesc] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [data, , , getMaintenanceData] = useGetMaintenanceRequest();
  const [postData, postIsError, , postMaintenanceRequest] =
    usePostMaintenanceRequest();

  useEffect(() => {
    getMaintenanceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postData) {
      showSuccessToast("Maintenance Request Raised Successfully");
      getMaintenanceData();
      setCategoryOfReq("");
      setDesc("");
      setUploadPhoto("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData]);

  useEffect(() => {
    if (postIsError) {
      showErrorToast("Something went wrong. Try Again!!!");
    }
  }, [postIsError]);

  const handleSubmitRequest = () => {
    const formData = new FormData();
    formData.append("categery_of_request", categoryOfReq);
    formData.append("description", desc);
    formData.append("upload", uploadPhoto);
    postMaintenanceRequest(formData);
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className=" h-screen">
        <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
          Maintenance Request
        </h4>
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
          {/* maintenance request */}
          <div className="col-span-4 bg-white rounded-xl border border-[#D1D5DB]">
            <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
              Raise a new Maintenance Request
            </h4>
            <div className="rounded-b-xl p-[0.8rem] border-t">
              <div className="mb-2">
                <label className="input-label text-lightGray">
                  Select the Category of the request
                </label>
                <select
                  className="input-box"
                  value={categoryOfReq}
                  onChange={(e) => setCategoryOfReq(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="General Maintenance">
                    General Maintenance
                  </option>
                  <option value="Cleaning Services">Cleaning Services</option>
                  <option value="Plumbing Issues">Plumbing Issues</option>
                  <option value="Electrical Issues">Electrical Issues</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-2 flex flex-col w-full">
                <label className="input-label text-lightGray">
                  Description of the issue
                </label>
                <textarea
                  type="text"
                  className="text-area h-[8rem]"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="">
                <label className="input-label text-lightGray ">
                  Upload Photos (Optional)
                </label>
                <div className="w-[45%]">
                  <input
                    type="file"
                    // accept=".pdf"
                    id={`file-input-photo`}
                    className="hidden"
                    onChange={(e) => setUploadPhoto(e.target.files[0])}
                  />
                  <WhiteButton
                    onClick={() =>
                      document.querySelector(`#file-input-photo`).click()
                    }
                    px={"px-[2.2rem]"}
                    py={"py-[0.3rem]"}
                    rounded={"rounded-lg"}
                    name="Upload"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmitRequest}
                className={` font-[500] rounded-lg p-2 w-full mt-[1.5rem] ${
                  categoryOfReq && desc && uploadPhoto
                    ? "bg-[#FFD700] text-darkBlue"
                    : "bg-[#808080] cursor-not-allowed text-white"
                }`}
                disabled={!categoryOfReq || !desc || !uploadPhoto}
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* past requests */}
          <div className="min-h-[28rem] col-span-8 bg-white rounded-xl border border-[#D1D5DB]">
            <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
              Past Requests
            </h4>
            <div className="overflow-y-auto max-h-[25rem] hide-scrollbar">
              <table className="min-w-full bg-white border-t">
                <thead className="bg-[#F1F1F1]">
                  <tr className="text-[0.9rem] font-[500] text-lightGray ">
                    <th className=" px-2 py-2 text-left font-[500]">
                      Issue No.
                    </th>
                    <th className=" px-2 py-2 text-left font-[500]">
                      Maintenance Issue
                    </th>
                    <th className=" px-2 py-2 text-left font-[500]">
                      Date Submitted
                    </th>
                    <th className=" px-2 py-2 text-left font-[500]">
                      Date Resolved
                    </th>
                    <th className=" px-2 py-2 text-left font-[500]">
                      Request Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.results?.map((item) => {
                    return (
                      <tr
                        className="hover:bg-gray-100 text-[0.9rem] "
                        key={item.id}
                      >
                        <td className=" px-4 py-2 ">{item.id}</td>
                        <td className=" px-4 py-2 ">
                          {item.categery_of_request_display}
                        </td>
                        <td className=" px-4 py-2 ">{item.date_reported}</td>
                        <td className=" px-4 py-2 ">{item.date_resolved}</td>
                        <td className=" px-4 py-2 flex items-center">
                          {item.request_status === 1 ? (
                            <img src={resolvedIcon} alt="status" className="" />
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantMaintenanceRequest;
