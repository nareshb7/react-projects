import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Button } from "common/Components";
import { priceTag, tickMark } from "utils/util";
import { useSelector } from "react-redux";
import { cartDataSelector } from "projects/e-commerce/store/CartReducer";
import { getTotalAmount } from "../cart";
// import PaymentPage from "../payment";

const CheckOut = () => {
    const data = useSelector(cartDataSelector);
    const { price, discount, finalAmount } = getTotalAmount(data);
  return (
    <div className="checkout-wrapper">
      <div className="checkout-section w-[60%]">
        <div className="step border border-gray-300 bg-white flex justify-between w-[80%] my-2 min-h-[90px] items-center">
          <div className="flex">
            <div className="step-number"><span className=" p-2 bg-gray-300 text-blue-600">1</span></div>
            <div >
              <div className="text-gray-400 font-bold">LOGIN <span className=" text-blue-600">{tickMark()}</span></div>
              <div>
                <span className=" font-bold ">Naresh Baleboina</span>
                <span> +91 90101586402</span>
              </div>
            </div>
          </div>
          <div>
            <Button title="Change" />
          </div>
        </div>
        <div className="step border border-gray-300 bg-white flex justify-between w-[80%] my-2 min-h-[90px] items-center">
          <div className="flex">
            <div className="step-number"><span className=" p-2 bg-gray-300 text-blue-600">2</span></div>
            <div >
              <div className="text-gray-400 font-bold">DELIVERY ADDRESS {tickMark()}</div>
              <div>
                <span className=" font-bold ">Naresh Baleboina</span>
                <span> Manikonda, Hyderabad</span>
              </div>
            </div>
          </div>
          <div>
            <Button title="Change" />
          </div>
        </div>
        <div className="step border border-gray-300 bg-white flex justify-between w-[80%] my-2 min-h-[90px] items-center">
          <div className="flex">
            <div className="step-number"><span className=" p-2 bg-gray-300 text-blue-600">3</span></div>
            <div >
              <div className="text-gray-400 font-bold">ORDER SUMMARY {tickMark()}</div>
              <div>
                <span className=" font-bold ">{data?.length} Items</span>
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <Button title="Change" />
          </div>
        </div>
        <div className="step border border-gray-300 bg-white flex justify-between w-[80%] my-2 min-h-[90px] items-center">
          <div className="flex">
            <div className="step-number"><span className=" p-2 bg-gray-300 text-blue-600">4</span></div>
            <div >
              <div className="text-gray-400 font-bold">PAYMENT OPTIONS</div>
              <div>
                <span className=" font-bold ">5 Items</span>
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <Button title="Change" />
          </div>
        </div>
        {/* <PaymentPage /> */}
      </div>
      <div className="price-section w-[30%]">
        <div className="border border-gray-400 w-[95%] bg-white">
          <h3 className="text-gray-500 font-bold text-lg p-4">PRICE DETAILS</h3>
          <div>
            <div className="flex justify-between px-4 py-2">
              <span>Price ({data?.length} Items)</span> <span>{priceTag(finalAmount)}</span>
            </div>
            <div className="flex justify-between px-4 py-2">
              <span>Delivery Charges</span>{" "}
              <span>
                <del className="text-gray-400 text-sm"> {priceTag(200)} </del>
                <span className="text-green-600 font-medium">Free</span>
              </span>
            </div>
          </div>
          <div className=" border-gray-400 border-y-2 py-2 px-1 flex justify-between">
            <span className="font-bold text-xl">Total Payable</span>
            <span className="font-bold ">{priceTag(finalAmount)}</span>
          </div>
          <div className="p-2">
            <span className="text-green-600 font-bold">
              Your Total Savings On this order {priceTag(discount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
