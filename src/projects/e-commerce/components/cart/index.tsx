import { Button } from "common/Components";
import { updateCartItem } from "projects/e-commerce/service/api";
import {
  CartData,
  CartType,
  Tags,
  cartDataSelector,
  decreaseTheProductCount,
  increaseTheProductCount,
  removeItem,
} from "projects/e-commerce/store/CartReducer";
import { CARTITEMTYPE } from "projects/e-commerce/types";
import { ImageCard } from "projects/e-commerce/utils/ImageCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { priceTag } from "utils/util";

export const getTotalAmount = (data: CartData[]) => {
  let price = 0,
    discount = 0;
  data.forEach((product) => {
    price += product.actualPrice * product.count;
    discount += (product.actualPrice - product.finalPrice) * product.count;
  });
  const finalAmount = price - discount;
  return {
    price,
    discount,
    finalAmount,
  };
};

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(cartDataSelector);
  const [amountData, setAmountData] = useState({
    price: 0,
    discount: 0,
    finalAmount: 0,
  });

  const updateCartData = (tag: Tags, id: number, type: CARTITEMTYPE) => {
    updateCartItem(tag, id, type)
      .then((res) => {
        if (type == "REMOVE") {
          dispatch(removeItem({ type: tag, id }));
        } else if (type === "DECREASE") {
          dispatch(decreaseTheProductCount({ type: tag, id }));
        } else if (type === "INCREASE") {
          dispatch(increaseTheProductCount({ type: tag, id }));
        }
      })
      .catch((err) => console.error("update_error::", err.message));
  };

  const handlePlaceOrderClick = () => {
    navigate("/e-commerce/checkout");
  };
  useEffect(() => {
    const { price, discount, finalAmount } = getTotalAmount(data);
    console.log("PRICE::::", { price, discount, finalAmount, data });
    setAmountData({ price, discount, finalAmount });
  }, [data]);
  return (
    <div className="cart-page min-h-[400px] flex bg-slate-100">
      {data.length ? (
        <section className="cart-items w-[65%] p-2">
          <div className="w-[95%] m-auto bg-white min-h-[300px] overflow-auto max-h-[500px]">
            {data.map((product) => (
              <div
                className="border-b-2 border-gray-400"
                key={product.title + product.id}
              >
                <div
                  className="flex gap-2 m-2 items-start justify-around pt-3"
                  key={product.id}
                >
                  <ImageCard
                    url={product.imageUrl}
                    className="w-[20%] h-[150px]"
                  />
                  <div>
                    <h3 className="font-bold text-2xl">{product.title}</h3>
                    <h5 className="text-gray-500 text-sm">
                      {product.displaySize} , {product.color}
                    </h5>
                    <div className=" text-gray-600">
                      Seller : Resource Solutions
                    </div>
                    <div>
                      <del className="text=gray-400 text-sm">
                        {priceTag(product.actualPrice)}
                      </del>{" "}
                      <span className="font-bold text-lg">
                        {priceTag(product.finalPrice)}
                      </span>{" "}
                      <span className="text-green-500 font-semibold">
                        {product.discount}% Off
                      </span>
                    </div>
                  </div>
                  <div>
                    <span>Delivery by Fri Jun 28 |</span>
                    <span className="text-green-500 font-bold">Free</span>
                  </div>
                </div>
                <div className=" w-[95%] m-auto py-4 ">
                  <Button
                    className="p-0 rounded-50 border border-gray-500 mr-1 font-bold cursor-pointer"
                    onClick={() =>
                      updateCartData(product.tag, product.id, "INCREASE")
                    }
                    title="+"
                  />
                  <input
                    className="w-[40px] border border-gray-300 text-center p-1"
                    value={product.count}
                    onChange={() => {}}
                  />
                  <Button
                    className="p-1 rounded-50 border border-gray-500 ml-1 font-bold cursor-pointer"
                    onClick={() =>
                      updateCartData(product.tag, product.id, "DECREASE")
                    }
                    disabled={product.count == 1}
                    title="-"
                  />
                  <Button title="Save for Later" />
                  <Button
                    title="Remove"
                    onClick={() =>
                      updateCartData(product.tag, product.id, "REMOVE")
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-end w-[95%] mx-auto my-2">
            <Button
              title="Place Order"
              className=" bg-orange-500 font-bold text-white border-none"
              onClick={handlePlaceOrderClick}
            />
          </div>
        </section>
      ) : (
        <div className="w-[65%] p-2 text-center">
          <span className="font-bold text-2xl text-orange-500 block">
            Cart data is Empty. Add Something...!
          </span>
          <span>
            <Link to="/e-commerce" className="link">
              Click here
            </Link>{" "}
            to go to home page
          </span>
        </div>
      )}
      <section className="price-section w-[35%] p-2">
        <div className="border border-gray-400 w-[95%]">
          <h3 className="text-gray-500 font-bold text-lg p-4">PRICE DETAILS</h3>
          <div>
            <div className="flex justify-between px-4 py-2">
              <span>Price ({data.length} Items)</span>{" "}
              <span>{priceTag(amountData.price)}</span>
            </div>
            <div className="flex justify-between px-4 py-2">
              <span>Discount</span>{" "}
              <span className="text-green-600 font-medium">
                {" "}
                {priceTag(amountData.discount)}
              </span>
            </div>
            <div className="flex justify-between px-4 py-2">
              <span>Delivery Charges</span>{" "}
              <span className="text-green-600 font-medium">Free</span>
            </div>
          </div>
          <div className=" border-gray-400 border-y-2 py-2 px-1 flex justify-between">
            <span className="font-bold text-xl">TOTAL AMOUNT</span>
            <span className="font-bold ">
              {priceTag(amountData.finalAmount)}
            </span>
          </div>
          <div className="p-2">
            <span className="text-green-600 font-bold">
              You will save {priceTag(amountData.discount)} on this order
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
//style={{color: "#388e3c"}}
