import { Button } from "common/Components";
import { Tags, addToCart } from "projects/e-commerce/store/CartReducer";
import { LaptopDataType, MobileDataType } from "projects/e-commerce/types";
import { ImageCard } from "projects/e-commerce/utils/ImageCard";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { priceTag, star } from "utils/util";

export interface PageProps {
  selectedItem: LaptopDataType | MobileDataType;
  type: Tags;
}

const Page = ({ selectedItem, type }: PageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleAddToCart = () => { 

    console.log("SELECT:::", type, selectedItem.id)
    dispatch(addToCart({ type: selectedItem.tag, id: selectedItem.id }));
    navigate("/e-commerce/cart")
  };

  return (
    <div className="mobile-page flex gap-1">
      <div className="images-section w-[35%] h-[500px] border border-gray-400 m-1 p-2">
        <ImageCard
          url={selectedItem.imageUrl}
          className="w-[300px] h-[300px] mx-auto"
        />
        <div className="mx-auto w-[80%] my-2">
          <Button title="Add to cart" onClick={handleAddToCart} />
          <Button title="Buy Now" />
        </div>
      </div>
      <div className="product-description pl-2 m-1 h-[500px] overflow-auto w-[65%] border border-gray-400">
        <section className="text-gray-400 breadcrumbs">
          <span>
            <Link to="/e-commerce" className="link-hover">
              Home
            </Link>
          </span>
          {">"}
          <span>
            <Link to={`/e-commerce/list/${type}`} className="link-hover">
              {type}
            </Link>
          </span>
          {">"}
          <span>{selectedItem.title}</span>
        </section>
        <div className="font-bold my-1 text-2xl">
          {selectedItem.title} ({selectedItem.color})
        </div>
        <section>
          <span className="rating bg-green-500 rounded px-1 py-0">
            {selectedItem.rating} {star()}
          </span>{" "}
          <span className="font-semibold text-gray-400">
            293 ratings & 37 Reviews
          </span>
        </section>
        <section className="my-1 price-section">
          <p className="text-green-400 text-sm">Special Price</p>
          <div>
            <span className="font-bold text-xl">
              {priceTag(selectedItem.finalPrice)}{" "}
            </span>
            <del className="text-gray-400 text-sm">
              {priceTag(selectedItem.actualPrice)}{" "}
            </del>
            <span className="text-green-500 font-semibold font-mono">
              {selectedItem.discount}% Off
            </span>
          </div>
          <div className=" text-red-500 text-xs">Hurry, Only 6 left</div>
        </section>
        <section className="offers-section my-2">
          <div className="font-bold text-lg my-1">Available Offers</div>
          <div className="ml-2">
            <ul>
              <li>
                <span className="font-semibold">Partner Offer</span>{" "}
                <span className="text-sm">
                  Sign-up for ShoppinKart Pay Later & get free Times Prime
                  Benefits worth ₹20,000*{" "}
                  <a href="" className="link">
                    {" "}
                    Know More
                  </a>
                </span>
              </li>
              <li>
                <span className="font-semibold">Partner Offer</span>{" "}
                <span className="text-sm">
                  Make a purchase and enjoy a surprise cashback/ coupon that you
                  can redeem later!{" "}
                  <a href="" className="link">
                    {" "}
                    Know More
                  </a>
                </span>
              </li>
              <li>
                <span className="font-semibold">Special Price</span>{" "}
                <span className="text-sm">
                  Get extra 5% off (price inclusive of cashback/coupon){" "}
                  <a href="" className="link">
                    T&C
                  </a>
                </span>
              </li>
              <li>
                <span className="font-semibold">Combo Offer</span>{" "}
                <span className="text-sm">
                  Buy 3 items save 3%; Buy 4 or more save 5%See all products{" "}
                  <a href="" className="link">
                    T&C
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className=" border border-gray-300">
          <h2 className=" font-bold text-lg my-3 p-2">Specifications</h2>
          <hr />
          {selectedItem.specifications &&
            Object.keys(selectedItem?.specifications).map((specifcation) => {
              return (
                <div key={specifcation} className="p-2 border-gray-400 border-b">
                  <h3 className=" text-gray-400 text-xl my-2">
                    {specifcation}
                  </h3>
                  <table>
                    <tbody>
                      {Object.keys(selectedItem.specifications[specifcation]).map(
                        (option) => (
                          <tr key={option}>
                            <td>
                              <span className="text-gray-600 inline-block w-[150px]">
                                {option}
                              </span>
                            </td>
                            <td>
                              <span>{selectedItem.specifications[specifcation][option]}</span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default Page;
