import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";


const routes = [
  { path: "/", label: "Dashboard", icon: MdDashboard },
  { path: "/MainMobileComp", label: "Mobiles", icon: FaMobileScreenButton },
  { path: "/mobileBrandsMainSec", label: "Mobile Brands", icon: IoMdPricetag },
  { path: "/mainNewsContainer", label: "News", icon: GiNewspaper },
  { path: "/users", label: "User's", icon: FaUsers },
  { path: "/ads", label: "Ads", icon: MdAdsClick },
];



const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="logoName">
        <Link to="/" className=" ">
          Mobile<span className="font-normal">Mate</span>
        </Link>
      </div>
      <div className="btnsContainer">
        {routes.map((route, index) => (
          <Link
            to={route.path}
            key={index}
            className={` sideBarbutton button ${
              location.pathname === route.path ? "active" : ""
            }`}
          >
            {React.createElement(route.icon, { size: 25 })}

            <span>{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
