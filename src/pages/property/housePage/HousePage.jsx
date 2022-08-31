import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";

import "./HousePage.css";
import Consider from "../../../components/consider/Consider";

const HousePage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const { houses } = useSelector((state) => state.listedProperty);

  useEffect(() => {
    const getHouseById = () => {
      const selectedHouse = houses.find((item) => item.id === parseInt(id));
      setData(selectedHouse);
    };

    getHouseById();
  }, [houses, id]);
  return (
    <>
      <div className="housePage">
        <div className="house-page">
          <img src={data.img} alt={data.title} />
          <div className="house-details">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
            <p>{data.address}</p>
            <p>₹ {data.rates}/ month</p>
            <span>
              <MdOutlineBedroomParent size={25} />
              <p>{data.beds} beds</p>
            </span>
            <span>
              <MdOutlineBathroom size={25} />
              <p>{data.bathroom} bathrooms</p>
            </span>
            <p>Available for {data.category}</p>
            <p>Property Type {data.propertyType}</p>
            <section>
              <AiOutlineHeart className="icon" size={35} />
              <button>Rent this property</button>
            </section>
          </div>
        </div>
        <Consider />
      </div>
    </>
  );
};

export default HousePage;
