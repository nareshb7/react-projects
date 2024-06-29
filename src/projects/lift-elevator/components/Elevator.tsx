// Elevator.js
import React from "react";
import { ElevatorProps } from "../types";
import ControlPanel from "./ControlPanel";

const Elevator = ({ currentFloor, floors, callElevator }: ElevatorProps) => {
  const elevatorStyle: React.CSSProperties = {
    position: "absolute",
    bottom: `${(currentFloor - 1) * 100}px`,
    transition: "bottom 3s",
    width: "150px",
    height: "100px",
    backgroundColor: "gray",
  };

  return (
    <div className="elevator overflow-auto" style={elevatorStyle}>
      Elevator
      <ControlPanel floors={floors} callElevator={callElevator} />
    </div>
  );
};

export default Elevator;
