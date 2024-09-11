import React, { useEffect, useState } from "react";
import NewsUsers from "./NewsUsers";
import NewsUsersApis from "./NewsUsersApis";
import PendingNews from "./PendingNews";
import { useDispatch, useSelector } from "react-redux";
import { setNews, setLoading } from "../news/NewsSlice";
import RejectedNews from "./RejectedNews";
import img from "./newsImage.png";
import AddNewsForm from "./AddNewsForm";
import PublishNews from "./PublishNews";

const MainNewsContainer = () => {
  const [isVisibleNewsForm, setVisibleNewsForm] = useState(false);
  const prevNews = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const API = "https://6283.mobilemate.io/news/all";

  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    title: "",
    description: "",
    image1: "",
    image2: "",
  });

  const fetchDatafromApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(setNews(data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Data not found", error);
    }
  };

  useEffect(() => {
    fetchDatafromApi(API);
  }, [dispatch]);

  const handleSubmitNews = (e) => {
    e.preventDefault();
    setVisibleNewsForm(!isVisibleNewsForm);
    const newNews = {
      ...formData,
      image1: formData.image1,
      image2: formData.image2,
    };
    dispatch(setNews([newNews, ...prevNews.News]));
    setFormData({
      brand: "",
      name: "",
      title: "",
      description: "",
      image1: "",
      image2: "",
    });
  };
  const handleNewsFormVisible = () => {
    setVisibleNewsForm(!isVisibleNewsForm);
  };
  return (
    <div className="py-4">
      <NewsUsers NewsUsersApis={NewsUsersApis} />
      <button
        onClick={handleNewsFormVisible}
        className="mt-3 flex hover:text-gray-800 font-semibold duration-300 ml-[46rem]  bg-white px-3 rounded items-center space-x-2 text-xs w-36"
      >
        <img src={img} alt="" className="h-10 hover:text-gray-800" />{" "}
        <span>Add news</span>
      </button>
      {isVisibleNewsForm && (
        <div className="absolute inset-0 z-10 py-2 w-full bg-black/40">
          <AddNewsForm
            handleNewsFormVisible={handleNewsFormVisible}
            handleSubmitNews={handleSubmitNews}
            formData={formData} 
            setFormData={setFormData}
          />
        </div>
      )}

      <div className="relative">
        <PendingNews />
        <PublishNews />
        <RejectedNews />
      </div>
    </div>
  );
};

export default MainNewsContainer;
