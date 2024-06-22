import { getProductList } from "projects/e-commerce/service/api";
import { CartType, Tags } from "projects/e-commerce/store/CartReducer";
import { LaptopDataType } from "projects/e-commerce/types";
import { ImageCard } from "projects/e-commerce/utils/ImageCard";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { priceTag, star } from "utils/util";
import MobileSpecificaions from "./MobileSpecificaions";
import LaptopSpecification from "./LaptopSpecification";

const ProductList = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [list, setList] = useState<CartType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onCardClick = ({ tag, title, id }: CartType) => {
    navigate(`/e-commerce/${tag}&${title}&${id}`);
  };
  useEffect(() => {
    const getList = () => {
      setIsLoading(true);
      getProductList(type as Tags)
        .then((data) => {
          setList(data as CartType[]);
        })
        .catch((err) => {
            console.error(`${type}_items_api_error::`, err.message)
            setList([])
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getList();
  }, [type]);
  return isLoading ? (
    <div className="text-center font-bold text-2xl text-orange-500">
      List is Loading...
    </div>
  ) : (
    <div className="flex product-list-page ">
      <div className="w-[25%]">
        <h1>Filters</h1>
        <div>PRICE</div>
        <div>BRAND</div>
      </div>
      {list.length ? (
        <div>
          {list.map((product) => (
            <div
              key={product.id}
              className="flex border-t-2 m-2 justify-between"
              onClick={() => onCardClick(product)}
            >
              <ImageCard
                url={product.imageUrl}
                className="w-[200px] h-[200px] p-2"
              />
              <div className="p-2 ml-2 w-[50%]">
                <h2 className="font-bold text-xl">
                  {product.title} ({product.color}, {product.rom} GB)
                </h2>
                <div>
                  <span className="rating bg-green-500 rounded px-1 py-0 mr-1 font-bold">
                    {product.rating} {star()}{" "}
                  </span>
                  <span className="font-semibold text-gray-400">
                    {" "}
                    {Math.random().toString().slice(2, 6)} ratings &{" "}
                    {Math.random().toString().slice(2, 5)} Reviews
                  </span>
                </div>
                {type === "laptops" && (
                  <ul className="product-list-li pl-2 text-gray-600">
                    <LaptopSpecification product={product as LaptopDataType} />
                  </ul>
                )}
                {type === "mobiles" && (
                  <ul className="product-list-li pl-2 text-gray-600">
                    <MobileSpecificaions product={product} />
                  </ul>
                )}
              </div>
              <div>
                <p className="font-bold text-2xl">
                  {priceTag(product.finalPrice)}
                </p>
                <p>
                  <del className="text-gray-400 text-sm mr-1">
                    {priceTag(product.finalPrice)}
                  </del>
                  <span className="text-green-500 font-semibold tracking-wider">
                    {product.discount}% Off
                  </span>
                </p>
                <p className="text-sm">Free Delivery</p>
                <p className="text-medium">
                  Upto{" "}
                  <span className="font-bold">
                    {priceTag(product.finalPrice - 4000)}
                  </span>{" "}
                  Off On Exchannge
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-2xl text-orange-500">
          No Data Found
        </div>
      )}
    </div>
  );
};

export default ProductList;
