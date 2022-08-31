import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  wishListAction,
  removeFromWishListAction,
} from "../../../redux/actions/getHouseAction";
import Card from "../../card/Card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./AllHouse.css";

const postPerRow = 8;

const AllHouse = ({ houses }) => {
  const [next, setNext] = useState(postPerRow);

  const dispatch = useDispatch();
  const { wish } = useSelector((state) => state.wishLists);

  const addToWishList = (id) => {
    dispatch(wishListAction(id));
  };

  const removeFromWishList = (id) => {
    dispatch(removeFromWishListAction(id));
  };

  const handleMorePosts = () => {
    setNext(next + postPerRow);
  };

  return (
    <div>
      <div className="all-houses">
        {houses?.slice(0, next).map((data) => (
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
      {next < houses?.length && (
        <button className="loadmore-btn" onClick={handleMorePosts}>
          Load more
        </button>
      )}
    </div>
  );
};

export default AllHouse;
