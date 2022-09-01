import React, { Fragment } from "react";

import Hero from "../components/hero/Hero";
import House from "../components/house/House";

// page folder showcase all the pages available out there.

// Home landing page
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <House />
    </Fragment>
  );
};

export default Home;
