import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Todo from "projects/todolist";
import Weather from "projects/weather-app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);

export default router;
