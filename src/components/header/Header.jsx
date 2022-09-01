import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { ImHome } from "react-icons/im";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Header.css";

// Top most header nav bar

const Header = () => {
  const { wish } = useSelector((state) => state.wishLists);
  return (
    <div className="header">
      <Link to="/">
        <section>
          <ImHome size={30} className="icon" />
          <h1>Estate</h1>
        </section>
      </Link>

      <section>
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/">
          <p>Contact</p>
        </Link>
        {wish.length > 0 ? (
          <Link to="/property/wishlist">
            <AiFillHeart size={20} className="icon house-icon" />
          </Link>
        ) : (
          <Link to="/property/wishlist">
            <AiOutlineHeart size={20} className="icon" />
          </Link>
        )}
      </section>
    </div>
  );
};

export default Header;
