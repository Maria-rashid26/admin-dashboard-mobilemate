import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddMobileForm from "./AddMobileForm";
import { TbDeviceMobilePlus } from "react-icons/tb";
const initialApis = [
  {
    brand: "onePlus",
    title: "RD 3G5",
    image: "https://media.wisemarket.com.pk/variant/inventory_26455.webp",
    ratings: "225",
    price: 236720,
  },
  {
    brand: "infinix",
    title: "NORD 3G5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12eOXCM8CPmXFjTMhUedSiVLzctbU90KFPw&s",
    ratings: "23",
    price: 236720,
  },
  {
    brand: "onePlus",
    title: "RD 3G5",
    image: "https://media.wisemarket.com.pk/variant/inventory_26455.webp",
    ratings: "225",
    price: 236720,
  },
  {
    brand: "realme",
    title: "NORD 3G5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26K7vXY1usboY-yydb1moJwL1vRuVAbpybQ&s",
    ratings: "23",
    price: 236720,
  },
  {
    brand: "iphone",
    title: "3G5",
    image:
      "https://images.priceoye.pk/samsung-galaxy-a04-pakistan-priceoye-ykzl2.jpg",
    ratings: "23",
    price: 236720,
  },
  {
    brand: "iphone",
    title: "3G5",
    image:
      "https://images.priceoye.pk/samsung-galaxy-a04-pakistan-priceoye-ykzl2.jpg",
    ratings: "23",
    price: 236720,
  },
  {
    brand: "onePlus",
    title: "RD 3G5",
    image: "https://media.wisemarket.com.pk/variant/inventory_26455.webp",
    ratings: "225",
    price: 236720,
  },
  {
    brand: "iphone",
    title: "3G5",
    image:
      "https://images.priceoye.pk/samsung-galaxy-a04-pakistan-priceoye-ykzl2.jpg",
    ratings: "23",
    price: 236720,
  },
  {
    brand: "onePlus",
    title: "RD 3G5",
    image: "https://media.wisemarket.com.pk/variant/inventory_26455.webp",
    ratings: "225",
    price: 236720,
  },
];

const EveryBrandMobiles = () => {
  const [ratings, setRatings] = useState(Array(initialApis.length).fill(0));
  const [visibleAddMobileForm, setVisibleAddMobileForm] = useState(true);
  const [mobileDetails, setMobileDetails] = useState(initialApis);

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleVisibleForm = () => {
    setVisibleAddMobileForm(!visibleAddMobileForm);
    console.log("button clicked");
  };
  const handleBack = () => {
    setVisibleAddMobileForm(false);
    console.log("button clicked");
  };

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleAddMobileForm(!visibleAddMobileForm);
    setMobileDetails([formData, ...mobileDetails]);
    console.log(formData);
    setFormData({
      title: "",
      price: "",
      image: "",
    });
    console.log(mobileDetails);
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };
  const stars = Array(5).fill(0);
  return (
    <>
      {visibleAddMobileForm ? (
        <div>
          <div className="flex my-3">
            <h2 className="text-3xl w-full text-center ml-7 font-semibold text-gray-600 ">
              Infinix brand
            </h2>
            <button
              onClick={handleVisibleForm}
              className="mr-10 bg-white p-1 rounded-full shadow-md shadow-gray-500 hover:shadow-gray-800"
              title="add new mobile details"
            >
              <TbDeviceMobilePlus size={30} />
            </button>
          </div>

          <div className="mx-2 grid grid-cols-4 gap-4 py-3">
            {mobileDetails.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className=" h-[300px] w-[200px] bg-white  rounded-lg shadow-md  shadow-gray-400  hover:shadow-gray-900"
              >
                <Link to="/MobileDetails">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] my-2 mx-auto object-contain h-[180px]"
                  />

                  <div className=" mx-auto w-[150px] text-center text-sm space-y-2 text-gray-600">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="font-bold">
                      Price:{" "}
                      <span className="font-semibold">{item.price} Pkr</span>
                    </p>
                  </div>
                </Link>
                <div className="flex justify-center space-x-1 py-2">
                  {stars.map((_, index) => (
                    <FaStar
                      key={index}
                      onClick={() => handleRating(itemIndex, index + 1)}
                      className={
                        index < ratings[itemIndex]
                          ? "text-yellow-500 cursor-pointer"
                          : "text-gray-400 cursor-pointer"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-black/70 ">
          <AddMobileForm
            handleVisibleForm={handleVisibleForm}
            handleSubmit={handleSubmit}
            handleFileChange={handleFileChange}
            formData={formData}
            setFormData={formData}
            handleChange={handleChange}
            handleBack={handleBack}
          />
        </div>
      )}
    </>
  );
};

export default EveryBrandMobiles;
