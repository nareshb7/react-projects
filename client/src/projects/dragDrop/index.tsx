import React, { useState } from "react";
import "./styles.scss";
import useDragDrop from "./components/hooks";
import DragDropComponent from "./components/DragDropComponent";

const DragDropMain = () => {
  const {
    leftSideData,
    rightSideData,
    handleDragStartRight,
    handleRightDrop,
    handleDragStartLeft,
    handleLeftDrop,
    handleLeftItemDrop,
    handleRightItemDrop
  } = useDragDrop();

  return (
    <div className="drag-drop">
      <div className="component section">
        <h1 className="font-bold">Left Side Component</h1>
        <DragDropComponent
          items={leftSideData}
          handleDragStart={handleDragStartLeft}
          handleDrop={handleLeftDrop}
          handleItemDrop={handleLeftItemDrop}
        />
      </div>
      <div className="component section">
        <h1 className="font-bold">Right Side Component</h1>
        <DragDropComponent
          items={rightSideData}
          handleDragStart={handleDragStartRight}
          handleDrop={handleRightDrop}
          handleItemDrop={handleRightItemDrop}
        />
      </div>
    </div>
  );
};

export default DragDropMain;
