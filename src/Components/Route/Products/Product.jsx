import React from 'react';
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, name, des, img, star, price } = product;

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden w-full max-w-sm flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            
            {/* Flower Image */}
            <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                    src={img}
                    alt={`Image of ${name}`}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    New
                </div>

                {/* Action Icons (Optional) */}
                {/* 
                <div className="absolute top-3 right-3 flex flex-col items-center gap-2 text-gray-700">
                    <CiHeart className="text-2xl hover:text-pink-500 cursor-pointer" />
                    <BsArrowsFullscreen className="text-xl hover:text-pink-500 cursor-pointer" />
                    <HiArrowPathRoundedSquare className="text-xl hover:text-pink-500 cursor-pointer" />
                </div>
                */}
            </div>

            {/* Flower Details */}
            <div className="flex flex-col flex-grow p-4 space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-sm md:text-base text-gray-600">
                    {des.length > 60 ? `${des.slice(0, 60)}...` : des}
                </p>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.round(star) ? "text-yellow-400" : "text-yellow-200"}
                            />
                        ))}
                    </div>
                    <span className="text-pink-600 font-bold text-lg">${price}</span>
                </div>

                {/* View Details Button */}
                <Link to={`/singleCard/${id}`} className="mt-auto">
                    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded transition-all duration-300">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Product;
