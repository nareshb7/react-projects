import React from "react";
import "./styles.scss";
import Conatiner from "./components/Conatiner";

const ResponsiveLayout = () => {
  return (
    <div className="responsive-layout-wrapper">
      <div className="header-title">Responsive Layout</div>
      <Conatiner />
    </div>
  );
};

export default ResponsiveLayout;
