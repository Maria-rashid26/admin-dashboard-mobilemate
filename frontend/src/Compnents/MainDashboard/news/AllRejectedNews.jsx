import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import parse from "html-react-parser";


const AllRejectedNews = () => {
  const { rejectedNews } = useSelector(state => state.news);
  return (
    <div>
      <div className="grid grid-cols-2 justify-between gap-3 my-3 mx-2  text-gray-600 ">
        {rejectedNews.map((news) => (
          <Link
          to={`/newsdetails/${news.id}`}
          key={news.id}
          className="space-y-5 hover:text-gray-400 pb-4 bg-white shadow-md shadow-gray-600 "
        >
          <img
            src={news.image1}
            alt="news images"
            className=" object-center bg-no-repeat h-[250px] w-[450px] "
          />
          <div className="text-sm px-2 space-y-1 mx-3">
            <h1 className="font-bold">BRAND : {news.brand}</h1>
            <p className="font-semibold">{news.title}</p>
            <p className="line-clamp-5 text-justify">{parse(news.description)}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRejectedNews;
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// const AllRejectedNews = ({ Rejected }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 justify-between gap-3 my-3 mx-2  text-gray-600 ">
//         {Rejected.map((news) => (
//           <Link
//             to={`/newsdetails/${news.id}`}
//             key={news.id}
//             className="space-y-5 hover:text-gray-400 pb-4 bg-white shadow-md shadow-gray-600 hover:scale-95 duration-200"
//           >
//             <img
//               src={news.image1}
//               alt="news images"
//               className=" object-center bg-no-repeat h-[250px] w-[450px] "
//             />
//             <div className="text-sm px-2 space-y-1 mx-3">
//               <h1 className="font-bold">BRAND : {news.brand}</h1>
//               <p className="font-semibold">{news.title}</p>
//               <p className="line-clamp-5 text-justify">
//                 {parse(news.description)}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//       all rejected news
//     </div>
//   );
// };

// export default AllRejectedNews;
