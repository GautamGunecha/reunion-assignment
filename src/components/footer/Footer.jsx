import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="footer-main">
          <section className="footer-main-left">
            <h1>Estate</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolorem assumenda atque rem, deserunt earum? Alias nam debitis in
              incidunt sed placeat accusamus, numquam corporis voluptatum
              repellat possimus. Deleniti, minima!
            </p>
          </section>
          <section className="footer-main-mid">
            <h1>Customer Services</h1>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>tel. 999-999-9999</li>
            </ul>
          </section>
          <section className="footer-main-right">
            <AiOutlineFacebook size={30} />
            <AiOutlineTwitter size={30} />
            <AiOutlineInstagram size={30} />
          </section>
        </div>
        <div className="footer-bottom">
          <p>
            © {date}. <span>Estate</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
