import React from "react";
import { useWindowSize } from "./hooks";
import Card from "./Card";
import { ContainerProps } from "../types";

const Conatiner = ({ width, height }: ContainerProps) => {
  const { width: screenWidth } = useWindowSize();
  return (
    <div className="container">
      {Array(5)
        .fill(1)
        .map((_, i) => (
          <Card key={i} width={width} height={height}>
            {width} X {height}
          </Card>
        ))}
    </div>
  );
};

export default Conatiner;
