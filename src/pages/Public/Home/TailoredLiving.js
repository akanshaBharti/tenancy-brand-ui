import React, { useEffect, useRef, useState } from "react";
import YellowButton from "../../../components/Button/YellowButton";

// images
import sofa from "../../../assets/image/Home/sofa.svg";
import bhk from "../../../assets/image/Home/bhkProp.svg";
import expand from "../../../assets/image/Home/expand.svg";
import rightArrow from "../../../assets/image/Home/arrow-right.svg";
import premium from "../../../assets/image/Home/premium.svg";
import location from "../../../assets/image/Home/location.svg";
import access from "../../../assets/image/Home/access.svg";
import ideal from "../../../assets/image/Home/ideal.svg";
import bed from "../../../assets/image/Home/bed.svg";
import sharedImg from "../../../assets/image/Home/sharedImg.svg";
import standard from "../../../assets/image/Home/standard.svg";
import heart from "../../../assets/image/Home/heart.svg";
import schedule from "../../../assets/image/Home/schedule.svg";
import compare from "../../../assets/image/Home/compare.svg";
import photo_stack from "../../../assets/image/Home/photo_stack.svg";
import property from "../../../assets/image/Home/property.svg";
import link from "../../../assets/image/Home/link.svg";
import complete from "../../../assets/image/Home/complete.svg";
import indian_rupee from "../../../assets/image/Home/indian_rupee.svg";
import paperwork from "../../../assets/image/Home/paperwork.svg";
import house_plus from "../../../assets/image/Home/house_plus.svg";
import map from "../../../assets/image/Home/map.svg";
import { Link } from "react-router-dom";
import useGetHomeProperties from "../data/useGetHomeProperties";

