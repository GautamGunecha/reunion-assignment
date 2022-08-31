import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  wishListAction,
  removeFromWishListAction,
} from "../../../redux/actions/getHouseAction";
import Card from "../../card/Card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./AllHouse.css";

const AllHouse = ({ houses }) => {
  const dispatch = useDispatch();
  const { wish } = useSelector((state) => state.wishLists);

  const addToWishList = (id) => {
    dispatch(wishListAction(id));
  };

  const removeFromWishList = (id) => {
    dispatch(removeFromWishListAction(id));
  };
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
