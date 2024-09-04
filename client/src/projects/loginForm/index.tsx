import React from "react";
import "./styles.scss";
import {Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const LoginForm = () => {
  return (
    <div className="login-form">
      <Nav />
      <div className="container mx-auto section">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginForm;
