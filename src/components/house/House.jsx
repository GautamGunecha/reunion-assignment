import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./House.css";
import AllHouse from "./allHouse/AllHouse";
import { locationFilter } from "../../assets/data/HouseData";

const House = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loc, setLoc] = useState("");

  const date = new Date().toISOString();
  const todayDate = date.slice(0, date.indexOf("T"));

  const { houses } = useSelector((state) => state.listedProperty);

  return (
    <div className="house">
      <section className="house-search">
        <h1>Search Property to rent</h1>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search Property by title"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <div className="house-filters">
        <section>
          <p>Location</p>
          <select value={loc} onChange={(e) => setLoc(e.target.value)}>
            {locationFilter?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </section>

        <section>
          <p>When</p>
          <input type="date" min={todayDate} />
        </section>

        <section>
          <p>Price</p>
          <select></select>
        </section>

        <section>
          <p>Property Type</p>
          <select name="" id=""></select>
        </section>
      </div>
      <AllHouse houses={houses} search={searchTerm} location={loc} />
    </div>
  );
};

export default House;
