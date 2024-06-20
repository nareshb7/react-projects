import { getData } from "projects/e-commerce/service/api";
import { EachItemPageProps, LaptopDataType } from "projects/e-commerce/types";
import React, { useEffect, useState } from "react";

const LaptopPage = ({ id, name }: EachItemPageProps) => {
  const [selectedItem, setSelectedItem] = useState({} as LaptopDataType);
  useEffect(() => {
    const data = getData("laptops", id);
    setSelectedItem(data as LaptopDataType);
  }, []);
  return <div>LaptopPage - {selectedItem.title}</div>;
};

export default LaptopPage;
