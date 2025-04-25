import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trending = ({ flower }) => {
  const { img, title, price, descrip, star } = flower;

  return (
    <div className="bg-white rounded shadow-md overflow-hidden w-full max-w-sm flex flex-col hover:shadow-lg transition duration-300">
      {/* ⬇️ Image height made smaller */}
      <img src={img} alt={title} className="w-full h-52 p-5 object-cover rounded" />

      <div className="flex flex-col justify-between flex-grow p-4 space-y-3">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{descrip}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(star) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-pink-600 font-semibold text-lg">${price}</span>
        </div>
        <Link to={`/singleCard/${flower.id}`}>
          <button className="  bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded font-medium transition">
            Veiw Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
