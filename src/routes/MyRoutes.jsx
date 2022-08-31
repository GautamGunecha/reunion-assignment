import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import HousePage from "../pages/property/housePage/HousePage";
import WishList from "../pages/wishList/WishList";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/property/:id" element={<HousePage />} />
        <Route exact path="/property/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
