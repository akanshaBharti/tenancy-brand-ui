import React, { useEffect } from "react";
import useGetOwnerTenantManagement from "../data/useGetOwnertenantManagement";
import Loader from "components/Loader/Loader";

const OwnerTenantsManagement = () => {
  const [data, isError, isLoading, getTenantDetails] =
    useGetOwnerTenantManagement();

  useEffect(() => {
    getTenantDetails();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className=" h-screen">
        <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
          Tenants Management
        </h4>
        <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1.2rem] shadow-md">
          <table className="col-span-12  bg-white rounded-xl mt-[0.5rem] ">
            <tr className="bg-[#F1F1F1] rounded-xl text-lightGray text-[0.9rem] text-left ">
              <th className="font-[500] col-span-2 py-2  px-2 ">Tenant Name</th>
              <th className="font-[500] col-span-2 px-2">Phone Number</th>
              <th className="font-[500] col-span-2 px-2">Mail</th>
              <th className="font-[500] col-span-2 px-2">Property Location</th>
              <th className="font-[500] col-span-2 px-2">Rent Amount</th>
              <th className="font-[500] col-span-2 px-2">After Deduction</th>
              <th className="font-[500] col-span-2 px-2">Security Deposit</th>
              <th className="font-[500] col-span-2 px-2">Move in Date</th>
            </tr>
            {data?.data?.total_count === 0 ? (
              <div className="px-4 py-2 text-[0.9rem] text-red-500">
                No Tenant Available
              </div>
            ) : (
              data?.data?.results?.map((item) => {
                return (
                  <tr className="rounded text-darkBlue font-[500] text-[0.9rem] hover:bg-[#F1F1F1] hover:rounded-xl">
                    <td className=" px-2 py-2">{item.tenant_name}</td>
                    <td className=" px-2">{item.mobile_number}</td>
                    <td className=" px-2">{item.email}</td>
                    <td className=" px-2">{item.property_location}</td>
                    <td className=" px-2">₹ {item.rent_amount}</td>
                    <td className=" px-2">₹ {item.afterDeduction || 0}</td>
                    <td className=" px-2">₹ {item.security_deposit}</td>

                    <td className=" px-2 ">
                      {item.move_in_date || "01-01-2024"}
                    </td>
                  </tr>
                );
              })
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default OwnerTenantsManagement;
