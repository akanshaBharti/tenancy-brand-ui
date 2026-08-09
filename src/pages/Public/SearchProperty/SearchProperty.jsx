import React, { useState } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../../../components/Button/YellowButton";

// images
import tenancyLogo from "../../../assets/image/tenancyLogo.svg";
import barIcon from "../../../assets/image/Search/barIcon.svg";
import search_filter from "../../../assets/image/Search/search_filter.svg";
import premiumBtn from "../../../assets/image/Search/premiumBtn.svg";
import searchApartment from "../../../assets/image/Search/searchApartment.svg";
import map from "../../../assets/image/Search/map.svg";
import arrow_right from "../../../assets/image/Search/arrow-right.svg";
import search from "../../../assets/image/Search/search.svg";
import fully from "../../../assets/image/Home/fully.svg";
import bhk from "../../../assets/image/Home/bhk.svg";
import sqft from "../../../assets/image/Home/sqft.svg";

const SearchProperty = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(true);
  };

  const handleSetFilter = () => {
    setFilter(false);
  };
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

  const Filters = () => {
    return (
      <div className=" mb-[8rem]">
        <div className="flex justify-between mt-[2rem]">
          <button
            onClick={handleSetFilter}
            className="flex gap-[0.5rem] items-center"
          >
            <img src={arrow_right} alt="arrow_right img" className="w-5 h-5" />
            Search Filters
          </button>

          {/* <div className=""> */}
          <button
            onClick={handleSetFilter}
            className="font-[500] flex items-center gap-[0.5rem] bg-white rounded-full px-2 py-1 border"
          >
            <img src={search_filter} alt="filter img" className="w-4 h-4 " />
            Filters
          </button>

          {/* </div> */}
        </div>

        {/* filters section */}
        <div className="grid grid-cols-12 px-[6rem] gap-[1rem] py-[1.5rem]">
          {/* pricing */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Pricing</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Low to High
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  High to Low
                </label>
              </div>
            </div>
          </div>

          {/* property type plans */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Property Type Plans</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Premium</label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Standard</label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Sharing</label>
              </div>
            </div>
          </div>

          {/* near by locations */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">
              Near-by Location Options
            </h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Yes</label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">No</label>
              </div>
            </div>
          </div>

          {/* Distance */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Distance</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  with in 2 Km
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  with in 5 Km
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  with in 7 Km
                </label>
              </div>
            </div>
          </div>

          {/* looking for */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Looking for</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Bed</label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Room</label>
              </div>
            </div>
          </div>

          {/* stay with */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Stay with </h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Boys</label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">Girls</label>
              </div>
            </div>
          </div>

          {/* furnishing type */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Furnishing Type</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Fully Furnished
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Semi Furnished
                </label>
              </div>
            </div>
          </div>

          {/* Parking */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Parking</h4>
            <div className="flex gap-[2rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Two-wheeler
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Four-wheeler{" "}
                </label>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Budget</h4>
            <div className="mt-[1rem]">
              <div className="flex justify-between text-sm text-gray-600">
                <span>5K below</span>
                <span>10K</span>
                <span>25K</span>
                <span>50K above</span>
              </div>
              <div className="relative mt-4">
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  className="w-full h-2 bg-black rounded-full"
                />
                <div
                  className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 h-2 z-0"
                  style={{ left: "25%", right: "50%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="col-span-6 bg-white rounded-lg p-[1rem]">
            <h4 className="font-[500] text-[1.1rem]">Availability</h4>
            <div className="flex flex-col gap-[1rem] mt-[1rem]">
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  Immediate
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  With in 7 Days
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  With in 15 Days
                </label>
              </div>
              <div className="flex gap-[1rem] items-center">
                <input type="radio" />
                <label className="text-[#334155] text-[0.9rem]">
                  With in 30 Days
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

      {filter ? (
        <Filters />
      ) : (
        <>
          {/* search */}
          <div className="flex justify-between mt-[2rem]">
            {/* search */}
            <div className="font-[500] w-[25%] flex justify-between bg-white rounded-full  px-1">
              <input
                type="search"
                placeholder="Enter locality or landmark "
                className="font-[400]  ml-2 w-full focus:outline-none"
              />
              <img src={search} alt="search img" className="w-9 h-9" />
            </div>

            <div className="flex gap-[1rem]">
              {/* plans */}
              <div className="font-[500] bg-white rounded-full  p-1  border border-#D1D5DB]">
                <select className="font-[400]  ml-2 mr-1 focus:outline-none">
                  <option value="">Plans</option>
                  <option value="premium">Premium Plan</option>
                  <option value="">Standard Plan</option>
                  <option value="">Shared Plan</option>
                </select>
              </div>

              {/* looking for  */}
              <div className="font-[500] bg-white w-[25%] rounded-full  p-1  border border-#D1D5DB]">
                <select className="font-[400]  ml-2 mr-1 focus:outline-none pr-3">
                  <option value="">Looking for</option>
                  <option value="">Bed</option>
                  <option value="">Whole Room</option>
                </select>
              </div>

              {/* tenant type */}
              <div className="font-[500] bg-white rounded-full  p-1  border border-#D1D5DB]">
                <select className="font-[400]  ml-2 mr-2 focus:outline-none pr-3">
                  <option value="">Tenant type</option>
                  <option value="">Male </option>
                  <option value="">Female</option>
                </select>
              </div>
              {/* pricing */}
              <div className="flex items-center font-[500] bg-white rounded-full  p-1  border border-#D1D5DB]">
                <select className="font-[400]  ml-2 focus:outline-none">
                  <option value="">Pricing</option>
                  <option value="">High to Low</option>
                  <option value="">Low to High</option>
                </select>
                {/* <img src={flexible_plan} alt="flexible_plan img" className="w-4 h-4"/> */}
              </div>

              {/* filter button */}
              <div className="font-[500] w-[25%] flex items-center  gap-[0.5rem] bg-white rounded-full  px-1 border border-#D1D5DB]">
                <button onClick={handleFilter} className="ml-2">
                  Filters
                </button>
                <img
                  src={search_filter}
                  alt="filter img"
                  className="w-4 h-4 mr-2"
                />
              </div>
            </div>
          </div>

          {/* no of results */}
          <div className="mt-[3rem] flex justify-between mb-[1rem]">
            <h4 className="font-[600] text-[1rem]">
              120 results | Flats for Rent in Madhapur, Hyderabad
            </h4>
            <button className="bg-white rounded-full px-[1.2rem] py-1">
              My Wishlist 💗
            </button>
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
      )}
    </div>
  );
};

export default SearchProperty;
