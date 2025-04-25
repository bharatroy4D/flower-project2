import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState(null);

  useEffect(() => {
    fetch("/flowers.json")
      .then((res) => res.json())
      .then((data) => {
        const findSingleCard = () => data.find((p) => p.id == id);
        setSingleCard(findSingleCard);
      });
  }, [id]);
  return (
    <div className="flex justify-center gap-40  px-10">
      {/* single card images */}
      <div className="py-7">
        <img src={singleCard?.img} alt="" className="h-[500px] rounded" />
      </div>
      {/* single card of details */}
      <div>
        <div className="flex gap-2 items-center text-2xl font-bold text-yellow-300 py-7">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <h1 className="text-gray-500 font-semibold text-lg">1 Review (s)</h1>
        </div>
        <h1 className="text-2xl font-medium">{singleCard?.title}</h1>
        <p className="py-2 border-b border-gray-300 text-gray-500">
          {singleCard?.descrip}
        </p>
        <div className="py-1">
          <p className="font-semibold">
            Brand: <span className="text-gray-500">luxury brand</span>
          </p>
          <p className="font-semibold">
            Condition: <span className="text-gray-500">Used</span>
          </p>
          <p className="font-semibold">
            Referance:{" "}
            <span className="text-gray-500">Prouduct {singleCard?.id}</span>
          </p>
          <p className="font-semibold">
            Availabe in stack: <span className="text-green-400">90 items</span>
          </p>
          <p className="font-semibold">
            Hurry up! only 92 items left in stock!
          </p>
          <h1 className="font-semibold text-xl">Size:</h1>
          <div className="flex gap-2 py-2">
            <button className="btn">Small</button>
            <button className="btn">Medium</button>
            <button className="btn">Large</button>
          </div>
          <h1 className="font-semibold text-xl">Color:</h1>
          <div className="flex gap-2 py-2">
            <div className="w-7 h-7 rounded-full bg-red-500"></div>
            <div className="w-7 h-7 rounded-full bg-yellow-300"></div>
            <div className="w-7 h-7 rounded-full bg-blue-500"></div>
          </div>
          <h1 className="flex gap-2 font-semibold text-xl">
            Price:
            <p className="text-lg text-gray-500">{singleCard?.price}</p>{" "}
          </h1>
          <div className="flex gap-2">
          <button className="btn bg-red-500 text-white my-2">Add to Card</button>
          <button className="btn bg-green-600 text-white my-2">Back</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
