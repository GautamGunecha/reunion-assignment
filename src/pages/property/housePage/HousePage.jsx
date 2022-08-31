import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";

import "./HousePage.css";
import Consider from "../../../components/consider/Consider";
import {
  removeFromWishListAction,
  wishListAction,
} from "../../../redux/actions/getHouseAction";

const HousePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [data, setData] = useState([]);

  const { houses } = useSelector((state) => state.listedProperty);
  const { wish } = useSelector((state) => state.wishLists);

  const addToWishList = (id) => {
    dispatch(wishListAction(id));
  };

  const removeFromWishList = (id) => {
    dispatch(removeFromWishListAction(id));
  };

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
              {wish.find((item) => item.id === parseInt(data.id)) ? (
                <AiFillHeart
                  size={25}
                  className="icon house-icon"
                  onClick={() => removeFromWishList(data.id)}
                />
              ) : (
                <AiOutlineHeart
                  size={25}
                  className="icon house-icon"
                  onClick={() => addToWishList(data.id)}
                />
              )}
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
