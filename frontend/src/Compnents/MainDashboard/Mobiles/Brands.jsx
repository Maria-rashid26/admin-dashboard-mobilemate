import React from "react";
import { Link } from "react-router-dom";

const Brands = ({ mobiles, Loading }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-600 text-center py-6">
        Mobile brands we deals with
      </h1>

      {Loading ? (
        <div>loading....</div>
      ) : (
        <Link className=" grid grid-cols-7  justify-between gap-4 ml-10" to="/EveryBrandMobiles">
          {mobiles.map((mbrand, index) => (
            <div key={index}>
              <img
                src={mbrand.imageUrl}
                alt={mbrand.title}
                className=" rounded-sm shadow-gray-400 w-[80px] h-[80px] object-contain shadow-md p-1 bg-white"
              />
            </div>
          ))}
        </Link>
      )}
    </div>
  );
};

export default Brands;
