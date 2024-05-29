import React, { Suspense } from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "routes/RoutesPage";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading....</h1>}>
      <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
