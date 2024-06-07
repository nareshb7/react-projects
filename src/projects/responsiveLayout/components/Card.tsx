import React from "react";
import { CardProps } from "../types";

const Card = ({
  width,
  height,
  backgroundColor = "#000",
  children,
}: CardProps) => {
  return (
    <div className="card" style={{ width, height, backgroundColor }}>
      {children}
    </div>
  );
};

export default Card;
