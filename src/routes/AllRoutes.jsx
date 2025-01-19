import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyOrders } from "../pages/MyOrders";
import { Cart } from "../components/Cart";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myorder" element={<MyOrders />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
