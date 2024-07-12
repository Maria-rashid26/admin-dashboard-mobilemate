import React from "react";
import { Link } from "react-router-dom";
import DashboardCategories from "./DashboardCategories";

const MainDashboard = () => {
  return (
    <div className="space-y-2">
      <DashboardCategories />
      <div className="grid grid-cols-2 py-2 gap-1 h-[24rem]  p-1">
        <Link to={"/news"} className=" bg-white rounded-md shadow-md border p-2">
          <div>News</div>
        </Link>
        <Link to={"/reviews"} className="bg-white rounded-md shadow-md border p-2">
          <div>Reviews</div>
        </Link>

        <div className="bg-white rounded-md shadow-md broder p-2">tital users </div>
        <div className="bg-white rounded-md shadow-md border p-2">mobiles </div>
      </div>
    </div>
  );
};

export default MainDashboard;
