import { getData } from "projects/e-commerce/service/api";
import { EachItemPageProps, MobileDataType } from "projects/e-commerce/types";
import React, { useEffect, useState } from "react";

const MobilePage = ({ id, name }: EachItemPageProps) => {
  const [selectedItem, setSelectedItem] = useState({} as MobileDataType);
  useEffect(() => {
    const data = getData("mobiles", id);
    setSelectedItem(data as MobileDataType);
  }, []);
  return <div>MobilePage - {selectedItem.title}</div>;
};

export default MobilePage;
