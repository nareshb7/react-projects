import { extractSelectedItem } from "projects/e-commerce/helper";
import { getData } from "projects/e-commerce/service/api";
import { CartType } from "projects/e-commerce/store/CartReducer";
import { LaptopDataType } from "projects/e-commerce/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "./Page";

const ItemPage = () => {
  const { name } = useParams();
  const { tag, id } = extractSelectedItem(name as string);
  const [selectedItem, setSelectedItem] = useState<CartType>({} as CartType);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getSelectedItemData = () => {
      setIsLoading(true);
      getData(tag, id)
        .then((data) => {
          setSelectedItem(data as LaptopDataType);
        })
        .catch((err) => {
          console.error("home_page_get_data_error::", err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getSelectedItemData();
  }, [tag, id]);
  return isLoading ? (
    <div className="font-bold text-2xl text-center text-green-600">
      Loading....
    </div>
  ) : (
    <Page selectedItem={selectedItem} type={tag} />
  );
};

export default ItemPage;
