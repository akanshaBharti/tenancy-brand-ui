import React, { useRef, useState } from "react";
import Header from "../Home/Header";
import "../inputLabel.css";
import { Link } from "react-router-dom";
import DialogBox from "../../../components/DialogBox";

// images
import arrow_right from "../../../assets/image/Search/arrow-right.svg";
import property1 from "../../../assets/image/Property/property1.svg";
import property2 from "../../../assets/image/Property/property2.svg";
import property3 from "../../../assets/image/Property/property3.svg";
import property4 from "../../../assets/image/Property/property4.svg";
import fully_furnished from "../../../assets/image/Property/fully_furnished.svg";
import gated from "../../../assets/image/Property/gated.svg";
import bhk from "../../../assets/image/Property/bhk.svg";
import east_facing from "../../../assets/image/Property/east_facing.svg";
import sqft2000 from "../../../assets/image/Property/sqft2000.svg";
import bed from "../../../assets/image/Property/bed.svg";
import bath from "../../../assets/image/Property/bath.svg";
import living from "../../../assets/image/Property/living.svg";
import kitchen from "../../../assets/image/Property/kitchen.svg";
import balcony from "../../../assets/image/Property/balcony.svg";
import ac from "../../../assets/image/Property/ac.svg";
import geyser from "../../../assets/image/Property/geyser.svg";
import bed_comfort from "../../../assets/image/Property/bed_comfort.svg";
import sofa from "../../../assets/image/Property/sofa.svg";
import parking from "../../../assets/image/Property/parking.svg";
import tv from "../../../assets/image/Property/tv.svg";
import fridge from "../../../assets/image/Property/fridge.svg";
import microwave from "../../../assets/image/Property/microwave.svg";
import gasline from "../../../assets/image/Property/gasline.svg";
import gym from "../../../assets/image/Property/gym.svg";
import pool from "../../../assets/image/Property/pool.svg";
import sports from "../../../assets/image/Property/sports.svg";
import map_property from "../../../assets/image/Property/map_property.svg";
import toggle from "../../../assets/image/Property/toggle.svg";
import apartment_property from "../../../assets/image/Property/apartment_property.svg";
import YellowButton from "../../../components/Button/YellowButton";
import fully from "../../../assets/image/Home/fully.svg";
import property_bhk from "../../../assets/image/Home/bhk.svg";
import sqft from "../../../assets/image/Home/sqft.svg";
import rightArrow from "../../../assets/image/Home/arrow-right.svg";
import ScheduleVisit from "./ScheduleVisit";

