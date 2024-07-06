import React from "react";
import { Link , useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { FaQuestionCircle } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";

const routes = [
  { path: "/", label: "Dashboard", icon: MdDashboard },
  { path: "/mobile", label: "Mobiles", icon: FaMobileScreenButton },
  { path: "/brands", label: "Brands", icon: IoMdPricetag },
  { path: "/news", label: "News", icon: GiNewspaper },
  { path: "/users", label: "User's", icon: FaUsers },
  { path: "/about", label: "About", icon: FaCircleInfo },
  { path: "/services", label: "Services", icon: GrServices },
  { path: "/faq", label: "FAQ's", icon: FaQuestionCircle },
  { path: "/ads", label: "Ads", icon: MdAdsClick },
];

const MenuSideBar = ({ setSidebarOpen }) => {

  const location = useLocation();

  const handleRemoveMenu = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="px-4">
      <button
        onClick={handleRemoveMenu}
        className="XbtnInMenuSideBar"
      >
        x
      </button>

      <div  className="sideBarlogoName " onClick={handleRemoveMenu}>
        <Link to="/" className="font-bold text-[18px] px-4 ">
          Mobile<span className="font-normal">Mate</span>
        </Link>
      </div>
      <div className="MenuSideBarContainer">
        {routes.map((route) => (
          <Link to={route.path} className= {` MenuSideBarbtn button ${location.pathname === route.path ? "active" : ""}`} onClick={handleRemoveMenu}>
            {React.createElement(route.icon, { size: 15 })}

            <span>{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuSideBar;




    //  * <div  className="space-y-1 py-4 text-gray-500 text-[12px] ">
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/" className="flex items-center space-x-3">
    //         <MdDashboard size={15} /> <span>Dashboard</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/mobile" className="flex items-center space-x-3">
    //         <FaMobileScreenButton size={15} /> <span>Mobile</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/brands" className="flex items-center space-x-3">
    //         <IoMdPricetag size={15} /> <span>Brands</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/news" className="flex items-center space-x-3">
    //         <GiNewspaper size={15} /> <span>News</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/users" className="flex items-center space-x-3">
    //         <FaUsers size={15} /> <span>User's</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/about" className="flex items-center space-x-3">
    //         <FaCircleInfo size={15} /> <span>About</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/services" className="flex items-center space-x-3">
    //         <GrServices size={15} /> <span>Services</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/faq" className="flex items-center space-x-3">
    //         <FaQuestionCircle size={15} /> <span>FAQ's</span>
    //       </Link>
    //     </button>
    //     <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
    //       <Link to="/ads" className="sideBarLinks">
    //       <MdAdsClick size={15} /> <span>Ad's</span>
    //       </Link>
    //     </button>
       
    //   </div> 