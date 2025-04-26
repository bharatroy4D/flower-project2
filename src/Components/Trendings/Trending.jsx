import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trending = ({ flower }) => {
  const { img, title, price, descrip, star, id } = flower;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Flower Image */}
      <div className="w-full h-40 overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Flower Details */}
      <div className="flex flex-col flex-grow p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-xs text-gray-500">
          {descrip.length > 50 ? `${descrip.slice(0, 50)}...` : descrip}
        </p>

        {/* Rating and Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(star) ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-pink-600 font-bold text-base">${price}</span>
        </div>

        {/* View Details Button */}
        <Link to={`/singleCard/${id}`}>
          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