const PropertyDetails = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showTenancy, setShowTenancy] = useState(false);
  const cardsRef = useRef(null);

  const [isScheduleVisitOpen, setIsScheduleVisitOpen] = useState(false);

  const handleSchedule = () => {
    setIsScheduleVisitOpen(true);
  };

  const handleClose = () => {
    setIsScheduleVisitOpen(false);
  };

  const cards = [
    {
      id: "1",
      image: apartment_property,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
    },
    {
      id: "2",
      image: apartment_property,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
    },
    {
      id: "3",
      image: apartment_property,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
    },
    {
      id: "4",
      image: apartment_property,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
    },
    {
      id: "5",
      image: apartment_property,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
    },
  ];

  const scrollRightShared = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-[#F7F7F7]">
      <Header />
      <div className="px-[5rem] mt-[1rem] ">
        <div className=" flex justify-between ">
          <Link to="/public/search" className="flex gap-[0.5rem] items-center">
            <img src={arrow_right} alt="arrow_right" className="w-5 h-5" />
            Back to search results
          </Link>

          <button className="font-[500] flex items-center gap-[0.5rem]">
            🤍 Add to Wishlist
          </button>
        </div>

        {/* property images */}
        <div className="bg-white p-[0.8rem] rounded-md flex mt-[1rem] gap-[0.5rem] grid grid-cols-12">
          <div className="col-span-6">
            <img src={property1} alt="property1" />
          </div>
          <div className="col-span-6">
            <img src={property2} alt="property2" />
          </div>
          <div className="col-span-6">
            <img src={property3} alt="property3" />
          </div>
          <div className="col-span-6">
            <img src={property4} alt="property4" />
          </div>
        </div>

        {/* property details */}
        <div className="grid grid-cols-12 mt-[1rem] gap-[1rem]">
          {/* property overview */}
          <div className="col-span-7 bg-white rounded-b-lg">
            <div className="rounded-t-lg bg-[#E7E7FA] p-[1rem]">
              <h4 className="font-[500] text-[1.2rem] text-darkBlue">
                Alekhya Radha Sadan Apartments
              </h4>
              <p className="text-lightGray font-[500] text-[0.9rem]">
                <b>Gachibowli</b>, Hyderabad, Telangana
              </p>
            </div>
            <div className="rounded-b-lg p-[1rem]">
              <h4 className="font-[500] text-darkBlue mb-[1rem]">Overview</h4>
              <div className="flex gap-[1rem] flex-wrap">
                <img
                  src={fully_furnished}
                  alt="fully_furnished"
                  className="w-[8rem]"
                />
                <img src={gated} alt="gated" className="w-[9rem]" />
                <img src={bhk} alt="bhk" className="w-[6rem]" />
                <img
                  src={east_facing}
                  alt="east_facing"
                  className="w-[12rem]"
                />
                <img src={sqft2000} alt="sqft2000" className="w-[14rem]" />
              </div>
            </div>
          </div>

          {/* no of room available */}
          <div className="col-span-5 bg-white rounded-b-lg">
            <div className="text-center rounded-t-lg bg-[#E7E7FA] p-[1rem]">
              <h4 className="font-[500] text-[1.2rem] text-[#1A1A7F]">
                1 Room Available
              </h4>
            </div>
            <div className="text-center justify-center flex gap-[9rem] rounded-b-lg px-[2rem] py-[1rem]">
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                ₹20,000
                <span className="font-[400] text-[0.8rem] text-lightGray">
                  Monthly Rent<br></br> (including Maintenance)
                </span>
              </h4>
              <h4 className="flex flex-col font-[500] text-[1.1rem] text-darkBlue">
                ₹40,000
                <span className="font-[400] text-[0.8rem] text-lightGray">
                  Security Deposit <br></br> (for two months)
                </span>
              </h4>
            </div>
            <hr className="m-0" />
            <div className="items-center flex flex-col gap-2 justify-center my-[1rem]">
              <YellowButton
                px={"px-[1.3rem]"}
                py={"py-[0.5rem]"}
                rounded={"rounded-lg"}
                name="Schedule a Visit"
                onClick={handleSchedule}
              />
              {isScheduleVisitOpen && (
                <ScheduleVisit onClose={handleClose} open={handleSchedule} />
              )}

              <h4 className="font-[400] text-[0.8rem] text-lightGray">
                Fill the application to request for visit
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
                <img src={bed} alt="bed" className="w-[5.8rem]" />
                <img src={bath} alt="bath" className="w-[5.8rem]" />
                <img src={living} alt="living" className="w-[5.2rem]" />
                <img src={kitchen} alt="kitchen" className="w-[4.2rem]" />
                <img src={balcony} alt="balcony" className="w-[4.3rem]" />
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
                <img src={ac} alt="ac" className="w-[3.2rem]" />
                <img src={geyser} alt="geyser" className="w-[4.6rem]" />
                <img
                  src={bed_comfort}
                  alt="bed_comfort"
                  className="w-[3.8rem]"
                />
                <img src={sofa} alt="kitchen" className="w-[3.8rem]" />
                <img src={parking} alt="parking" className="w-[4.6rem]" />
                <img src={tv} alt="tv" className="w-[3.2rem]" />
              </div>

              <h5 className="text-[0.9rem] text-lightGray font-[500] mb-2 mt-[1rem]">
                Kitchen
              </h5>
              <div className="flex gap-[1rem] flex-wrap">
                <img src={fridge} alt="fridge" className="w-[4.7rem]" />
                <img src={microwave} alt="microwave" className="w-[5.9rem]" />
                <img src={gasline} alt="gasline" className="w-[5.3rem]" />
              </div>

              <h5 className="text-[0.9rem] text-lightGray font-[500] mb-2 mt-[1rem]">
                Recreation
              </h5>
              <div className="flex gap-[1rem] flex-wrap">
                <img src={gym} alt="gym" className="w-[4rem]" />
                <img src={pool} alt="pool" className="w-[7.5rem]" />
                <img src={sports} alt="bed_comfort" className="w-[6.7rem]" />
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
                boys, girls, and family is located at Gachibowli, Hyderabad and
                is close to the major commercial centres of the area. This Gated
                community flat with a floor space of 2000 sq.ft in total. This
                house features Tv and Air conditioner and more. It has 3
                bathroom with all facilities. It can be rented at ₹33000 for
                full house. Book it now!
              </p>
            </div>
          </div>

          {/* terms and conditions */}
          <div className="col-span-7 bg-white rounded-lg ">
            <div className="px-[1rem] py-[1.5rem]">
              <div className="flex justify-between items-center">
                <h4
                  onClick={() => {
                    setShowTerms(!showTerms);
                  }}
                  className="flex gap-2 font-[500] text-darkBlue text-[1rem] cursor-pointer"
                >
                  <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                  Terms and condition
                </h4>
                <img
                  src={toggle}
                  alt="toggle button"
                  className={`w-[1.3rem] h-[1.3rem] ${
                    showTerms ? "transform -rotate-180 duration-200" : ""
                  }`}
                />
              </div>
              {showTerms && (
                <>
                  <hr />
                  <p className="text-lightGray text-[0.8rem] mt-[1.2rem]">
                    Terms and Conditions
                  </p>
                </>
              )}
            </div>
          </div>

          {/* tenancy will help you */}
          <div className="col-span-7 bg-white rounded-lg ">
            <div className="px-[1rem] py-[1.5rem]">
              <div className="flex justify-between items-center">
                <h4
                  onClick={() => {
                    setShowTenancy(!showTenancy);
                  }}
                  className="flex gap-2 font-[500] text-darkBlue text-[1rem] cursor-pointer"
                >
                  <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                  Tenancy will help you with
                </h4>
                <img
                  src={toggle}
                  alt="toggle button"
                  className={`w-[1.3rem] h-[1.3rem] ${
                    showTenancy ? "transform -rotate-180 duration-200" : ""
                  }`}
                />
              </div>
              {showTenancy && (
                <>
                  <hr />
                  <p className="text-lightGray text-[0.8rem] mt-[1.2rem]">
                    tenenacy help
                  </p>
                </>
              )}
            </div>
          </div>

          {/* explore nearby */}
          <div className="col-span-7 bg-white rounded-lg ">
            <div className="px-[1rem] py-[1.5rem]">
              <h4 className="flex gap-2 font-[500] text-darkBlue mb-[1rem] text-[1rem]">
                <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
                Explore nearby
              </h4>
              <img src={map_property} alt="map property" />
            </div>
          </div>
        </div>

        {/* nearby properties */}
        <div className="px-[1rem] py-[1rem] mt-[2rem]">
          <h4 className="flex gap-2 font-[500] text-darkBlue mb-[1rem] text-[1rem]">
            <span className="bg-[#FFDF33] w-2 rounded-t rounded-b"></span>
            Nearby Properties
          </h4>
        </div>
        {/* cards */}
        <div className="relative">
          <div
            className="px-[1rem] flex gap-[1.5rem] overflow-x-scroll scroll-smooth hide-scrollbar"
            ref={cardsRef}
          >
            {cards.map((item, index) => (
              <div
                className="mb-[5rem] bg-white rounded-lg p-2 min-w-[300px]"
                key={index}
              >
                <img
                  src={item.image}
                  alt="apartment "
                  className="mb-[0.8rem]"
                />
                <h4 className="font-[500] text-[1rem] text-darkBlue">
                  {item.apartment}
                </h4>
                <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                  {item.place}
                </h4>
                <div className="flex gap-2 my-[0.8rem]">
                  <img src={property_bhk} alt="bhk " />
                  <img src={fully} alt="fully " />
                  <img src={sqft} alt="sqft " />
                </div>
                <h4 className="font-[600] text-[1.3rem] text-darkBlue">
                  ₹{item.price}{" "}
                </h4>
                <h4 className="m-0 text-lightGray font-[400] text-[0.8rem]">
                  per month
                </h4>
                <div className="mt-[1rem] mb-[0.5rem] font-[500]">
                  <YellowButton
                    px={"px-[1rem]"}
                    py={"py-[0.5rem]"}
                    rounded={"rounded-lg"}
                    name="Schedule a Visit"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-full flex items-center justify-center p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 shadow-md">
            <button onClick={scrollRightShared}>
              <img
                src={rightArrow}
                alt="right arrow image"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
