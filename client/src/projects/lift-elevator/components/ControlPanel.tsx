// ControlPanel.js
import React from "react";
import { ControlPanelProps } from "../types";
import { Button } from "common/Components";

const ControlPanel = ({ floors, callElevator }: ControlPanelProps) => {
  return (
    <div className="control-panel overflow-auto">
      {floors?.map((floor, index) => (
        <Button
          key={index}
          onClick={() => callElevator(floor)}
          title={`${floor}`}
          className="pt-1 pl-1 pr-1 pb-1"
        />
      ))}
    </div>
  );
};

export default ControlPanel;
