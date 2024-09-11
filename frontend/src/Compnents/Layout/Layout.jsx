// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import MenuSideBar from "../MainDashboard/MenuSideBar/MenuSideBar";
// import LogIn from "../MainDashboard/LoginSignUp/LogIn";
// import SignUp from "../MainDashboard/LoginSignUp/SignUp";


// const Layout = ({ toggleSidebar, sidebarOpen, setSidebarOpen }) => {
//   const [logInpageVisible, setLogInPageVisible] = useState(false);
//   const [SignUpPageVisible, setSignUpPageVisible] = useState(false);

//   const handleLogInPageVisibilty = () => {
//     setSignUpPageVisible(false);
//     setLogInPageVisible(true);
//   };
//   const handleSignUpPageVisibilty = () => {
//     setSignUpPageVisible(true);
//     setLogInPageVisible(false);
//   };
//   return (
//     <div>
//       {logInpageVisible ?  (
//         <div className="flex bg-gray-100 w-full h-screen layout">
//           {sidebarOpen ? (
//             <div className="fixed z-20 w-48 bg-white h-full md:block">
//               <MenuSideBar setSidebarOpen={setSidebarOpen} />
//             </div>
//           ) : null}

//           <div className={`fixed w-64 bg-white h-full hidden md:block`}>
//             <Sidebar />
//           </div>

//           <div
//             className={`flex-1 flex flex-col transition-all duration-300 md:ml-64 px-8`}
//           >
//             <Navbar toggleSidebar={toggleSidebar} />

//             <div className="text-[13px] md:text-[1rem] flex-1 overflow-y-auto bg-gray-100 flex justify-between md:w-[100%]">
//               <div className="w-full overflow-x-hidden overflow-y-auto">
//                 <Outlet />
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <LogIn
//           handleLogInPageVisibilty={handleLogInPageVisibilty}
//           handleSignUpPageVisibilty={handleSignUpPageVisibilty}
//         /> || <SignUp/>
//       )}

//     </div>
//   );
// };

// export default Layout;
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import MenuSideBar from "../MainDashboard/MenuSideBar/MenuSideBar";
import LogIn from "../MainDashboard/LoginSignUp/LogIn";
import SignUp from "../MainDashboard/LoginSignUp/SignUp";


const Layout = ({ toggleSidebar, sidebarOpen, setSidebarOpen }) => {
  const [logInpageVisible, setLogInPageVisible] = useState(true);
  const [SignUpPageVisible, setSignUpPageVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for tracking authentication
  const navigate = useNavigate();

  const handleLogInPageVisibilty = () => {
    setSignUpPageVisible(false);
    setLogInPageVisible(true);
  };

  const handleSignUpPageVisibilty = () => {
    setSignUpPageVisible(true);
    setLogInPageVisible(false);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the main dashboard after login/signup
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex bg-gray-100 w-full h-screen layout">
          {sidebarOpen ? (
            <div className="fixed z-20 w-48 bg-white h-full md:block">
              <MenuSideBar setSidebarOpen={setSidebarOpen} />
            </div>
          ) : null}

          <div className={`fixed w-64 bg-white h-full hidden md:block`}>
            <Sidebar />
          </div>

          <div
            className={`flex-1 flex flex-col transition-all duration-300 md:ml-64 px-8`}
          >
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="text-[13px] md:text-[1rem] flex-1 overflow-y-auto bg-gray-100 flex justify-between md:w-[100%]">
              <div className="w-full overflow-x-hidden overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {logInpageVisible && (
            <LogIn
              handleLogInPageVisibilty={handleLogInPageVisibilty}
              handleSignUpPageVisibilty={handleSignUpPageVisibilty}
              handleAuthentication={handleAuthentication} // Pass down authentication handler
            />
          )}
          {SignUpPageVisible && (
            <SignUp
            handleLogInPageVisibilty={handleLogInPageVisibilty}
              handleAuthentication={handleAuthentication} // Pass down authentication handler
            />
          )}
        </>
      )}
    </div>
  );
};

export default Layout;

