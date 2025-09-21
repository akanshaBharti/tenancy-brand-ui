import Loader from "components/Loader/Loader";
import useGetOwnerRentManagement from "pages/Protected/Owner/data/useGetRentManagement";
import React, { useEffect } from "react";

const individualRentHistory = [
  {
    id: 1,
    paymentDate: "01/8/24",
    amountPaid: "₹ 10,000",
    afterDeduction: "₹ 9,500",
    paymentType: "Online Payment",
  },
  {
    id: 2,
    paymentDate: "01/8/24",
    amountPaid: "₹ 15,000",
    afterDeduction: "₹ 14,250",
    paymentType: "Bank Transfer",
  },
  {
    id: 3,
    paymentDate: "01/8/24",
    amountPaid: "₹ 8,000",
    afterDeduction: "₹ 7,100",
    paymentType: "Online Payment",
  },
];

const RentManagement = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, isError, isLoading, getRentDetails] =
    useGetOwnerRentManagement();

  useEffect(() => {
    getRentDetails();
  }, []);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="bg-blue-100 min-h-screen pb-[2rem]">
        <div className="container mx-auto">
          <h4 className="font-semibold text-2xl text-darkBlue mb-6">
            Rent Management
          </h4>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 overflow-hidden rounded-lg border border-gray-300">
              <h5 className="font-medium text-lg text-darkBlue bg-gradient-to-r from-[#D4F7FC] to-[#A0E4F1] p-3">
                Rent Due
              </h5>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr className="text-sm font-medium text-gray-600">
                    <th className="px-4 py-3 text-left">Tenant Name</th>
                    <th className="px-4 py-3 text-left">Rent Pay Due</th>
                    <th className="px-4 py-3 text-left">Due From</th>
                    <th className="px-4 py-3 text-left">Send Reminders</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.rent_due?.length === 0 ? (
                    <div className="px-4 py-2 text-[0.9rem] text-red-500">
                      No Tenant Rent is Due
                    </div>
                  ) : (
                    data?.data?.rent_due.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 text-sm text-darkBlue"
                      >
                        <td className="px-4 py-3">{item.tenant_name}</td>
                        <td className="px-4 py-3">₹ {item.amount_due}</td>
                        <td className="px-4 py-3">{item.due_date}</td>
                        <td className="px-4 py-3">
                          <button className="bg-gray-200 text-Black px-3 py-1 rounded-lg shadow">
                            Send Reminder
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg border border-gray-300">
              <h5 className="font-medium text-lg text-darkBlue bg-gradient-to-r from-[#D4F7FC] to-[#A0E4F1] p-3">
                Rent payment history from all the tenants
              </h5>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr className="text-sm font-medium text-gray-600">
                    <th className="px-4 py-3 text-left">Tenant Name</th>
                    <th className="px-4 py-3 text-left">Payment Date</th>
                    <th className="px-4 py-3 text-left">Payment Type</th>
                    <th className="px-4 py-3 text-left">Amount Paid</th>
                    <th className="px-4 py-3 text-left">After Deduction</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.payment_history?.length === 0 ? (
                    <div className="px-4 py-2 text-[0.9rem] text-red-500">
                      Rent History not Avaialable
                    </div>
                  ) : (
                    data?.data?.payment_history?.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 text-sm text-darkBlue"
                      >
                        <td className="px-4 py-3">{item.tenant_name}</td>
                        <td className="px-4 py-3">{item.payment_date}</td>
                        <td className="px-4 py-3">
                          {item.payment_method === 1
                            ? "UPI"
                            : item.payment_method === 2
                            ? "Bank Transfer"
                            : item.payment_method === 3
                            ? "Cash"
                            : item.payment_method === 4
                            ? "Card"
                            : "Method Not specified"}
                        </td>
                        <td className="px-4 py-3">₹ {item.amount_paid}</td>
                        <td className="px-4 py-3">₹ {item.after_deduction}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-300">
              <h5 className="font-medium text-lg text-darkBlue bg-gradient-to-r from-[#D4F7FC] to-[#A0E4F1] p-3">
                {user?.full_name}'s Rent History
              </h5>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr className="text-sm font-medium text-gray-600">
                    <th className="px-4 py-3 text-left">Payment Date</th>
                    <th className="px-4 py-3 text-left">Amount Paid</th>
                    <th className="px-4 py-3 text-left">After Deduction</th>
                    <th className="px-4 py-3 text-left">Payment Type</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.tenant_rent_history?.length === 0 ? (
                    <div className="px-4 py-2 text-[0.9rem] text-red-500">
                      Rent History not Avaialable
                    </div>
                  ) : (
                    data?.data?.tenant_rent_history?.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 text-sm text-darkBlue"
                      >
                        <td className="px-4 py-3">{item.paymentDate}</td>
                        <td className="px-4 py-3">₹ {item.amountPaid}</td>
                        <td className="px-4 py-3">₹ {item.afterDeduction}</td>
                        <td className="px-4 py-3">
                          {item.payment_method === 1
                            ? "UPI"
                            : item.payment_method === 2
                            ? "Bank Transfer"
                            : item.payment_method === 3
                            ? "Cash"
                            : item.payment_method === 4
                            ? "Card"
                            : "Method Not specified"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentManagement;
