import React from "react";
import { DragDropCardProps } from "../types";

export const DragDropCard = ({ item, onDragStart, onDrop }: DragDropCardProps) => {
    return (
      <div draggable onDragStart={onDragStart} onDrop={onDrop}>
        {item}
      </div>
    );
  };
  