import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import YellowButton from "components/Button/YellowButton";

// images
import tenancyLogo from "assets/image/tenancyLogo.svg";
import barIcon from "assets/image/Search/barIcon.svg";
import search_filter from "assets/image/Search/search_filter.svg";
import premiumBtn from "assets/image/Search/premiumBtn.svg";
import searchApartment from "assets/image/Search/searchApartment.svg";
import clockIcon from "assets/image/VisiterProfile/clockIcon.svg";
import dateIcon from "assets/image/VisiterProfile/dateIcon.svg";
import map from "assets/image/Search/map.svg";
import arrow_right from "assets/image/Search/arrow-right.svg";
import search from "assets/image/Search/search.svg";
import previousBtn from "assets/image/VisiterProfile/arrow-left.svg";
import WhiteButton from "components/Button/WhiteButton";
import useGetScheduleVisit from "pages/Public/data/useGetScheduleVisit";
import ScheduleVisit from "pages/Public/PropertyDetails/ScheduleVisit";

const ScheduledVisits = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [isScheduleVisitOpen, setIsScheduleVisitOpen] = useState(false);
  const [propertyId, setPropertyId] = useState(false);

  const [getData, getIsError, getIsLoading, getScheduleDetails] =
    useGetScheduleVisit();

  useEffect(() => {
    getScheduleDetails();
  }, []);

  const handleSchedule = (id) => {
    setIsScheduleVisitOpen(true);
    setPropertyId(id);
  };

  const handleClose = () => {
    setIsScheduleVisitOpen(false);
  };

  return (
    <div className="px-[5rem] py-[1.5rem] bg-[#F7F7F7]">
      {/* header */}
      <div className="flex justify-between">
        <Link to={"/"}>
          <img src={tenancyLogo} className="" alt="logo" />
        </Link>
        <div className="flex gap-[1rem]">
          <YellowButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="List your Property"
          />
          <img src={barIcon} alt="bar img" />
        </div>
      </div>

      <>
        {/* no of results */}
        <div className="mt-[3rem] flex justify-between mb-[1rem]">
          <div className="flex gap-1 items-center">
            <button onClick={() => navigate("/")}>
              <img src={previousBtn} alt="" className="w- h-" />
            </button>
            <h4 className="font-[600] text-[1rem]">
              Scheduled Visits | {getData?.data?.length || 0} Properties
            </h4>
          </div>
          <button className="bg-white rounded-full px-[1.2rem] py-1">
            My Wishlist 💗
          </button>
        </div>

        {/* search properties */}
        <div className="grid grid-cols-12 gap-[1rem] mb-[3rem]">
          <div className="col-span-7">
            {getData?.data?.map((item, index) => (
              // <Link
              // to={`/public/property-details/${item.id}`}>
              <div
                className="flex bg-white rounded-lg p-[1rem] mb-[1rem] w-[100%]"
                key={index}
              >
                <div className="flex justify-center items-center">
                  <img src={searchApartment} alt="apartment " className="" />
                </div>
                <div className="px-[1rem] w-[55%]">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-[600] text-[1rem] text-darkBlue">
                        {item.building_name.split(",")[0]}
                      </h4>
                      <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                        {item.building_name.split(",")[1]}
                      </h4>
                    </div>
                    <img src={premiumBtn} alt="premiumBtn " />
                  </div>
                  <div className="flex flex-col gap-2 mt-[1.2rem]">
                    <h4 className="flex items-center gap-[1rem] font-[600] text-[0.9rem] text-darkBlue">
                      <span className="flex items-center gap-1  font-[500] text-[0.9rem] text-lightGray">
                        <img src={dateIcon} alt="" />
                        Date
                      </span>
                      {new Date(item.date).toLocaleDateString()}
                    </h4>
                    <h4 className="flex items-center gap-[1rem] font-[600] text-[0.9rem] text-darkBlue">
                      <span className="flex items-center gap-1 font-[500] text-[0.9rem] text-lightGray">
                        <img src={clockIcon} alt="" />
                        Time
                      </span>
                      {item.time_slot}
                    </h4>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="mt-[1rem] mb-[0.5rem] font-[500]">
                      <WhiteButton
                        px={"px-[1.3rem]"}
                        py={"py-[0.5rem]"}
                        rounded={"rounded-full"}
                        name="Re-Schedule Visit"
                        onClick={() => handleSchedule(item.id)}
                      />
                    </div>
                    <div className="mt-[1rem] mb-[0.5rem] font-[500]">
                      <YellowButton
                        px={"px-[1.3rem]"}
                        py={"py-[0.5rem]"}
                        rounded={"rounded-full"}
                        name="See on Maps"
                      />
                    </div>
                  </div>

                  {isScheduleVisitOpen && (
                    <ScheduleVisit
                      onClose={handleClose}
                      open={handleSchedule}
                      getData={getData?.data}
                      propertyId={propertyId}
                      buildingName={`${item.building_name.split(",")[0]},${
                        item.building_name.split(",")[1]
                      }`}
                    />
                  )}
                </div>
              </div>
              // </Link>
            ))}
          </div>

          <div className="col-span-5">
            <img src={map} alt="map" className="" />
          </div>
        </div>
      </>
    </div>
  );
};

export default ScheduledVisits;
