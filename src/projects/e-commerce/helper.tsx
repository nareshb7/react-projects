import React from "react";
import { ImageCard } from "./utils/ImageCard";
import { LaptopDataType, MobileDataType } from "./types";
import { priceTag } from "utils/util";
import { Tags } from "./store/CartReducer";

export const renderMobileCard = (
  mobile: MobileDataType,
  i: number,
  onClick: (id: number, title: string, tag: Tags) => void
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
        {mobile.title}({mobile.color}, {mobile.ram}GB, {mobile.rom}GB)
      </span>
      <div>
        <del> {priceTag(mobile.actualPrice)}</del>{" "}
        <span>{mobile.discount}%</span>{" "}
        <span>{priceTag(mobile.finalPrice)}</span>
      </div>
    </div>
  );
};

export const renderLaptopCard = (
  laptop: LaptopDataType,
  i: number,
  onClick: (id: number, title: string, tag: Tags) => void
) => {
  return (
    <div
      className="w-[100%] bg-slate-300 m-2 rounded min-h-[420px]"
      onClick={() => onClick(laptop.id, laptop.title, laptop.tag)}
    >
      <ImageCard
        url={laptop.imageUrl}
        className="w-[100%] h-[250px] p-2 mx-auto"
      />
      <span className="ml-1">
        {laptop.title} ({laptop.ram}GB, {laptop.rom}GB)
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
          <del> {priceTag(laptop.actualPrice)}</del>{" "}
          <span>{laptop.discount}%</span>{" "}
          <span>{priceTag(laptop.finalPrice)}</span>
        </li>
      </ul>
    </div>
  );
};

export const extractSelectedItem = (
  name: string
): {
  tag: Tags;
  productName: string;
  id: number;
} => {
  const arr = name.split("&");
  return {
    tag: arr[0] as Tags,
    productName: arr[1],
    id: Number(arr[2]),
  };
};
