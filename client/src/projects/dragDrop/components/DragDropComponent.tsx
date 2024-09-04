import React, { useState } from "react";
import { DragDropComponentProps } from "../types";
import { DragDropCard } from "./DragDropCard";


const DragDropComponent = ({
  items,
  handleDragStart,
  handleDrop,
  handleItemDrop
}: DragDropComponentProps) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="dragdrop-section"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>
        {items.map((item, i) => (
          <DragDropCard
            key={i}
            item={item}
            onDragStart={(e) => handleDragStart(e, item)}
            onDrop={(e) => handleItemDrop(e, i)}
          />
        ))}
      </div>
    </div>
  );
};

export default DragDropComponent;
