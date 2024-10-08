import React from "react";
import YellowButton from "../../../../components/Button/YellowButton";

// images
import info from "../../../../assets/image/TenantHome/info.svg";
import paid from "../../../../assets/image/TenantHome/paid.svg";
import downloadReceipt from "../../../../assets/image/TenantHome/downloadReceipt.svg";

const TenenatRent = () => {
  const rentDetails = [
    {
      id: 1,
      month: "August 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 2,
      month: "August 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 3,
      month: "July 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 4,
      month: "June 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 5,
      month: "May 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 6,
      month: "April 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 7,
      month: "March 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 8,
      month: "February 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
    {
      id: 9,
      month: "January 2024",
      amount: "₹ 25,000",
      method: "UPI",
      date: "16/08/24",
      status: paid,
      receipt: downloadReceipt,
    },
  ];
  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        Rent & Payment History
      </h4>
      <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1rem]">
        {/* upcoming rent due */}
        <div className="col-span-12 flex justify-between items-center border border-[#F26664] bg-[#FDECEC] p-[0.8rem] rounded-xl">
          <div className="flex items-start gap-[0.5rem]">
            <img src={info} alt="info icon" className="w-5 h-5" />
            <div>
              <h4 className="font-[500] text-[0.8rem] text-lightGray">
                Upcoming Rent Due Date
              </h4>

              <h4 className="font-[600] text-[1.1rem] text-[#9B0003]">
                01 September 2024
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

        <table className="col-span-12  bg-white rounded-xl mt-[0.5rem] ">
          <tr className="bg-[#F1F1F1] rounded-xl text-lightGray text-[0.9rem] text-left ">
            <th className="font-[500] col-span-2 py-2  px-2 ">Rental Month</th>
            <th className="font-[500] col-span-2 px-2">Amount</th>
            <th className="font-[500] col-span-2 px-2">Method</th>
            <th className="font-[500] col-span-2 px-2">Date</th>
            <th className="font-[500] col-span-2 px-2">Status</th>
            <th className="font-[500] col-span-2 px-2">Receipt</th>
          </tr>

          {rentDetails.map((item) => {
            return (
              <tr className="rounded text-darkBlue font-[600] text-[1rem] hover:bg-[#F1F1F1] hover:rounded-xl">
                <td className=" px-2 py-2">{item.month}</td>
                <td className=" px-2">{item.amount}</td>
                <td className=" px-2">{item.method}</td>
                <td className=" px-2 ">{item.date}</td>
                <td className=" px-2 ">
                  <img src={item.status} alt="status" />
                </td>
                <td className="">
                  <img
                    src={item.receipt}
                    alt="receipt"
                    className="max-w-[160px] "
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TenenatRent;
