import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./House.css";
import AllHouse from "./allHouse/AllHouse";
import {
  propertyTypes,
  locationFilter,
  priceFilter,
} from "../../assets/data/HouseData";

// House is a parent component that renders out all the required filters and Listed property

const House = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loc, setLoc] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [moveInDate, setmoveInDate] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const priceRangeVal = priceRange.split(" ");

  // const daysBetween =

  const date = new Date().toISOString();
  // set today's date so that user can't select past date for movieIn
  const todayDate = date.slice(0, date.indexOf("T"));

  // Getting lists of property from redux state
  const { houses } = useSelector((state) => state.listedProperty);

  return (
    <div className="house">
      <section className="house-search">
        <h1>Search Property to rent</h1>
        <input
          value={searchQuery}
          type="text"
          placeholder="Search."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      <div className="house-filters">
        <section>
          <p>Location</p>
          <select value={loc} onChange={(e) => setLoc(e.target.value)}>
            <option value="">Select</option>
            {locationFilter?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </section>

        <section>
          <p>When</p>
          <input
            onChange={(e) => setmoveInDate(e.target.value)}
            type="date"
            min={todayDate}
          />
        </section>

        <section>
          <p>Price</p>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">Price Range</option>
            {priceFilter?.map((item) => (
              <option key={item.id} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </section>

        <section>
          <p>Property Type</p>
          <select onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">Select</option>
            {propertyTypes?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </section>
      </div>
      {/* Displays list of property */}
      <AllHouse
        houses={houses}
        search={searchQuery}
        location={loc}
        type={propertyType}
        moveInDate={moveInDate}
        price={priceRangeVal}
      />
    </div>
  );
};

export default House;
