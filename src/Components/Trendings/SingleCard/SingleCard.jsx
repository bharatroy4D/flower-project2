import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState(null);

  useEffect(() => {
    fetch("/flowers.json")
    .then(res => res.json())
    .then(data =>{
        const findSingleCard = () =>data.find(p => p.id == id)
        setSingleCard(findSingleCard)
    })
  }, [id]);
  return (
    <div className="px-10">
        <img src={singleCard?.img} alt="" />

    </div>
  );
};

export default SingleCard;
