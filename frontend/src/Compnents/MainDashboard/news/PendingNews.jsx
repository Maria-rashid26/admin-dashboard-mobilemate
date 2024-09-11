import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Loader from "react-js-loader";
import { useSelector, useDispatch } from "react-redux";
import { rejectNews, approveNews } from "../news/NewsSlice";

const PendingNews = () => {
  const dispatch = useDispatch();
  const { News, isLoading } = useSelector((state) => state.news);

  const firstFiveNews = News.slice(0, 5);
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: Math.min(3, firstFiveNews.length),
    slidesToScroll: 2,
    autoplay: false,
  };

  return (
    <div className="trending-news px-3 mt-2 rounded-md space-y-3 h-[300px] py-3 border w-[890px] border-gray-700 my-3 bg-white shadow-md shadow-gray-500">
      <div className="flex justify-between">
        <h1 className="font-semibold text-gray-600">Pending News</h1>
        <Link
          className="text-sm underline text-blue-500 font-semibold"
          to="/allPendingNews"
        >
          View all
        </Link>
      </div>
      {isLoading ? (
        <div className="h-full py-11">
          <Loader type="bubble-scale" bgColor={"#AEB9B8"} size={50} />
        </div>
      ) : (
        <Slider {...settings}>
          {firstFiveNews.map((news) => (
            <div key={news.id} className="flex">
              {/* <Link to={`/newsdetails/${news.id}`}> */}
              <Link to={`/newsdetails/${news.id}`}>
                <div className="hover:scale-110 mx-2 md:h-[170px] w-[260px] h-36 duration-300 relative">
                  <img
                    src={news.image1}
                    alt="news images"
                    className="relative w-[260px] inset-0 md:h-[170px] object-cover bg-no-repeat shadow-md"
                  />
                  <div className="w-[260px]  text-[0.9rem]  md:pt-[6rem] pt-[4.5rem] absolute inset-0 z-50  text-white overflow-x-hidden px-2">
                    <h1>{news.title}</h1>
                    {/* </div> */}
                  </div>
                </div>
              </Link>
              <div className="flex mt-3 ml-[9px] mr-4 space-x-3 text-[13px] font-semibold justify-between w-[260px]">
                <button
                  onClick={() => dispatch(approveNews(news))}
                  className="w-full px-4 py-2 text-center bg-gray-800 text-white items-center duration-300 hover:scale-105"
                >
                  Approve
                </button>
                <button
                  onClick={() => dispatch(rejectNews(news))}
                  className="w-full bg-gray-800 text-white px-4 py-2 text-center items-center duration-300 hover:scale-105"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PendingNews;
