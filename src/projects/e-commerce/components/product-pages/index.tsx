import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "projects/e-commerce/service/api";
import { LaptopDataType, MobileDataType } from "projects/e-commerce/types";
import Page from "./Page";
import { Tags } from "projects/e-commerce/store/CartReducer";

const extractSelectedItem = (
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

const ItemPage = () => {
  const { name } = useParams();
  const { tag, id, productName } = extractSelectedItem(name as string);
  const [selectedItem, setSelectedItem] = useState<
    LaptopDataType | MobileDataType
  >({} as LaptopDataType);
  useEffect(() => {
    console.log("TAG:::", tag, name);
    const data = getData(tag, id);
    setSelectedItem(data as LaptopDataType);
  }, []);
  return <Page selectedItem={selectedItem} type={tag} />;
};

export default ItemPage;
