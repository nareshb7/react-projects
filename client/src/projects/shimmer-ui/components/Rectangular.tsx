import React from "react";
import { SkeletonProps } from "../types";

const Rectangular = ({ width = "300px", height = "150px" }: SkeletonProps) => {
  return <div className="skeleton-rect m-2" style={{ width, height }}></div>;
};

export default Rectangular;
