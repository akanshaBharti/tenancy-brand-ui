import React, { useEffect } from "react";
import useGetOwnerPropertyPreview from "../data/useGetPropertyPreview";
import { Link, useNavigate, useParams } from "react-router-dom";

// images
// import arrow_right from "../../../../assets/image/Search/arrow-right.svg";
import gated from "../../../../assets/image/Property/gated.svg";
import east_facing from "../../../../assets/image/Property/east_facing.svg";
import sofaIndi from "assets/image/Home/sofaIndividual.svg";
import expandIndi from "assets/image/Home/expandIndividual.svg";
import bhkIndi from "assets/image/Home/layoutPanelIndividual.svg";
import Loader from "components/Loader/Loader";
import WhiteButton from "components/Button/WhiteButton";
import mainetenance from "../../../../assets/image/Owners/regular.svg";

const PropertyPreview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getData, isError, isLoading, getpropertyDetails] =
    useGetOwnerPropertyPreview();

  const data = getData?.data;
  useEffect(() => {
    getpropertyDetails(id);
  }, []);

  return (
    <div className="mb-[4rem]">
      <h4 className="font-[600] text-[1.5rem] text-darkBlue ml-1">
        Property Preview
      </h4>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="px-[1rem] mt-[2rem]">
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
                  Edit Property
                </h4>
              </div>
            </div>
            <WhiteButton
              px={"px-[1rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Edit"
              showIcon={true}
              // onClick={() => setIsAddPropertyClicked(true)}
              onClick={() => navigate("/protected/owner/add-property", { state: { id: id, getData: data } })}
              />
          </div>

          {/* property images */}
          <div className="bg-white p-[0.8rem] rounded-md mt-[1rem] gap-[0.5rem] grid grid-cols-12">
            {data?.media?.map((item, index) => (
              <div className="col-span-6" key={index}>
                <img
                  src={item.photo}
                  alt="property"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* property details */}
          <div className="grid grid-cols-12 mt-[1rem] gap-[1rem]">
            {/* property overview */}
            <div className="col-span-7 bg-white rounded-b-lg">
              <div className="rounded-t-lg bg-[#E7E7FA] p-[1rem]">
                <h4 className="font-[500] text-[1.2rem] text-darkBlue">
                  {data?.property_name}
                </h4>
                <p className="text-lightGray font-[500] text-[0.9rem]">
                  <b>{data?.area}</b>, {data?.city}, {data?.state}
                </p>
              </div>
              <div className="rounded-b-lg p-[1rem]">
                <h4 className="font-[500] text-darkBlue mb-[1rem]">Overview</h4>
                <div className="flex gap-[1rem] flex-wrap">
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <img src={sofaIndi} alt="sofa Icon" />
                    <span>{data?.property_condition}</span>
                  </div>
                  <img src={gated} alt="gated" className="w-[9rem]" />
                  <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <img src={bhkIndi} alt="bhk icon" />
                    <span>{data?.property_type}</span>
                  </div>
                  <img
                    src={east_facing}
                    alt="east_facing"
                    className="w-[12rem]"
                  />
                  {/* <img src={sqft2000} alt="sqft2000" className="w-[14rem]" /> */}
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <img src={expandIndi} alt="Expand Icon" />
                    <span>{data?.total_square_feet} Sqft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* no of room available */}
            <div className="col-span-5 bg-white rounded-b-lg">
              <div className="text-center rounded-t-lg bg-[#E7E7FA] p-[1rem]">
                <h4 className="font-[500] text-[1.2rem] text-[#1A1A7F]">
                  {data?.renting_details?.availability
                    ? "Available"
                    : "Not Available"}
                </h4>
              </div>
              <div className="text-center justify-center flex gap-[9rem] rounded-b-lg px-[2rem] py-[1rem]">
                <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                  ₹{data?.renting_details?.current_monthly_rent_amount}
                  <span className="font-[400] text-[0.8rem] text-lightGray">
                    Monthly Rent<br></br> (including Maintenance)
                  </span>
                </h4>
                <h4 className="flex flex-col font-[500] text-[1.1rem] text-darkBlue">
                  ₹{data?.renting_details?.security_deposit}
                  <span className="font-[400] text-[0.8rem] text-lightGray">
                    Security Deposit <br></br> (for two months)
                  </span>
                </h4>
              </div>
            </div>

            {/* room details */}
            <div className="col-span-7 bg-white rounded-lg ">
              <div className="px-[1rem] py-[1.5rem]">
                <h4 className="flex gap-2 font-[500] text-darkBlue mb-[1rem] text-[1rem]">
                  <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                  Room Details
                </h4>
                <hr />
                <div className="flex gap-[1rem] flex-wrap">
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <span>{data?.number_of_bed_rooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <span>{data?.number_of_bath_rooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <span>{data?.number_of_living_halls} Living</span>
                  </div>
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <span>{data?.number_of_kitchen} Kitchen</span>
                  </div>
                  <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#111827] rounded-2xl text-[0.8rem]">
                    <span>{data?.number_of_balcony} Balcony</span>
                  </div>
                </div>
              </div>
            </div>

            {/* amenities */}
            <div className="col-span-7 bg-white rounded-lg ">
              <div className="px-[1rem] py-[1.5rem]">
                <h4 className="flex gap-2 font-[500] text-darkBlue mb-[1rem] text-[1rem]">
                  <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                  Amenities
                </h4>
                <hr className="" />
                <h5 className="text-[0.9rem] text-lightGray font-[500] mb-2 ">
                  Comfort
                </h5>
                <div className="flex gap-[1rem] flex-wrap">
                  {data?.unique_aminities?.map((item, index) => {
                    if (item.aminity_type === 1) {
                      return (
                        <div key={item.id}>
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>

                <h5 className="text-[0.9rem] text-lightGray font-[500] mb-2 mt-[1rem]">
                  Kitchen
                </h5>
                <div className="flex gap-[1rem] flex-wrap">
                  {data?.unique_aminities?.map((item, index) => {
                    if (item.aminity_type === 2) {
                      return (
                        <div key={item.id}>
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>

                <h5 className="text-[0.9rem] text-lightGray font-[500] mb-2 mt-[1rem]">
                  Recreation
                </h5>
                <div className="flex gap-[1rem] flex-wrap">
                  {data?.unique_aminities?.map((item, index) => {
                    if (item.aminity_type === 3) {
                      return (
                        <div key={item.id}>
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={item.icon} alt={item.name} />
                            <span>{item.name}</span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            {/* about */}
            <div className="col-span-7 bg-white rounded-lg ">
              <div className="px-[1rem] py-[1.5rem]">
                <h4 className="flex gap-2 font-[500] text-darkBlue mb-[1rem] text-[1rem]">
                  <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                  About
                </h4>
                <hr />
                <p className="text-lightGray text-[0.8rem] mt-[1.2rem]">
                  This spacious fully_furnished Gated community apartment for
                  boys, girls, and family is located at Gachibowli, Hyderabad
                  and is close to the major commercial centres of the area. This
                  Gated community flat with a floor space of 2000 sq.ft in
                  total. This house features Tv and Air conditioner and more. It
                  has 3 bathroom with all facilities. It can be rented at ₹33000
                  for full house. Book it now!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPreview;
