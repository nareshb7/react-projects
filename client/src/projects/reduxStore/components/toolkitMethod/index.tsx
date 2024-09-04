import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./Counter";

const ToolKitMethod = () => {
  return (
    <Provider store={store}>
      <div className="font-bold text-center">ToolKitMethod</div>
      <Counter />
    </Provider>
  );
};

export default ToolKitMethod;
