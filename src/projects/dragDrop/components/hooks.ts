import React, { useState } from "react";
const intialData = ["Apple", "Banana", "Cat", "Doll", "Elephant"];

const useDragDrop = () => {
  const [leftSideData, setLeftSideData] = useState(intialData);
  const [rightSideData, setRightSideData] = useState<string[]>([]);
  
  const handleDragStartLeft = (
    e: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    e.dataTransfer.setData("dragIndexLeft", item);
  };

  const handleLeftItemDrop = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    const dragItem: string = e.dataTransfer.getData("dragIndexLeft");
    if (!dragItem) return "";
    const dragIndex = leftSideData.findIndex((x) => x === dragItem);
    leftSideData.splice(dragIndex, 1);
    leftSideData.splice(index, 0, dragItem);
  };

  const handleLeftDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedItem: string = e.dataTransfer.getData("dragIndexRight");
    setLeftSideData([...leftSideData, draggedItem]);
    setRightSideData(rightSideData.filter((v) => v !== draggedItem));
  };

  const handleDragStartRight = (
    e: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    e.dataTransfer.setData("dragIndexRight", item);
  };

  const handleRightItemDrop = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    const dragItem: string = e.dataTransfer.getData("dragIndexRight");
    if (!dragItem) return "";
    const dragIndex = rightSideData.findIndex((x) => x === dragItem);
    rightSideData.splice(dragIndex, 1);
    rightSideData.splice(index, 0, dragItem);
  };

  const handleRightDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedItem: string = e.dataTransfer.getData("dragIndexLeft");
    setRightSideData([...rightSideData, draggedItem]);
    setLeftSideData(leftSideData.filter((v) => v !== draggedItem));
  };

  return {
    leftSideData,
    rightSideData,
    handleRightDrop,
    handleDragStartRight,
    handleLeftDrop,
    handleDragStartLeft,
    handleLeftItemDrop,
    handleRightItemDrop,
  };
};

export default useDragDrop;
