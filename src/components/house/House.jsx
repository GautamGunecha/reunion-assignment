import React from "react";
import { useSelector } from "react-redux";

import "./House.css";
import AllHouse from "./allHouse/AllHouse";

const House = () => {
  const date = new Date().toISOString();
  const todayDate = date.slice(0, date.indexOf("T"));

  const { houses } = useSelector((state) => state.listedProperty);

  return (
    <div className="house">
      <section>
        <h1>Search Property to rent</h1>
        <input type="text" placeholder="Search Property by title" />
      </section>
      <div className="house-filters">
        <section>
          <p>Location</p>
          <select name="" id=""></select>
        </section>
        <section>
          <p>When</p>
          <input type="date" min={todayDate} name="" id="" />
        </section>
        <section>
          <p>Price</p>
          <select name="" id=""></select>
        </section>
        <section>
          <p>Property Type</p>
          <select name="" id=""></select>
        </section>
        <section>
          <button type="button">Search</button>
        </section>
      </div>
      <AllHouse houses={houses} />
    </div>
  );
};

export default House;