const TailoredLiving = () => {
  const [getPropertiesData, , , getProperties] = useGetHomeProperties();
  const [properties, setProperties] = useState([]);
  const cardsRef = useRef(null);
  const premiumCardsRef = useRef(null);
  const standarCardsRef = useRef(null);

  useEffect(() => {
    getProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getPropertiesData?.data) {
      if (getPropertiesData?.data?.results.length > 0) {
        setProperties(getPropertiesData.data.results);
      }
    }
  }, [getPropertiesData]);

  const scrollRightPremium = () => {
    if (premiumCardsRef.current) {
      premiumCardsRef.current.scrollLeft += 300;
    }
  };
  const scrollRightStandard = () => {
    if (standarCardsRef.current) {
      standarCardsRef.current.scrollLeft += 300;
    }
  };
  const scrollRightShared = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 300;
    }
  };
  const Premium = () => {
    return (
      <div className="px-[5rem] pb-[3rem]">
        <div className="rounded-2xl bg-[#E7E7FA] p-[1.6rem]">
          {/* premium plan */}
          <div className="grid grid-cols-12 mb-[1.5rem]">
            <div className="col-span-6">
              <img src={premium} alt="premium" />
            </div>
            <div className="col-span-6 py-[1.5rem] px-[1.5rem] mt-2">
              <h4 className="font-[600] text-[1.8rem] text-darkBlue">
                Premium Plan
              </h4>
              <p className="text-lightGray font-[400]">
                Luxury meets convenience in exclusive gated <br></br>communities
              </p>
              <div className="mt-[2rem] flex flex-col gap-[0.9rem] text-darkBlue">
                <h4 className="flex gap-2 font-[400]">
                  <img src={location} alt="location" />
                  Prime locations in sought-after gated communities
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={bed} alt="bed" />
                  Stylishly furnished private rooms
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={access} alt="access" />
                  Access to high-end amenities
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={ideal} alt="ideal" />
                  Ideal for those who appreciate the finer things in life
                </h4>
              </div>
            </div>
          </div>

          {/* most popular */}
          <div className="flex justify-between text-darkBlue">
            <h4 className="text-[1.1rem] font-[600] ">Most Popular</h4>
            <button className="text-[500] flex gap-2 items-center">
              See All
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className="w-5 h-5"
                  />
            </button>
          </div>
          {/* most popular cards */}
          <div className="relative">
            <div
              ref={premiumCardsRef}
              className="flex gap-[1.5rem] mt-[1rem] overflow-x-scroll scroll-smooth hide-scrollbar"
            >
              {properties.map((item, index) => {
                if (item.property_plan === 1) {
                  return (
                    <Link
                     state={{properties:properties}}
                    to={`/public/property-details/${item.id}`}>
                      <div
                        className="bg-white rounded-lg p-2 w-[320px]"
                        key={item.id}
                      >
                        <img
                          src={item?.media?.[0]?.photo}
                          alt="apartment"
                          className="mb-[0.8rem]"
                        />
                        <h4 className="font-[500] text-[1rem] text-darkBlue">
                          {item.building_name}
                        </h4>
                        <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                          {item.area}
                        </h4>
                        <div className="flex gap-2 my-[0.8rem]">
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={bhk} alt="bhk" />
                            <span>{item.property_type}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={sofa} alt="sofa" />
                            <span>{item.property_condition}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={expand} alt="expand" />
                            <span>{item.total_square_feet} Sqft</span>
                          </div>
                        </div>
                        <h4 className="font-[600] text-[1.3rem] text-darkBlue">
                          ₹{item?.renting_details?.expected_rent_amount}{" "}
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
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            {/* Right arrow button (Fixed, doesn't scroll with content) */}
            <div className="bg-white rounded-full flex items-center justify-center p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 shadow-md">
              <button onClick={scrollRightPremium}>
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Standard = () => {
    return (
      <div className="px-[5rem] pb-[3rem]">
        <div className="rounded-2xl bg-[#DEFAFC] p-[1.6rem]">
          {/* shared plan */}
          <div className="grid grid-cols-12 mb-[1.5rem]">
            <div className="col-span-6 py-[1.5rem] mt-2">
              <h4 className="font-[600] text-[1.8rem] text-darkBlue">
                Standard Plan
              </h4>
              <p className="text-lightGray font-[400]">
                Comfort meets independence in prime locations
              </p>
              <div className="mt-[2rem] flex flex-col gap-[0.9rem] text-darkBlue">
                <h4 className="flex gap-2 font-[400]">
                  <img src={location} alt="location" />
                  Ideal balance of personal space and community
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={bed} alt="bed" />
                  Private, furnished rooms in standalone apartments
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={access} alt="access" />
                  Essential amenities for daily convenience
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={ideal} alt="ideal" />
                  Perfect for professionals and students <br></br> valuing
                  autonomy
                </h4>
              </div>
            </div>
            <div className="col-span-6">
              <img src={standard} alt="standard" />
            </div>
          </div>

          {/* most popular */}
          <div className="flex justify-between text-darkBlue">
            <h4 className="text-[1.1rem] font-[600]">Most Popular</h4>
            <button className="text-[500] flex gap-2 items-center">
              See All
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className="w-5 h-5"
                  />
            </button>
          </div>

          {/* most popular cards */}
          <div className="relative">
            <div
              className="flex gap-[1.5rem] mt-[1rem] overflow-x-scroll scroll-smooth hide-scrollbar"
              ref={standarCardsRef}
            >
              {properties.map((item, index) => {
                if (item.property_plan === 2) {
                  return (
                    <Link 
                     state={{properties:properties}}
                    to={`/public/property-details/${item.id}`}>
                      <div
                        className="bg-white rounded-lg p-2 w-[320px]"
                        key={item.id}
                      >
                        <img
                          src={item?.media?.[0]?.photo}
                          alt="apartment"
                          className="mb-[0.8rem]"
                        />
                        <h4 className="font-[500] text-[1rem] text-darkBlue">
                          {item.building_name}
                        </h4>
                        <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                          {item.area}
                        </h4>
                        <div className="flex gap-2 my-[0.8rem]">
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={bhk} alt="bhk" />
                            <span>{item.property_type}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={sofa} alt="sofa" />
                            <span>{item.property_condition}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={expand} alt="expand" />
                            <span>{item.total_square_feet} Sqft</span>
                          </div>
                        </div>
                        <h4 className="font-[600] text-[1.3rem] text-darkBlue">
                          ₹{item?.renting_details?.expected_rent_amount}{" "}
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
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            {/* Right arrow button (Fixed, doesn't scroll with content) */}
            <div className="bg-white rounded-full flex items-center justify-center p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 shadow-md">
              <button onClick={scrollRightStandard}>
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Shared = () => {
    return (
      <div className="px-[5rem] pb-[4rem]">
        <div className="rounded-2xl bg-[#FBEFD0] p-[1.6rem]">
          {/* shared plan */}
          <div className="grid grid-cols-12 mb-[1.5rem]">
            <div className="col-span-6">
              <img src={sharedImg} alt="shared" />
            </div>
            <div className="col-span-6 py-[1.5rem] px-[1.5rem] mt-2">
              <h4 className="font-[600] text-[1.8rem] text-darkBlue">
                Shared Plan
              </h4>
              <p className="text-lightGray font-[400]">
                Luxury meets convenience in exclusive gated communities
              </p>
              <div className="mt-[2rem] flex flex-col gap-[0.9rem] text-darkBlue">
                <h4 className="flex gap-2 font-[400]">
                  <img src={location} alt="location" />
                  Budget-friendly options in well-located apartments
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={bed} alt="bed" />
                  Shared rooms (max 2 persons) with quality furnishings
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={access} alt="access" />
                  All the amenities of out Standard Plan
                </h4>
                <h4 className="flex gap-2 font-[400]">
                  <img src={ideal} alt="ideal" />
                  Ideal for students and young professional seeking vibrant,{" "}
                  <br></br>communal living
                </h4>
              </div>
            </div>
          </div>

          {/* most popular */}
          <div className="flex justify-between text-darkBlue">
            <h4 className="text-[1.1rem] font-[600]">Most Popular</h4>
            <button className="text-[500] flex gap-2 items-center">
              See All
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className="w-5 h-5"
                  />
            </button>
          </div>
          {/* most popular cards */}
          <div className="relative">
            <div
              className="flex gap-[1.5rem] mt-[1rem] overflow-x-scroll scroll-smooth hide-scrollbar"
              ref={cardsRef}
            >
              {properties.map((item, index) => {
                if (item.property_plan === 3) {
                  return (
                    <Link 
                     state={{properties:properties}}
                    to={`/public/property-details/${item.id}`}>
                      <div
                        key={item.id}
                        className="bg-white rounded-lg p-2 w-[320px]"
                      >
                        <img
                          src={item?.media?.[0]?.photo}
                          alt="apartment"
                          className="mb-[0.8rem]"
                        />
                        <h4 className="font-[500] text-[1rem] text-darkBlue">
                          {item.building_name}
                        </h4>
                        <h4 className="text-lightGray font-[400] text-[0.8rem] ">
                          {item.area}
                        </h4>
                        <div className="flex gap-2 my-[0.8rem]">
                          <div className="flex items-center px-2.5 py-1.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={bhk} alt="bhk" />
                            <span>{item.property_type}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={sofa} alt="sofa" />
                            <span>{item.property_condition}</span>
                          </div>
                          <div className="flex items-center px-2.5 gap-[3px] bg-[#F3F4F6] text-[#6B7280] rounded-2xl text-[0.8rem]">
                            <img src={expand} alt="expand" />
                            <span>{item.total_square_feet} Sqft</span>
                          </div>
                        </div>
                        <h4 className="font-[600] text-[1.3rem] text-darkBlue">
                          ₹{item?.renting_details?.expected_rent_amount}{" "}
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
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            <div className="bg-white rounded-full flex items-center justify-center p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 shadow-md">
              <button onClick={scrollRightShared}>
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Unlock = () => {
    return (
      <div className="px-[5rem] pb-[4rem] ">
        <div className=" rounded-2xl px-[2.3rem] pt-[1.7rem] bg-[#DEFAFC] border-dashed border-2 border-lighGray">
          {/* <div className="col-span-8"> */}

          <h4 className=" text-[1.4rem] font-[600] mb-2 text-darkBlue">
            Unlock Perfect Home-Finding Experience
          </h4>
          <div className="flex justify-between ">
            <div>
              <p className="font-[400] text-lightGray">
                Sign up now and supercharge your accommodation hunt in
                Hyderabad. Our smart platform puts <br></br> you in control,
                making your search easier and more efficient than ever.
              </p>
              {/* </div> */}

              <div className="mt-[1.5rem] ml-2 flex flex-col gap-[0.9rem] text-darkBlue">
                <h4 className="flex gap-2 font-[500]">
                  <img src={heart} alt="heart" />
                  Curate your favourites with personalised wish list
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={compare} alt="compare" />
                  Compare properties side-by-side for informed decisions
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={schedule} alt="schedule" />
                  Schedule visits with ease
                </h4>
              </div>

              <div className="mt-[2rem]">
                <Link to="/register">
                  <button className="bg-darkBlue text-white py-2 px-[1.2rem] rounded-xl">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={photo_stack}
              alt="stack"
              className="w-[18rem] h-[18rem]"
            />
          </div>
        </div>
      </div>
    );
  };

  const YourProperty = () => {
    return (
      <div className="px-[5rem] pb-[3rem] ">
        <div className=" rounded-2xl px-[2.3rem] py-[1.7rem] bg-gradient-to-r from-[#FBEFD0] from-5% to-white to-90% border-dashed border-2 border-lighGray">
          <div className="flex justify-between ">
            <div>
              <h4 className=" text-[1.4rem] font-[600] mb-2 text-darkBlue">
                Your Property's Potential, Hassel-Free
              </h4>

              <p className="font-[400] text-lightGray">
                Turn your property into a profitable, hands-off investment. We
                handle<br></br> everything, so you can enjoy peace of mind and
                <br></br> steady returns.
              </p>

              <div className="mt-[1.5rem] ml-2 flex flex-col gap-[0.9rem] text-darkBlue">
                <h4 className="flex gap-2 font-[500]">
                  <img src={link} alt="link" />
                  Quality tenant matching
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={complete} alt="complete" />
                  Complete property management
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={indian_rupee} alt="indian_rupee" />
                  Timely rent collection
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={paperwork} alt="paperwork" />
                  Paperwork and legal compliance
                </h4>
                <h4 className="flex gap-2 font-[500]">
                  <img src={house_plus} alt="house_plus" />
                  Regular property maintenance
                </h4>
              </div>

              <div className="mt-[2rem]">
                <button className="bg-darkBlue text-white py-2 px-[1.2rem] rounded-xl">
                  List your property
                </button>
              </div>
            </div>
            <img
              src={property}
              alt="property"
              className="w-[30rem] h-[26rem]"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="text-center py-[2.5rem] px-[23rem]">
        <h4 className="font-[600] text-[1.9rem] text-darkBlue">
          Tailored Living Solutions for Every Tenant
        </h4>
        <p className="text-lightGray">
          Sign up now and supercharge your accommodation hunt in Hyderabad. Our
          smart platform puts <br></br> you in control, making your search
          easier and more efficient than ever.
        </p>
      </div>
      <Premium />
      <Standard />
      <Shared />
      <Unlock />
      <YourProperty />

      <div className="text-center pt-[5rem] text-darkBlue">
        <h4 className="font-[600] text-[1.9rem] ">
          See Why Renters and Owners Love Us.
        </h4>
        <img src={map} alt="map img" className="mt-[1rem]" />
      </div>
    </div>
  );
};

export default TailoredLiving;
