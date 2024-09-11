import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";

const TotalMobileBrands = ({ handleAddMobileFormVisible , mobileBrands}) => {
  if (!Array.isArray(mobileBrands) || mobileBrands.length === 0) {
    return <div>No mobile brands available</div>;
  }

  return (
    <div className=" w-full px-3 mb-6">
      <div className="flex justify-between">
        <h1 className="mx-3 text-2xl font-bold text-gray-700 py-3">
          Brands We Deal With
        </h1>
        <button
          onClick={handleAddMobileFormVisible}
          className=" mx-6 px-3 pt-1 rounded-lg bg-white border w-[60px] h-[45px] mt-2 "
        >
          <IoCloudUploadSharp
            size={30}
            className="hover:text-gray-500 text-gray-700 duration-200"
          />
        </button>
      </div>

      <div className="flex justify-between space-x-10  font-semibold px-3 bg-gray-600 py-2 text-white">
        <p className="w-[100px] ">Name</p>
        <p className="w-[190px] text-center">Logo</p>
        <p className="w-[100px] ">Rating</p>
        <p className="w-[100px] text-center ">Quantity</p>
      </div>
      <div className="bg-white  shadow-md shadow-gray-700">
        {mobileBrands.map((mobileBrand, index) => (
          <div
            key={index}
            className="flex justify-between items-center space-x-10 py-1 font-semibold px-3 border-b  text-gray-800 "
          >
            <p  className="w-[150px] ">{mobileBrand.brands}</p>
            <div className="p-2 rounded-md shadow-md shadow-gray-500">
              <img
                src={mobileBrand.imageUrl}
                alt=""
                className="w-16 h-[50px] object-contain"
              />
            </div>
            <p className="w-[90px] text-center">{mobileBrand.rating}</p>
            <p className="w-[100px]  text-center">{mobileBrand.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalMobileBrands;

