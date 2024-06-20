import React from "react";
import { ImageCard } from "./utils/ImageCard";
import { LaptopDataType, MobileDataType } from "./types";

export const renderMobileCard = (
  mobile: MobileDataType,
  i: number,
  onClick: (id: number, title: string, tag:string) => void
) => {
  return (
    <div
      className="w-[100%] h-[350px] bg-slate-300 m-2 text-center rounded"
      onClick={() => onClick(mobile.id, mobile.title, mobile.tag)}
    >
      <ImageCard
        url={mobile.imageUrl}
        className="w-[250px] h-[250px] p-2 mx-auto"
      />
      <span>
        {i}.{mobile.title}({mobile.color}, {mobile.ram}GB, {mobile.rom}GB)
      </span>
      <div>
        <del>&#x20B9;{mobile.actualPrice}/-</del>{" "}
        <span>{mobile.discount}%</span>{" "}
        <span>&#x20B9;{mobile.finalPrice}/-</span>
      </div>
    </div>
  );
};

export const renderLaptopCard = (
  laptop: LaptopDataType,
  i: number,
  onClick: (id: number, title: string, tag: string) => void
) => {
  return (
    <div
      className="w-[100%] h-[420px] bg-slate-300 m-2 rounded"
      onClick={() => onClick(laptop.id, laptop.title, laptop.tag)}
    >
      <ImageCard
        url={laptop.imageUrl}
        className="w-[300px] h-[250px] p-2 mx-auto"
      />
      <span className="ml-1">
        {i}.{laptop.title} ({laptop.ram}GB, {laptop.rom}GB)
      </span>
      <ul className="ml-2">
        <li>{laptop.processor}</li>
        <li>{laptop.ram} GB</li>
        <li>
          {laptop.rom}GB {laptop.romType}
        </li>
        <li>
          {laptop.displayType} {laptop.displaySize}
        </li>
        <li> {laptop.rating}*</li>
        <li>
          <del>&#x20B9;{laptop.actualPrice}/-</del>{" "}
          <span>{laptop.discount}%</span>{" "}
          <span>&#x20B9;{laptop.finalPrice}/-</span>
        </li>
      </ul>
    </div>
  );
};
