import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Loader from 'react-js-loader';

const RejectedNews = () => {
  const { rejectedNews, isLoading } = useSelector(state => state.news);
  const firstFiveNews = rejectedNews.slice(0, 5);


  const settings = {
    infinite: false, 
    speed: 700,
    slidesToShow: Math.min(3, rejectedNews.length),
    slidesToScroll: 2,
    autoplay: false,
  }

  return (
    <div className="trending-news px-3 mt-4 rounded-md space-y-3 h-[250px] py-3 border w-[890px] border-gray-700 my-3 bg-white shadow-md shadow-gray-500">
      <div className="flex justify-between">
        <h1 className="font-semibold text-gray-600">Rejected News</h1>
        <Link className="text-sm underline text-blue-500 font-semibold" to="/allRejectedNews">
          View all
        </Link>
      </div>
      {isLoading ? (
        <div className="h-full py-11">
          <Loader type="bubble-scale" bgColor={"#AEB9B8"} size={50} />
        </div>
      ) : (
        <Slider {...settings} >
          {firstFiveNews.map((news) => (
            <Link to={`/newsdetails/${news.title}`} key={news.id} className=" w-[260px]  mx-2 z-0 md:h-[170px] h-36 relative  duration-300 ">
              <img
                src={news.image1}
                alt="news images"
                className="relative w-[260px] inset-0 md:h-[170px] object-cover bg-no-repeat  shadow-md"
              />
              <div className=" w-[260px] absolute inset-0 z-50 md:h-[170px]  text-gray-200 bg-black/30 overflow-x-hidden px-2 ">
                <h1 className="text-white text-sm font-semibold  items-baseline mt-28 line-clamp-2">
                  {news.title}
                </h1>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default RejectedNews;
