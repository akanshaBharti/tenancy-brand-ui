import React, { useEffect, useState } from "react";
import YellowButton from "../../../../components/Button/YellowButton";
import info from "../../../../assets/image/TenantHome/info.svg";
import paid from "../../../../assets/image/TenantHome/paid.svg";
import downloadReceipt from "../../../../assets/image/TenantHome/downloadReceipt.svg";
import useGetTenantRentHistory from "pages/Public/data/useGetTenantRentHistory";
import { showErrorToast } from "components/toaster/toastHelper";
import Loader from "components/Loader/Loader";

const TenenatRent = () => {
  const [rentDetails, setRentDetails] = useState([]);
  const [data, error, isLoading, GetTenantRentHistory] =
    useGetTenantRentHistory();
  useEffect(() => {
    GetTenantRentHistory();
  }, []);

  useEffect(() => {
    if (data?.results?.length > 0) {
      const formattedData = data?.results.map((item) => ({
        id: item.id,
        month: `${item.payment_month_display} ${item.payment_year}`,
        amount: `₹ ${item.amount}`,
        method: item.payment_method_display,
        date: new Date(item.payment_date).toLocaleDateString(),
        status: item.is_paid ? paid : "",
        receipt: item.receipt_url,
      }));
      setRentDetails(formattedData);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="mb-[4rem] h-screen">
        <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
          Rent & Payment History
        </h4>
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
          {/* Upcoming rent due */}
          <div className="col-span-12 flex justify-between items-center border border-[#F26664] bg-[#FDECEC] p-[0.8rem] rounded-xl">
            <div className="flex items-start gap-[0.5rem]">
              <img src={info} alt="info icon" className="w-5 h-5" />
              <div>
                <h4 className="font-[500] text-[0.8rem] text-lightGray">
                  Upcoming Rent Due Date
                </h4>
                <h4 className="font-[600] text-[1.1rem] text-[#9B0003]">
                  01 December 2024
                </h4>
                <h4 className="font-[500] text-[0.8rem] text-lightGray">
                  Pay early on time to keep your tenancy score up.
                </h4>
              </div>
            </div>
            <YellowButton
              px={"px-[1rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Pay Early"
            />
          </div>

          {/* Rent history table */}
          {isLoading ? (
            <div className="col-span-12 text-center">Loading...</div>
          ) : error ? (
            <div className="col-span-12 text-center text-red-500">{error}</div>
          ) : rentDetails.length === 0 ? (
            <>
              <table className="col-span-12 bg-white rounded-xl mt-[0.5rem] ">
                <thead className="">
                  <tr className="bg-[#F1F1F1] rounded-xl text-lightGray text-[0.9rem] text-left">
                    <th className="font-[500] py-2 px-2">Rental Month</th>
                    <th className="font-[500] px-2">Amount</th>
                    <th className="font-[500] px-2">Method</th>
                    <th className="font-[500] px-2">Date</th>
                    <th className="font-[500] px-2">Status</th>
                    <th className="font-[500] px-2">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="rounded text-darkBlue font-[600] text-[1rem] hover:bg-[#F1F1F1] hover:rounded-xl">
                    <td className="p-[1rem] ">
                      No rent payment history available.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <table className="col-span-12 bg-white rounded-xl mt-[0.5rem]">
              <thead>
                <tr className="bg-[#F1F1F1] rounded-xl text-lightGray text-[0.9rem] text-left">
                  <th className="font-[500] py-2 px-2">Rental Month</th>
                  <th className="font-[500] px-2">Amount</th>
                  <th className="font-[500] px-2">Method</th>
                  <th className="font-[500] px-2">Date</th>
                  <th className="font-[500] px-2">Status</th>
                  <th className="font-[500] px-2">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {rentDetails.map((item) => (
                  <tr
                    key={item.id}
                    className="rounded text-darkBlue font-[600] text-[1rem] hover:bg-[#F1F1F1] hover:rounded-xl"
                  >
                    <td className="px-2 py-2">{item.month}</td>
                    <td className="px-2">{item.amount}</td>
                    <td className="px-2">{item.method}</td>
                    <td className="px-2">{item.date}</td>
                    <td className="px-2">
                      {item.status && <img src={item.status} alt="status" />}
                    </td>
                    <td className="px-2">
                      <button
                        onClick={() => {
                          if (item.receipt) {
                            window.open(item.receipt, "_blank");
                          } else {
                            showErrorToast("Receipt not available");
                          }
                        }}
                      >
                        <img
                          src={downloadReceipt}
                          alt="Download Receipt"
                          className="w-[8rem] h-[2rem]"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default TenenatRent;
