import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const NewsDetails = () => {
  const { id } = useParams();
  const publishedNews = useSelector((state) => state.news.publishedNews);
  const News = useSelector((state) => state.news.News);
  const rejectedNews = useSelector((state) => state.news.rejectedNews);
  const allNews = [...publishedNews, ... News , ...rejectedNews];
  const newsItem = allNews.find((news) => news.id.toString() === id);

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div className=" text-gray-700 my-3 py-3 px-3 mx-4 text-sm bg-white/70 shadow-md shadow-gray-700">
      <div className="flex mx-auto">
        <img
          src={newsItem.image1}
          alt={"image"}
          className="w-[370px] h-[250px] m-6 border shadow-md shadow-gray-700"
        />
        <img
          src={newsItem.image2}
          alt={"image"}
          className="w-[370px] h-[250px] m-6 border shadow-md shadow-gray-700"
        />
      </div>
      <div className="mx-7 space-y-2">
        <h1 className="text-sm">
          Brand: <span className="font-bold  tracking-wider">{newsItem.brand}</span>{" "}
        </h1>
        <p className="text-2xl font-bold text-gray-700">{newsItem.title} </p>
        <p>
          published by{" "}
          <span className="font-bold text-gray-700"> {newsItem.name} </span>
          <span> {newsItem.timestamp}</span>
        </p>
        <p className="text-wrap text-justify space-y-3 font-normal">
          {parse(newsItem.description)}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
