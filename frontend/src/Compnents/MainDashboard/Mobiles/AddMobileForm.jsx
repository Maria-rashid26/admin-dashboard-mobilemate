import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
const fields = [
  "brand",
  "size",
  "2GBand",
  "3GBand",
  "4GBand",
  "5GBand",
  "pricePkr",
  "priceUsd",
  "weight",
  "ram",
  "model",
  "resolution",
  "nfc",
  "refreshRateFps",
  "backCam",
  "batteryMah",
  "bluetooth",
  "chipset",
  "colors",
  "cpu",
  "createdOn",
  "dimensions",
  "features",
  "frontCam",
  "gps",
  "gpu",
  "launched",
  "os",
  "rom",
  "sim",
  "technology",
  "usb",
  "wlan",
];

const AddMobileForm = ({
  handleSubmit,
  formData,
  handleChange,
  handleFileChange,
}) => {
  return (
    <div className="bg-white text-gray-700 w-[95%] px-5 mx-auto   rounded-md my-3  pb-5">
      <div className="flex pb-3">
        <button onClick={handleSubmit}>
          <IoArrowBack />
        </button>
        <h1 className="text-center font-bold text-2xl ml-[27rem] my-8">
          Add New Mobile{" "}
        </h1>
      </div>
      <form
        action=""
        className=" grid grid-cols-6 gap-3  text-sm justify-between"
        onSubmit={handleSubmit}
      >
        {fields.map((name, index) => (
          <input
            key={index}
            value={formData[name] || ""}
            type="text"
            name={name}
            onChange={handleChange}
            placeholder={name}
            required
            className="hover:shadow-md w-[160px] shadow-gray-700 h-10 px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
          />
        ))}
        <input
          onChange={handleFileChange}
          type="file"
          name="image"
          className="hover:shadow-md w-[160px] shadow-gray-700 h-10 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
        />
        <button
          type="submit"
          className=" rounded-sm hover:bg-gray-900  w-[345px] bg-gray-800 duration-300 text-white h-12"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMobileForm;
