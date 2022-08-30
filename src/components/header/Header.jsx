import React from "react";
import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.css";

const Header = () => {
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
        <Link to="/buy">
          <p>Buy</p>
        </Link>
        <Link to="/sell">
          <p>Sell</p>
        </Link>
        <Link to="/">
          <p>Contact</p>
        </Link>
        <img src="" alt="" />
        <AiOutlineHeart size={20} className="icon" />
      </section>
    </div>
  );
};

export default Header;
