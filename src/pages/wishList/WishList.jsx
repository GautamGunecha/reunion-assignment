import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./WishList.css";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  removeFromWishListAction,
  wishListAction,
} from "../../redux/actions/getHouseAction";

const WishList = () => {
  const { wish } = useSelector((state) => state.wishLists);
  const dispatch = useDispatch();

  const addToWishList = (id) => {
    dispatch(wishListAction(id));
  };

  const removeFromWishList = (id) => {
    dispatch(removeFromWishListAction(id));
  };

  return (
    <div className="wish-list">
      {wish.length ? (
        <h1>Lists of property you found Interesting!</h1>
      ) : (
        <h1>No Property found in wish list :(</h1>
      )}

      <div className="all-houses">
        {wish.map((data) => (
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
    </div>
  );
};

export default WishList;
