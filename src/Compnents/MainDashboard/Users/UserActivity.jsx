import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiCoinStack, BiUser } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import UseerFeedAccordion from "./UseerFeedAccordion";

const userActivity = [
  { key: "Email", value: "marirashid2342@gmail.com" },
  { key: "Signup", value: "02:28:92" },
  { key: "Last Interaction", value: "02:28:73" },
  { key: "Web Session", value: "63" },
  { key: "First Interaction", value: "03 months ago" },
  { key: "Language ", value: "Eng , Urdu" },
  { key: "Browser ", value: "Chrome" },
];

const UserActivity = () => {
  return (
    <div className="pt-2 text-[12px] overflow-x-hidden md:w-full  w-[370px]">
      <Link to={"/users"}>
        <IoMdArrowRoundBack />
      </Link>
      <div className="md:flex md:space-x-2  md:h-[27rem] md:my-2 my-6 text-gray-600 space-y-4 md:space-y-0 ">
        <div className=" bg-white border border-[#c7c7f7] md:w-[40%] w-[350px] px-10 md:py-6 py-11 rounded-lg shadow-md shadow-[#6969df]  ">
          <img
            src="https://iheartcraftythings.com/wp-content/uploads/2023/05/cute-cat-drawing.jpg"
            alt="User"
            className="w-[65px] h-[65px] rounded-full border-[6px] shadow-md shadow-[#6969df]  border-white z-10 md:-mt-12 -mt-[5rem] ml-[7rem]"
          />

          <div className="text-center">
            <p className="text-[18px] font-semibold">John Doe</p>
            <p className=" font-semibold">#asdha23dsfsde4830</p>
          </div>

          <div className="text-[12px] font-semibold flex items-center space-x-1 ">
            <span>
              <BiCoinStack />
            </span>
            <span>User attributes</span>
            <span>(67)</span>
          </div>

          <input
            type="search"
            placeholder="Search"
            className="outline-none border h-[25px] rounded-lg px-2 my-2 border-[#6969df]"
          />

          <div className="overflow-y-auto h-[270px] mt-2 scroll-smooth">
            {userActivity.map((obje, index) => (
              <div className="flex py-2 border-b " key={index}>
                <p className="w-[120px] font-semibold">{obje.key}</p>
                <p className=" ">{obje.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#c7c7f7]  md:w-[60%] w-[350px] md:px-10 px-3 md:py-6 pt-6 rounded-lg  shadow-md shadow-[#6969df] ">
          <div className="flex items-center space-x-3 text-[16px] px-4 font-semibold">
            <span>
              <FiClock />
            </span>
            <span>Activity Feed (393)</span>
          </div>
          <p className="py-3 font-semibold text-[13px] px-4 ">23 Mar 2023</p>
          <div className="pb-3">
            <UseerFeedAccordion />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
