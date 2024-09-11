import React from "react";
import bg from "./teal-pattern-background-vector-22847461.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { ImFacebook2 } from "react-icons/im";

const LogIn = ({ handleAuthentication, handleSignUpPageVisibilty }) => {
  return (
    <div className="h-screen  bg-gray-800 font-sans">
      <div className="w-[80%] flex mx-auto h-full">
        <div className="w-full  mx-auto  bg-white">
          <h1 className="font-bold text-2xl p-7 text-blue-950">MobileMate</h1>

          <h1 className="text-center text-4xl tracking-wider text-gray-800 font-bold mt-5 font-sans">
            Login to Your Account
          </h1>
          <form
            action=""
            className="mt-8  w-[370px] mx-auto space-y-5 border-b border-t py-4"
          >
            <input
              type="text"
              name="email"
              id=""
              placeholder="Email"
              className="h-10 bg-gray-100 px-3 text-sm rounded-2xl w-full outline-none placeholder:text-gray-400 font-semibold"
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              className="h-10 bg-gray-100 px-3 text-sm rounded-2xl w-full outline-none placeholder:text-gray-400 font-semibold"
            />
            <button
              onClick={handleAuthentication}
              className="h-10 bg-gray-600 text-white hover:bg-gray-800 duration-300 px-3 text-sm rounded-2xl w-full font-semibold"
            >
              login
            </button>
          </form>
          <div className="py-4">
            <p className="text-center text-sm text-gray-600 font-semibold mb-2">
              social networks
            </p>

            <ul className="flex text-gray-600 space-x-2 mx-auto w-[150px] justify-between ">
              <li>
                <FaLinkedin size={30} />
              </li>
              <li>
                <SiInstagram size={27} />
              </li>
              <li>
                <TbWorld size={30} />
              </li>
              <li>
                <ImFacebook2 size={27} />
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[600px] text-white py-36 space-y-7"
        >
          <h1 className="text-4xl font-bold text-center tracking-wide">
            New Here?
          </h1>
          <p className="w-[250px] mx-16 font-sans text-center  tracking-wider text-sm ">
            Sign Up and discover a great amount of opportunities
          </p>
          <button onClick={handleSignUpPageVisibilty} className="w-[200px] font-semibold bg-white text-teal-700 ml-24 rounded-full h-12 text-sm ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
