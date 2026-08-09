import React, { useState } from "react";
import YellowButton from "../../../components/Button/YellowButton";

// images
import shield from "../../../assets/image/Owners/shield.svg";
import customized from "../../../assets/image/Owners/customized.svg";
import subsImg from "../../../assets/image/Owners/subsImg.svg";
import flexible from "../../../assets/image/Owners/flexible.svg";
import sublet from "../../../assets/image/Owners/sublet.svg";
import workflow from "../../../assets/image/Owners/workflow.svg";
import fixed from "../../../assets/image/Owners/fixed.svg";
import zeroVacancy from "../../../assets/image/Owners/zeroVacancy.svg";
import digital from "../../../assets/image/Owners/digital.svg";
import proactive from "../../../assets/image/Owners/proactive.svg";
import effortless from "../../../assets/image/Owners/effortless.svg";
import swift from "../../../assets/image/Owners/swift.svg";
import regular from "../../../assets/image/Owners/regular.svg";
import comprehensive from "../../../assets/image/Owners/comprehensive.svg";
import owner_tenant from "../../../assets/image/Owners/owner_tenant.svg";
import thorough from "../../../assets/image/Owners/thorough.svg";
import list from "../../../assets/image/Owners/list.svg";
import flexible_plan from "../../../assets/image/Owners/flexible_plan.svg";
import appliance from "../../../assets/image/Owners/appliance.svg";
import furnishing from "../../../assets/image/Owners/furnishing.svg";
import arrow from "../../../assets/image/Owners/arrow.svg";
import heart from "../../../assets/image/Owners/heart.svg";
import wifi from "../../../assets/image/Owners/wifi.svg";
import asterisk from "../../../assets/image/Owners/asterisk.svg";
import percent from "../../../assets/image/Owners/percent.svg";
import compass from "../../../assets/image/Owners/compass.svg";
import cloud from "../../../assets/image/Owners/cloud.svg";
import thumbs from "../../../assets/image/Owners/thumbs.svg";
import repeat from "../../../assets/image/Owners/repeat.svg";
import rupee from "../../../assets/image/Owners/rupee.svg";
import { useNavigate } from "react-router-dom";

