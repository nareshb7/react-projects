import React from "react";
import "./styles.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const ShoppingKart = () => {
  return (
    <Provider store={store}>
      <div className="ShoppingKart-wrapper">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
};

export default ShoppingKart;
