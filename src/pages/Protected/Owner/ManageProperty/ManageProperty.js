import React, { useEffect, useState } from "react";
import WhiteButton from "../../../../components/Button/WhiteButton";
import mainetenance from "../../../../assets/image/Owners/regular.svg";
import AddNewProperty from "../Home/AddNewProperty";
import useGetOwnerManageProperty from "../data/useGetManageProperty";
import { useNavigate } from "react-router-dom";

const OwnerManageProperty = () => {
  const navigate = useNavigate();
  const [IsAddpropertyClicked, setIsAddPropertyClicked] = useState(false);
  const [data, , , getProperties] = useGetOwnerManageProperty();

  useEffect(() => {
    getProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {IsAddpropertyClicked ? (
        <AddNewProperty setIsAddPropertyClicked={setIsAddPropertyClicked} />
      ) : (
        <>
          {/* {isLoading && <Loader />} */}

          <div className="mb-[2rem] h-screen">
            <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
              Property Management
            </h4>
            <div className="grid grid-cols-12 bg-white rounded-xl mt-[1.5rem] p-[1.5rem] gap-[1.2rem] shadow-md">
              {/* add new property */}
              <div className="col-span-12 flex justify-between items-center bg-[#ECFBFE] rounded-xl border border-[#D1D5DB] py-[0.8rem] px-[1.4rem]">
                <div className="flex gap-[0.8rem] items-center">
                  <img
                    src={mainetenance}
                    alt="mainetenance icon"
                    className="w-7 h-7"
                  />
                  <div>
                    <h4 className="font-[600] text-[1.1rem] text-darkBlue">
                      Add a new Property
                    </h4>
                  </div>
                </div>
                <WhiteButton
                  px={"px-[1rem]"}
                  py={"py-[0.3rem]"}
                  rounded={"rounded-lg"}
                  name="Add"
                  showIcon={true}
                  onClick={() => navigate("/protected/owner/add-property")}
                  // onClick={() => setIsAddPropertyClicked(true)}
                />
              </div>

              {/* added properties */}
              <div className="col-span-12 bg-white rounded-xl border border-[#D1D5DB]">
                <h4 className="p-[0.5rem] font-[500] text-[1.1rem] text-darkBlue rounded-t-xl bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180]">
                  Added Properties
                </h4>

                <table className="min-w-full bg-white border-t rounded-b-xl">
                  <thead className="bg-[#F1F1F1]">
                    <tr className="text-[0.9rem] font-[500] text-lightGray ">
                      <th className="px-4 py-2 text-left font-[500]">
                        Property Address
                      </th>
                      <th className="px-4 py-2 text-left font-[500]">
                        Property Type
                      </th>
                      <th className="px-4 py-2 text-left font-[500]">
                        Total Bedrooms
                      </th>
                      <th className="px-4 py-2 text-left font-[500]">
                        No. of beds occupied
                      </th>
                      <th className="px-4 py-2 text-left font-[500]">
                        Rent Amount
                      </th>
                      <th className="px-4 py-2 text-left font-[500]">
                        Availability
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.total_count === 0 ? (
                      <div className="px-4 py-2 text-[0.9rem] text-red-500">
                        No Property Available
                      </div>
                    ) : (
                      data?.data?.results?.map((item) => {
                        return (
                          <tr
                            className="hover:bg-gray-100 text-[0.9rem] text-darkBlue "
                            key={item}
                          >
                            <td
                              className="px-4 py-2 hover:underline"
                              onClick={() =>
                                navigate(
                                  `/protected/owner/property-preview/${item.id}`
                                )
                              }
                            >
                              {item.property_name}
                            </td>
                            <td className="px-4 py-2 ">{item.property_type}</td>
                            <td className="px-4 py-2 ">
                              {item.total_bedrooms}
                            </td>
                            <td className="px-4 py-2 ">
                              {item.no_of_beds_occupied}
                              {/* {item.number_of_bed_rooms -
                                  item.number_of_bed_rooms_available} */}
                            </td>
                            <td className="px-4 py-2 ">₹ {item.rent_amount}</td>
                            <td className="px-4 py-2 text-[#218039]">
                              <span className="">
                                {item.no_of_beds_vacant} Available
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OwnerManageProperty;
