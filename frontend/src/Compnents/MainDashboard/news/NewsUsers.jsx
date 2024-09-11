import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const NewsUsers = ({ NewsUsersApis }) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 13,
    slidesToScroll: 4,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 6000, // Set autoplay speed to 2 seconds
  };
  return (
    <div className="grid md:grid-cols-10 justify-between px-4 mt-2 gap-3">
      <Slider {...settings} className="w-[870px]">
        {NewsUsersApis.map((user, index) => (
          <Link key={index} className="space-y-2">
            <img
              src={user.img}
              alt="profiles"
              className="w-[60px] h-[60px] rounded-full mx-1 border-[2px] border-blue-500"
            />
            <h1 className="text-[11px] text-center font-semibold text-gray-600 ">
              {user.name}
            </h1>
          </Link>
        ))}
      </Slider>
    </div>
    // <div className="mt-3 grid grid-cols-8">
    //   {
    //     NewsUsersApis.map((user) => (
    //   <div className="border-2">
    //     <img
    //       src={user.img}
    //       alt="profiles"
    //       className="w-[70px] h-[70px] rounded-full border-[4px] border-green-950"
    //     />
    //     <h1 className="text-sm  font-semibold text-gray-700 ">
    //       {user.name}
    //     </h1>
    //   </div>
    //     ))

    //   }
    // </div>
  );
};

export default NewsUsers;