const FlexibleManage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  const handleSubscription = () => {
    setIsActive(true);
  };
  const handleSubLet = () => {
    setIsActive(false);
  };

  const handleGetStarted = () => {
    navigate("/register");
  };

  const Subscription = () => {
    return (
      <>
        <div>
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Stay in Control, Leave the Hassle to Us
          </h4>
          <p className="text-lightGray text-[0.9rem]">
            Perfect for owners who want oversight without the day-to-day stress.
          </p>
        </div>
        <div className="grid grid-cols-12 py-[1.2rem] gap-[2rem] ">
          <div className="col-span-7 flex flex-col gap-[1rem]">
            <div className="flex items-center gap-[1rem] bg-[#DEFAFC] border border-1 border-[#C6DCDE] rounded-lg py-[1rem] px-[1.5rem]">
              <img src={shield} alt="shield img" className="w-8 h-8" />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Minimized Vacancy Risk{" "}
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  We shoulder the burden of filing your property
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-[1rem] bg-[#DEFAFC] border border-1 border-[#C6DCDE] rounded-lg py-[1rem] px-[1.5rem]">
              <img src={flexible} alt="flexible img" className="w-8 h-8" />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Flexible Commission
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  Pay based on your level of involvement
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-[1rem] bg-[#DEFAFC] border border-1 border-[#C6DCDE] rounded-lg py-[1rem] px-[1.5rem]">
              <img src={customized} alt="customized img" className="w-8 h-8" />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Customized Management
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  Choose which tasks you want us to handle
                </span>
              </h4>
            </div>
          </div>
          <div className="col-span-5">
            <img src={subsImg} alt="subs" className="max-w-[420px]" />
          </div>
        </div>
      </>
    );
  };

  const ServicesSubs = () => {
    return (
      <div className="py-[5rem]">
        <div className="text-center">
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Included Services
          </h4>
          <p className="text-lightGray text-[1rem]">
            Perfect for owners who want oversight without the day-to-day stress.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[1rem] px-[7rem] py-[2rem]">
          <div className="col-span-3"></div>
          {/* premium */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img src={list} alt="list img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Premium Property Listing
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Showcase your property on our high-traffic platforms
              </span>
            </h4>
          </div>

          {/* thorough */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img src={thorough} alt="thorough img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Thorough Tenant Screening
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Profile creation, rating system, and<br></br> E-KYC verification
              </span>
            </h4>
          </div>

          {/* owner */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img
              src={owner_tenant}
              alt="owner_tenant img"
              className="w-8 h-8"
            />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Owner-Tenant Communication
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Facilitated interaction on your terms
              </span>
            </h4>
          </div>

          {/* Regular */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img src={regular} alt="regular img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Regular Inspections & Timely Rent Collection
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Secure storage and easy access
              </span>
            </h4>
          </div>

          {/* Comprehensive */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img
              src={comprehensive}
              alt="comprehensive img"
              className="w-8 h-8"
            />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Comprehensive Tenant Records
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Track interactions, payments, and maintenance <br></br> history
              </span>
            </h4>
          </div>

          {/* swift */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img src={swift} alt="swift img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Swift Maintenance & Repairs
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Prompt response to all property issues.
              </span>
            </h4>
          </div>

          {/* effortless */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img src={effortless} alt="effortless img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Effortless Viewing Scheduling
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Streamlined property tour coordination
              </span>
            </h4>
          </div>

          {/* proactive */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem]] px-[2rem]">
            <img src={proactive} alt="proactive img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Proactive Vacancy Management
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Strategies to minimize empty periods
              </span>
            </h4>
          </div>

          {/* Digital Document */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img src={digital} alt="digital img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Digital Document Management
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Secure and Efficient
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  };

  const SubLet = () => {
    return (
      <>
        <div className="flex flex-col items-end mr-[4rem]">
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Truly Passive Income, Guaranteed
          </h4>
          <p className="text-lightGray text-[0.9rem]">
            Ideal for hands-off owners seeking steady returns without any
            involvement.
          </p>
        </div>
        <div className="grid grid-cols-12 py-[1.2rem] gap-[2rem] ">
          <div className="col-span-7 flex flex-col gap-[1rem]">
            <div className="flex items-center gap-[1rem] bg-[#E7E7FA] border border-1 border-[#D3C6DE] rounded-lg py-[1rem] px-[1.5rem]">
              <img
                src={zeroVacancy}
                alt="zeroVacancy img"
                className="w-8 h-8"
              />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Zero Vacancy Risk
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  We ensure continuous rental income
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-[1rem] bg-[#E7E7FA] border border-1 border-[#D3C6DE] rounded-lg py-[1rem] px-[1.5rem]">
              <img src={fixed} alt="fixed img" className="w-8 h-8" />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Fixed Rent + Growth
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  Enjoy stable income with periodic increases
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-[1rem] bg-[#E7E7FA] border border-1 border-[#D3C6DE] rounded-lg py-[1rem] px-[1.5rem]">
              <img src={workflow} alt="workflow img" className="w-8 h-8" />
              <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
                Comprehensive Management
                <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                  We handle everything, from tenants to maintenance
                </span>
              </h4>
            </div>
          </div>
          <div className="col-span-5">
            <img src={sublet} alt="sublet" className="w-[26rem] " />
          </div>
        </div>
      </>
    );
  };

  const ServicesSubLet = () => {
    return (
      <div className="py-[5rem]">
        <div className="text-center">
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Included Services
          </h4>
          <p className="text-lightGray text-[1rem]">
            Perfect for owners who want oversight without the day-to-day stress.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[1rem] px-[7rem] py-[2rem]">
          <div className="col-span-3"></div>
          {/* flexible */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img
              src={flexible_plan}
              alt="flexible_plan img"
              className="w-8 h-8"
            />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Flexible Plan Conversion
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Option to switch to subscription plan when desired
              </span>
            </h4>
          </div>

          {/* full property */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.6rem] px-[2rem]">
            <img src={zeroVacancy} alt="zeroVacancy img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Full Property Management
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                We handle everything, giving you true passive income
              </span>
            </h4>
          </div>

          {/* guranteed */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img src={fixed} alt="fixed img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Guranteed Fixed Rent
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Enjoy stable income with periodic increase
              </span>
            </h4>
          </div>

          {/* Furnishing */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img src={furnishing} alt="furnishing img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Furnishing Services
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                We can provide furniture and appliances on demand <br></br>
                &nbsp;&nbsp; * 18-month initial lock-in period<br></br>
                &nbsp;&nbsp; * Furniture ownership transfers to you post lock-in{" "}
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;(based on your preference)
              </span>
            </h4>
          </div>

          {/* aapliance */}
          <div className="col-span-6 flex items-center gap-[1rem] bg-[#FFF5CC] rounded-lg py-[1.2rem] px-[2rem]">
            <img src={appliance} alt="appliance img" className="w-8 h-8" />
            <h4 className="flex flex-col font-[600] text-[1.1rem] text-darkBlue">
              Appliance Rentals
              <span className="m-0 text-lightGray text-[0.9rem] font-[500]">
                Enhance tenant satisfaction with modern amenities<br></br>
                (Available after initial lock-in period)
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  };

  const ChoosePlan = () => {
    
    return (
      <div className="px-[7rem]">
        <div className="text-center">
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Choose Your Perfect Plan: Subscription or Sub-Letting
          </h4>
        </div>
        <div className="grid grid-cols-12 my-[1rem] gap-[2rem]">
          {/* Subscription plan */}
          <div className="col-span-6 bg-[#DEFAFC] shadow-lg">
            <h4 className="text-center font-[500] text-[1.4rem] text-white bg-[#08555E] rounded-t-lg py-[1rem]">
              Subscription plan
            </h4>
            <div className="rounded-b-lg py-[1.5rem] px-[2.5rem] flex flex-col gap-[1.2rem]">
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={percent} alt="percent img" className="w-7 h-7" />
                Commission-based pricing
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={asterisk} alt="asterisk img" className="w-7 h-7" />
                Owner retains vacancy risk
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={wifi} alt="wifi img" className="w-7 h-7" />
                Maintain control with regualr updates
              </h4>

              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={heart} alt="heart img" className="w-7 h-7" />
                Reduce workload through our property oversight
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={compass} alt="compass img" className="w-7 h-7" />
                Flexible involvement in decision-making
              </h4>
            </div>

            <div className="px-[6rem] pb-[1.5rem] font-[500] flex flex-col items-center gap-[1rem]">
              <YellowButton
                px={"px-[1rem]"}
                py={"py-[0.7rem]"}
                rounded={"rounded-xl"}
                name="Get Started with Subscription Plan"
                onClick={handleGetStarted}
              />
              <button className="flex gap-[0.5rem] items-center ">
                Schedule a Free Consultation
                <img src={arrow} alt="arrow img" />
              </button>
            </div>
          </div>

          {/* sublet */}
          <div className="col-span-6 bg-[#E7E7FA] shadow-lg">
            <h4 className="text-center font-[500] text-[1.4rem] text-white bg-[#4D1A7F] rounded-t-lg py-[1rem]">
              Sub-Letting plan
            </h4>
            <div className="rounded-b-lg py-[1.5rem] px-[2.5rem] flex flex-col gap-[1.2rem]">
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={cloud} alt="cloud img" className="w-7 h-7" />
                Enjoy complete hands-off management
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img
                  src={furnishing}
                  alt="furnishing img"
                  className="w-7 h-7"
                />
                Option for furnishing services
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={thumbs} alt="thumbs img" className="w-7 h-7" />
                We assure all vacancy risk
              </h4>

              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img src={fixed} alt="fixed img" className="w-7 h-7" />
                Guranteed fixed income with periodic increases
              </h4>
              <h4 className="text-[1rem] flex gap-[1rem] items-center">
                <img
                  src={zeroVacancy}
                  alt="zeroVacancy img"
                  className="w-7 h-7"
                />
                Full property oversight and maintenance
              </h4>
            </div>

            <div className="px-[6rem] pb-[1.5rem] font-[500] flex flex-col items-center gap-[1rem]">
              <YellowButton
                px={"px-[1rem]"}
                py={"py-[0.7rem]"}
                rounded={"rounded-xl"}
                name="Get Started with Sub-Letting Plan"
                onClick={handleGetStarted}
              />
              <button className="flex gap-[0.5rem] items-center ">
                Schedule a Free Consultation
                <img src={arrow} alt="arrow img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const KeyDifferences = () => {
    return (
      <div className="px-[7rem] py-[1rem] mb-[8rem]">
        <div className="text-center">
          <h4 className="font-[600] text-[1.6rem] text-darkBlue">
            Key Differences
          </h4>
        </div>
        <div className="grid grid-cols-12 border border-[#D1D5DB] rounded-lg bg-[#E7E7FA] mt-[1rem]  ">
            {/* metrics */}
          <div className="col-span-6 font-[500]  bg-gradient-to-r from-[#E7E7FA] to-red-50 rounded-l-lg p-[1rem]">
            <h4 className="text-[1rem] text-lightGray mb-2">Metrics</h4>
            <h4 className="text-[1.1rem] flex gap-[1rem] items-center">
              <img src={rupee} alt="rupee img" className="w-5 h-5" />
              Income
            </h4>
            <h4 className="text-[1.1rem] flex gap-[1rem] items-center">
              <img src={asterisk} alt="asterisk img" className="w-5 h-5" />
              Risk
            </h4>
            <h4 className="text-[1.1rem] flex gap-[1rem] items-center">
              <img src={repeat} alt="repeat img" className="w-5 h-5" />
              Involvement
            </h4>
          </div>
          {/* subscription */}
          <div className="col-span-3 font-[500] bg-[#DEFAFC] rounded-l-lg p-[1rem] border border-l-[#D1D5DB]">
          <h4 className="text-[1rem] text-lightGray mb-2">Subscription plan</h4>
            <h4 className="text-[1.1rem] ">
              Variable
            </h4>
            <h4 className="text-[1.1rem] ">
              Owner-held
            </h4>
            <h4 className="text-[1.1rem] ">
              Flexible
            </h4>
          </div>
          {/* sub letting */}
          <div className="col-span-3 font-[500] bg-[#E7E7FA] rounded-r-lg p-[1rem] border border-l-[#D1D5DB]">
          <h4 className="text-[1rem] text-lightGray mb-2">Sub-letting plan</h4>
            <h4 className="text-[1.1rem] ">
              Fixed
            </h4>
            <h4 className="text-[1.1rem] ">
              Tenancy-held
            </h4>
            <h4 className="text-[1.1rem] ">
              Minimal
            </h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="text-center py-[2.5rem] px-[15rem]">
        <h4 className="font-[600] text-[1.9rem] text-darkBlue">
          Flexible Management Plans Tailored for You
        </h4>
        <p className="text-lightGray">
          Choose the perfect way to list and manage your property with our
          customized plans. Whether you prefer hands-on involvement or a
          completely passive approach, we've got you covered.
        </p>
        <div className="flex justify-center items-center py-[0.4rem]   text-center font-[500] bg-[#EEEEEE] gap-[1rem] rounded-xl mx-[16.8rem] mt-[1.5rem]">
          <button
            onClick={handleSubscription}
            className={` py-[0.4rem] px-[1rem] rounded-lg ${
              isActive ? "bg-white" : ""
            }`}
          >
            Subscription Plan
          </button>
          <button
            onClick={handleSubLet}
            className={` rounded-lg py-[0.4rem] px-[1rem] ${
              isActive ? "" : "bg-white"
            }`}
          >
            Sub-Letting Plan
          </button>
        </div>
      </div>

      <div className="px-[5rem]">
        {isActive ? (
          <>
            <Subscription />
            <ServicesSubs />
          </>
        ) : (
          <>
            <SubLet />
            <ServicesSubLet />
          </>
        )}

        <ChoosePlan />
        <KeyDifferences />
      </div>
    </div>
  );
};

export default FlexibleManage;
