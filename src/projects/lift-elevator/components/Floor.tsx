// Floor.js
import React from "react";
import { FloorProps } from "../types";
import { Button } from "common/Components";

const Floor = ({ floorNumber, callElevator }: FloorProps) => {
  return (
    <div
      className="floor border-b-2 h-[100px] text-end"
    >
      Floor {floorNumber}
      <Button
        onClick={() => callElevator(floorNumber)}
        title={`Call Elevator`}
      />
    </div>
  );
};

export default Floor;
