import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  wishListAction,
  removeFromWishListAction,
} from "../../../redux/actions/getHouseAction";
import Card from "../../card/Card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./AllHouse.css";

// This component renders out list of all property and accepts filters.

// Initial posts that display on page
const postPerRow = 8;

// load more by + 4
const showPost = 4;

// keys helps user to search in these required fields.
const keys = ["title", "location", "address", "category", "propertyType"];

const AllHouse = ({ houses, search, location, type, price, moveInDate }) => {
  const [next, setNext] = useState(postPerRow);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { wish } = useSelector((state) => state.wishLists);

  // add property to wishList
  const addToWishList = (id) => {
    dispatch(wishListAction(id));
  };

  // remove property from wishlist
  const removeFromWishList = (id) => {
    dispatch(removeFromWishListAction(id));
  };

  const handleMorePosts = () => {
    setNext(next + showPost);
  };

  // handle user filter requests.
  useEffect(() => {
    let filterData = houses?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase()))
    );

    if (location) {
      filterData = filterData?.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type) {
      filterData = filterData?.filter((item) =>
        item.propertyType.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (moveInDate) {
      // if property is avaliable for selected date
      filterData = filterData.filter(
        (data) => new Date(data.availableFrom) <= new Date(moveInDate)
      );
    }

    if (price.length > 1) {
      filterData = filterData.filter(
        (data) =>
          data.rates >= parseInt(price[0]) && data.rates <= parseInt(price[1])
      );
    }

    setData(filterData);
  }, [houses, search, location, type, price, moveInDate]);

  return (
    <div>
      <div className="all-houses">
        {data.length > 0 ? (
          data?.slice(0, next).map((data) => (
            <Card key={data.id}>
              <div className="all-houses-card">
                <Link to={`/property/${data.id}`}>
                  <img src={data.img} alt={data.title} />
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
          ))
        ) : (
          <h1>No property found :(</h1>
        )}
      </div>
      {data.length > 4
        ? next < houses?.length && (
            <button className="loadmore-btn" onClick={handleMorePosts}>
              Load more
            </button>
          )
        : ""}
    </div>
  );
};

export default AllHouse;
