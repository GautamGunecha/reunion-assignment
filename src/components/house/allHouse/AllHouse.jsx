import React from "react";
import { Link } from "react-router-dom";

import Card from "../../card/Card";
import { AiOutlineHeart } from "react-icons/ai";
import "./AllHouse.css";

const AllHouse = ({ houses }) => {
  return (
    <div className="all-houses">
      {houses.map((data) => (
        <Card key={data.id}>
          <div className="all-houses-card">
            <Link to={`/property/${data.id}`}>
              <img src={data.img} alt="" />
            </Link>
            <div className="all-houses-details">
              <div className="all-houses-costing">
                <p>₹ {data.rates}/month</p>
                <section className="all-houses-wishListIcon">
                  <AiOutlineHeart size={25} className="icon house-icon" />
                </section>
              </div>
              <h1>{data.title}</h1>
              <p>{data.address}</p>
              {/* Essential Details */}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllHouse;
