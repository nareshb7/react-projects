import React from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "routes/RoutesPage";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
