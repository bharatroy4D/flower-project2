import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trending = ({ flower }) => {
  const { img, title, price, descrip, star, id } = flower;

  return (
    <div className="bg-white rounded border border-gray-300 shadow-lg overflow-hidden md:w-full  w-72 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* Flower Image */}
      <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={img}
          alt={title}
          className="h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Flower Details */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">
          {descrip.length > 60 ? `${descrip.slice(0, 50)}...` : descrip}
        </p>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex text-yellow-400 text-base">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(star) ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-pink-600 font-bold text-lg">${price}</span>
        </div>

        {/* View Details Button */}
        <Link to={`/singleCard/${id}`}>
          <button className="mt-4 lg:w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-semibold transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
 
  );
};

export default Trending;
