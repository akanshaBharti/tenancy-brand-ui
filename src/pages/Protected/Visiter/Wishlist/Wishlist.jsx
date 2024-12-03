import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import YellowButton from "components/Button/YellowButton";

// images
import tenancyLogo from "assets/image/tenancyLogo.svg";
import barIcon from "assets/image/Search/barIcon.svg";
import search_filter from "assets/image/Search/search_filter.svg";
import premiumBtn from "assets/image/Search/premiumBtn.svg";
import searchApartment from "assets/image/Search/searchApartment.svg";
import map from "assets/image/Search/map.svg";
import arrow_right from "assets/image/Search/arrow-right.svg";
import search from "assets/image/Search/search.svg";
import fully from "assets/image/Home/fully.svg";
import bhk from "assets/image/Home/bhk.svg";
import sqft from "assets/image/Home/sqft.svg";
import previousBtn from "assets/image/VisiterProfile/arrow-left.svg";

const Wishlist = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  const cards = [
    {
      id: "1",
      image: searchApartment,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
      type: premiumBtn,
    },
    {
      id: "2",
      image: searchApartment,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
      type: premiumBtn,
    },
    {
      id: "3",
      image: searchApartment,
      apartment: "Alekhya Apartments",
      place: "Madhapur",
      price: "20,000",
      type: premiumBtn,
    },
  ];

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
        <div className="mt-[3rem] flex gap-1 mb-[1rem] items-center">
        <button onClick={() => navigate("/")}>
          <img src={previousBtn} alt="" className="w- h-" />
        </button> 
          <h4 className="font-[600] text-[1rem]">
            My Wishlist | 120 Properties
          </h4>
        </div>

        {/* search properties */}
        <div className="grid grid-cols-12 gap-[1rem] mb-[3rem]">
          <div className="col-span-7">
            {cards.map((item, index) => (
              <Link to={`/public/property-details/${item.id}`}>
                <div
                  className="flex bg-white rounded-lg p-[1rem] mb-[1rem]"
                  key={index}
                >
                  <img src={item.image} alt="apartment " className="" />
                  <div className="px-[1rem] ">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-[600] text-[1rem] text-darkBlue">
                          {item.apartment}
                        </h4>
                        <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                          {item.place}
                        </h4>
                      </div>
                      <img src={premiumBtn} alt="premiumBtn " />
                    </div>
                    <div className="flex gap-2 my-[1.4rem]">
                      <img src={bhk} alt="bhk" />
                      <img src={fully} alt="fully " />
                      <img src={sqft} alt="sqft " />
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-[600] text-[1.3rem] text-darkBlue">
                          ₹{item.price}{" "}
                        </h4>
                        <h4 className="m-0 text-lightGray font-[400] text-[0.8rem]">
                          per month
                        </h4>
                      </div>
                      <div className="mt-[1rem] mb-[0.5rem] font-[500]">
                        <YellowButton
                          px={"px-[1.3rem]"}
                          py={"py-[0.5rem]"}
                          rounded={"rounded-full"}
                          name="Schedule a Visit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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

export default Wishlist;
