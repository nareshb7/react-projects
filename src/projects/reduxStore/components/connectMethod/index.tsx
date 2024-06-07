import React from "react";
import Connect from "./Connect";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const ConnectMethod = () => {
  return (
    <Provider store={store}>
    <div className="connect-method">
      <div className="font-bold text-center">ConnectMethod</div>
      <Connect />
    </div>
    </Provider>
  );
};

export default ConnectMethod;
