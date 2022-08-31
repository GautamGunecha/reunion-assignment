import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Consider.css";

const Consider = () => {
  const { houses } = useSelector((state) => state.listedProperty);

  return (
    <div className="consideration">
      <h1>People also look for</h1>
      {houses.slice(0, 4).map((data) => (
        <div key={data.id} className="consideration-list">
          <Link to={`/property/${data.id}`}>
            <img src={data.img} alt={data.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Consider;
