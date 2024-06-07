import React from "react";
import "./styles.scss";
import Conatiner from "./components/Conatiner";

const ResponsiveLayout = () => {
  return (
    <div className="responsive-layout-wrapper">
      <div className="header-title">Responsive Layout</div>
      <Conatiner width={300} height={300} />
      <Conatiner width={500} height={500} />
    </div>
  );
};

export default ResponsiveLayout;
