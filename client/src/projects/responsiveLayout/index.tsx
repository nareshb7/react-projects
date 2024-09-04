import React from "react";
import "./styles.scss";
import Conatiner from "./components/Conatiner";
import BoxModal from "./components/BoxModal";
import FlexBox from "./components/FlexBox";

const ResponsiveLayout = () => {
  return (
    <div className="responsive-layout-wrapper">
      <div className="header-title">Responsive Layout</div>
      <BoxModal />
      <FlexBox />
      <Conatiner width={300} height={300} />
    </div>
  );
};

export default ResponsiveLayout;
