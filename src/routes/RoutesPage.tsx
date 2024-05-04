import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Todo from "projects/todolist";
import Weather from "projects/weather-app";
import Pagination from "projects/pagination";
import LoginForm from "projects/loginForm";
import Login from "projects/loginForm/components/Login";
import Signup from "projects/loginForm/components/Signup";

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
      {
        path: "/pagination",
        element: <Pagination />
      },{
        path: "/login-form",
        element: <LoginForm />,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'signup',
            element: <Signup />
          }
        ]
      }
    ],
  },
]);

export default router;
