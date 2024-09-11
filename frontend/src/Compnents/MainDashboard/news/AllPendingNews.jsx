import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { rejectNews } from '../news/NewsSlice';
import { useSelector, useDispatch } from 'react-redux';

const AllPendingNews = () => {
  const dispatch = useDispatch();
  const {News, isLoading } = useSelector(state => state.news);
  return (
    <div>
      <div className="grid grid-cols-2 justify-between gap-3 my-7 mx-2  text-gray-600 ">
        {News.map((news) => (
          <div className="bg-white shadow-md shadow-gray-600 hover:scale-95 duration-200 h-[500px]">
            <Link
              to={`/newsdetails/${news.id}`}
              key={news.title}
              className=" space-y-3 hover:text-gray-400 pb-4  "
            >
              <img
                src={news.image1}
                alt="news images"
                className=" object-center bg-no-repeat h-[250px] w-[450px] "
              />
              <div className="text-sm px-2 space-y-1 mx-3 h-[170px]">
                <h1 className="font-bold">BRAND : {news.brand}</h1>
                <p className="font-semibold">{news.title}</p>
                <p className="line-clamp-5 text-justify">
                  {parse(news.description)}
                </p>
              </div>
            </Link>
            <div className="flex mt-3 mx-4 space-x-3 text-[13px] font-semibold justify-between w-[260px ">
              <button className="w-full px-4 py-2 text-center bg-gray-800 text-white items-center  duration-300 hover:scale-105 ">
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
      </div>
    </div>
  );
};

export default AllPendingNews;

// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";

// const AllPendingNews = ({ Pending, handleRejectedNews }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 justify-between gap-3 my-7 mx-2  text-gray-600 ">
//         {Pending.map((news) => (
//           <div
//             key={news.id}
//             className="bg-white shadow-md shadow-gray-600 hover:scale-95 duration-200 h-[500px]"
//           >
//             <Link
//               to={`/newsdetails/${news.id}`}
//               className=" space-y-3 hover:text-gray-400 pb-4  "
//             >
//               <img
//                 src={news.image1}
//                 alt="news images"
//                 className=" object-center bg-no-repeat h-[250px] w-[450px] "
//               />
//               <div className="text-sm px-2 space-y-1 mx-3 h-[170px]">
//                 <h1 className="font-bold">BRAND : {news.brand}</h1>
//                 <p className="font-semibold">{news.title}</p>
//                 <p className="line-clamp-5 text-justify">
//                   {parse(news.description)}
//                 </p>
//               </div>
//             </Link>
//             <div className="flex mt-3 mx-4 space-x-3 text-[13px] font-semibold justify-between w-[260px]">
//               <button className="w-full px-4 py-2 text-center bg-gray-800 text-white items-center  duration-300 hover:scale-105 ">
//                 Approve
//               </button>
//               <button
//                 onClick={() => handleRejectedNews(news)}
//                 className="w-full bg-gray-800 text-white px-4 py-2 text-center items-center duration-300 hover:scale-105"
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllPendingNews;
