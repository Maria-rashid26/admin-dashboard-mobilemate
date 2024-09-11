import React from "react";
import { Link } from "react-router-dom";
import DashboardCategories from "./DashboardCategories";

const MainDashboard = () => {
  return (
    <div className="">
      <DashboardCategories />
      <div className="grid grid-cols-2  h-[24rem] md:pt-2 pt-0 md:py-0 py-2  gap-2 ">
        <Link to={"/mainNewsContainer"} className=" bg-white rounded-md shadow-md shadow-gray-500 border p-2">
          <div>News</div>
        </Link>
        <Link to={"/reviews"} className="bg-white rounded-md shadow-md shadow-gray-500 border p-2">
          <div>Reviews</div>
        </Link>

        <div className="bg-white rounded-md shadow-md shadow-gray-500 border p-2">tital users </div>
        <Link to={"/mobileBrandsMainSec"} className="bg-white rounded-md shadow-md shadow-gray-500 border p-2">
          <div>Mobiles Brands</div>
        </Link>
      </div>
    </div>
  );
};

export default MainDashboard;
