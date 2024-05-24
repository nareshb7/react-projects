import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NoRouteFound from "./NoRouteFound";
import Todo from "projects/todolist";
import Weather from "projects/weather-app";
import Pagination from "projects/pagination";
import LoginForm from "projects/loginForm";
import Login from "projects/loginForm/components/Login";
import Signup from "projects/loginForm/components/Signup";
import Home from "projects/loginForm/components/Home";
import Welcome from "projects/loginForm/components/Welcome";
import CountdownTimer from "projects/countdownTimer";
import Modal from "projects/modal";
import DragDropMain from "projects/dragDrop";
import ChatMain from "projects/chat-application";
import DropDownMain from "projects/dropDown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <NoRouteFound />,
      },
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
            path: '/login-form/',
            element: <Home />
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'signup',
            element: <Signup />
          },
          {
            path: 'home',
            element: <Welcome />
          }
        ]
      }, {
        path: "/timer",
        element: <CountdownTimer />
      }, {
        path: "/modal",
        element: <Modal />
      }, {
        path: "/drag-drop",
        element: <DragDropMain />
      }, {
        path: "/chat",
        element: <ChatMain />
      }, {
        path: "/dropdown",
        element: <DropDownMain />
      }
    ],
  },
]);

export default router;
