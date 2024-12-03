import React, { useEffect, useState } from "react";
import resolvedIcon from "../../../../assets/image/TenantHome/resolvedIcon.svg";
import pendingIcon from "../../../../assets/image/OwnerHome/pending.svg";
import RaisedRequestsDialog from "./RaisedRequestsDialog";
import useGetOwnerMaintenanceRequest from "../data/useGetOwnerMaintRequest";
import Loader from "components/Loader/Loader";

const OwnerMaintenance = () => {
  const [isRaisedRequestOpen, setIsRaisedRequestOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [tenantContact, setTenantContact] = useState("");
  const [data, isError, isLoading, getMaintenanceData] =
    useGetOwnerMaintenanceRequest();

  useEffect(() => {
    getMaintenanceData();
  }, []);

  const handleDetailOpen = (details, name, contact) => {
    setSelectedDetails(details);
    setTenantName(name);
    setTenantContact(contact);
    setIsRaisedRequestOpen(true);
    
  };

  const handleClose = () => {
    setIsRaisedRequestOpen(false);
    setSelectedDetails(""); // Clear the selected details when dialog is closed
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="mb-[4rem] h-screen">
        <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
          Maintenance Request
        </h4>
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1.2rem]">
          <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
            <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
              Past Requests
            </h4>

            <table className="min-w-full bg-white border-t rounded-b-xl">
              <thead className="bg-[#F1F1F1]">
                <tr className="text-[0.9rem] font-[500] text-lightGray ">
                  <th className=" pl-4 py-2 text-left font-[500]">Issue ID</th>
                  <th className=" pl-4 pr-[8rem] py-2 text-left font-[500]">
                    Details
                  </th>
                  <th className=" px-4 py-2 text-left font-[500]">
                    Property Address
                  </th>
                  <th className=" px-4 py-2 text-left font-[500]">
                    Date Reported
                  </th>
                  <th className=" px-4 py-2 text-left font-[500]">
                    Request Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.results?.map((item) => {
                  return (
                    <tr className=" text-[0.9rem] text-darkBlue" key={item.id}>
                      <td className=" pl-4 py-2 ">{item.id}</td>
                      <td
                        className=" pl-4 pr-[8rem] py-2 underline"
                        onClick={() => handleDetailOpen(item.description, item.tenant_name, item.tenant_mobile_number )}
                      >
                        {item.description}
                      </td>
                      <td className=" px-4 py-2 ">{item.property_address}</td>
                      <td className=" px-4 py-2 ">{item.date_reported}</td>
                      <td className=" px-4 py-2 flex items-center">
                        {item.request_status === 1 ? (
                          <button className="text-[#218039] bg-[#34C759] bg-opacity-10 rounded-sm px-2 flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="#218039"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Requested
                          </button>
                        ) : // <img src={item.status} alt="status" className="" />
                        item.request_status === 2 ? (
                          <img src={pendingIcon} alt="status" className="" />
                        ) : (
                          <img
                            src={resolvedIcon}
                            alt="resolvedIcon"
                            className=""
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {isRaisedRequestOpen && (
          <RaisedRequestsDialog
            tenantName={tenantName}
            tenantContact={tenantContact}
            onClose={handleClose}
            open={isRaisedRequestOpen}
            details={selectedDetails}
          />
        )}
      </div>
    </>
  );
};

export default OwnerMaintenance;
