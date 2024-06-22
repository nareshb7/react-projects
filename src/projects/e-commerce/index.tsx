import React, { useEffect } from "react";
import "./styles.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { getHomePageData } from "./service/api";
import { updateStateData } from "./store/CartReducer";
import { HomePageDataModel } from "./types";

const ShoppingKart = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = () => {
      getHomePageData()
        .then((data) => {
          dispatch(updateStateData(data as HomePageDataModel));
        })
        .catch((err) => {
          console.error("home_page_get_data_error::", err.message);
        })
        .finally(() => {});
    };
    getData();
  }, []);
  return (
    <div className="ShoppingKart-wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ShoppingKart;
