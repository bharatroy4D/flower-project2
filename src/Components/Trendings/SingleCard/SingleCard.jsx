import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useParams, useNavigate } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleCard, setSingleCard] = useState(null);

  useEffect(() => {
    fetch("/flowers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id == id);
        setSingleCard(found);
      });
  }, [id]);

  if (!singleCard) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-10 items-center md:items-start">
      
      {/* Single card images */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={singleCard?.img}
          alt={singleCard?.title}
          className="rounded object-cover w-full max-w-md h-80 md:h-[500px] border border-gray-300"
        />
      </div>

      {/* Single card details */}
      <div className="w-full md:w-1/2 space-y-4">
        
        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-400 text-2xl">
          {[...Array(5)].map((_, i) => (
            <CiStar key={i} />
          ))}
          <span className="text-gray-500 text-sm ml-2">1 Review(s)</span>
        </div>

        <h1 className="text-2xl font-bold">{singleCard?.title}</h1>

        <p className="text-gray-600 border-b border-gray-300 pb-4">{singleCard?.descrip}</p>

        {/* Details */}
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-semibold">Brand:</span> Luxury Brand</p>
          <p><span className="font-semibold">Condition:</span> New</p>
          <p><span className="font-semibold">Reference:</span> Product {singleCard?.id}</p>
          <p><span className="font-semibold">Available:</span> <span className="text-green-500">90 items</span></p>
          <p className="text-red-500 font-medium">Hurry! Only few items left!</p>
        </div>

        {/* Size */}
        <div>
          <h2 className="font-semibold text-lg mt-4">Size:</h2>
          <div className="flex gap-3 mt-2">
            {["Small", "Medium", "Large"].map((size) => (
              <button key={size} className="px-4 py-1 border rounded-full hover:bg-gray-100">{size}</button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h2 className="font-semibold text-lg mt-4">Color:</h2>
          <div className="flex gap-3 mt-2">
            <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow-md"></div>
            <div className="w-7 h-7 rounded-full bg-yellow-400 border-2 border-white shadow-md"></div>
            <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-4 text-xl font-bold">
          Price: 
          <span className="text-pink-500">${singleCard?.price}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition">
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default SingleCard;
