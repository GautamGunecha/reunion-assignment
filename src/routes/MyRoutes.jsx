import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import BuyHouse from "../pages/property/buyHouse/BuyHouse";
import HousePage from "../pages/property/housePage/HousePage";
import RentHouse from "../pages/property/rentHouse/RentHouse";
import SellHouse from "../pages/property/sellHouse/SellHouse";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/property/buy" element={<BuyHouse />} />
        <Route exact path="/property/sell" element={<SellHouse />} />
        <Route exact path="/property/rent" element={<RentHouse />} />
        <Route exact path="/property/:id" element={<HousePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
