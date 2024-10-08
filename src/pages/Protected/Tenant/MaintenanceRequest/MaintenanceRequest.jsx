import React from "react";
import "../../../Public/inputLabel.css";
import WhiteButton from "../../../../components/Button/WhiteButton";

// images
import resolvedIcon from "../../../../assets/image/TenantHome/resolvedIcon.svg";

const TenantMaintenanceRequest = () => {
  const requestDetails = [
    {
      id: 1,
      issue: "Plumbing Issue",
      dateSub: "01/8/24",
      dateRes: "03/8/24",
      request: resolvedIcon,
    },
    {
      id: 2,
      issue: "Plumbing Issue",
      dateSub: "01/8/24",
      dateRes: "03/8/24",
      request: resolvedIcon,
    },
    {
      id: 3,
      issue: "Plumbing Issue",
      dateSub: "01/8/24",
      dateRes: "03/8/24",
      request: resolvedIcon,
    },
    {
      id: 4,
      issue: "Plumbing Issue",
      dateSub: "01/8/24",
      dateRes: "03/8/24",
      request: resolvedIcon,
    },
    {
      id: 5,
      issue: "Plumbing Issue",
      dateSub: "01/8/24",
      dateRes: "03/8/24",
      request: resolvedIcon,
    },
  ];
  return (
    <div className="mb-[4rem]">
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
              <select className="input-box">
                <option>Select an option</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="input-label text-lightGray">
                Description of the issue
              </label>
              <textarea
                type="text"
                className="text-area h-[8rem]"
                value="Test issue"
              />
            </div>
            <div className="w-[50%]">
              <label className="input-label text-lightGray ">
                Upload Photos (Optional)
              </label>
              <WhiteButton
                px={"px-[1.5rem]"}
                py={"py-[0.3rem]"}
                rounded={"rounded-lg"}
                name="Upload"
              />
            </div>
            <button className="text-white font-[500] rounded-lg bg-[#808080] p-2 w-full mt-[1.5rem]">
              Submit Request
            </button>
          </div>
        </div>

        {/* past requests */}
        <div className="col-span-8 bg-white rounded-xl border border-[#D1D5DB]">
          <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
            Past Requests
          </h4>

          <table className="min-w-full bg-white border-t ">
            <thead className="bg-[#F1F1F1]">
              <tr className="text-[0.9rem] font-[500] text-lightGray ">
                <th className=" px-2 py-2 text-left font-[500]">Issue No.</th>
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
              {requestDetails.map((item) => {
                return (
                  <tr className="hover:bg-gray-100 text-[0.9rem] text-darkBlue">
                    <td className=" px-4 py-2 ">{item.id}</td>
                    <td className=" px-4 py-2 ">{item.issue}</td>
                    <td className=" px-4 py-2 ">{item.dateSub}</td>
                    <td className=" px-4 py-2 ">{item.dateRes}</td>
                    <td className=" px-4 py-2 flex items-center">
                      <img src={item.request} alt="status" className="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantMaintenanceRequest;
