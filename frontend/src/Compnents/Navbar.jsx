import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link ,useLocation } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const routes = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/faq", label: "FAQ's" },
];

const Navbar = ({ toggleSidebar }) => {

  const location = useLocation()

  return (
    <div className="flex  items-center bg-gray-100/40 pt-4 pb-3 border-b">
      {/* hide above  md  */}
      <div className="divHideAboveMd">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-blue-900">
            <IoMdMenu size={25} />
          </button>
          <Link
            to="/"
            className="font-bold text-[16px] md:text-2xl ml-4 text-blue-900"
          >
            Mobile<span className="font-normal">Mate</span>
          </Link>
        </div>
        <div className="space-x-3 flex items-center text-gray-500">
 
            <input
              type="search"
              className="p-1 border mx-2 rounded"
              placeholder="Search"
            />
  
          <Link
            to={"/profile"}
            className=" profile"
          >
            <IoPersonCircleOutline size={23} />
          </Link>
        </div>
      </div>
      {/* hide below md */}

      <div className="divHideBelowMd">
        <div className="text-xl text-blue-900  ">Dashboard Panel</div>

        <div className="flex  items-center">
          {routes.map((route , index) => (
            <Link to={route.path} key={index} className={` navbarLinks button ${location.pathname === route.path ? "active" : ""}`}>
              <span>{route.label}</span>
            </Link>
          ))}

          <button>
            <input
              type="search"
              className="p-1 border mx-2 rounded"
              placeholder="Search"
            />
          </button>

          <Link
            to={"/profile"}
            className=" profile"
          >
            <IoPersonCircleOutline size={30} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;


        // <div className="flex  items-center">
        //   <Link
        //     to={"/about"}
        //     className=" px-4 hover:bg-gray-200 py-2  text-center hover:font-semibold hover:text-blue-900  items-center rounded-md duration-300"
        //   >
        //     About
        //   </Link>
        //   <Link
        //     to={"/services"}
        //     className=" px-4   hover:bg-gray-200 py-2  text-center hover:font-semibold hover:text-blue-900  items-center rounded-md duration-300"
        //   >
        //     Services
        //   </Link>
        //   <Link
        //     to={"/faq"}
        //     className=" px-4  hover:bg-gray-200 py-2     text-center hover:font-semibold hover:text-blue-900  items-center rounded-md duration-300"
        //   >
        //     FAQ's
        //   </Link>

        //   <button>
        //     <input
        //       type="search"
        //       className="p-1 border mx-2 rounded"
        //       placeholder="Search"
        //     />
        //   </button>

        //   <Link
        //     to={"/profile"}
        //     className=" text-center hover:font-semibold hover:text-blue-900  items-center duration-300"
        //   >
        //     <IoPersonCircleOutline size={30} />
        //   </Link>
        // // </div> 
