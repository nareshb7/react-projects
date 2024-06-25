import { Button } from "common/Components";
import {
  CartType,
  Tags,
  cartDataSelector,
  removeItem,
} from "projects/e-commerce/store/CartReducer";
import { ImageCard } from "projects/e-commerce/utils/ImageCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { priceTag } from "utils/util";

const getTotalAmount = (data: CartType[]) => {
  const price = data.reduce((a, b) => a + b.actualPrice, 0);
  const discount = data.reduce((a, b) => a + (b.actualPrice - b.finalPrice), 0);
  const finalAmount = price - discount;
  return {
    price,
    discount,
    finalAmount,
  };
};

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector(cartDataSelector);
  const [amountData, setAmountData] = useState({
    price: 0,
    discount: 0,
    finalAmount: 0,
  });

  const handleRemoveClick = (type: Tags, id: number) => {
    dispatch(removeItem({ type, id }));
  };
  useEffect(() => {
    const { price, discount, finalAmount } = getTotalAmount(data);
    setAmountData({ price, discount, finalAmount });
  }, [data]);
  return (
    <div className="cart-page min-h-[400px] flex bg-slate-100">
      {data.length ? (
        <section className="cart-items w-[65%] p-2">
          <div className="w-[95%] m-auto bg-white min-h-[300px] overflow-auto">
            {data.map((product) => (
              <div className="border-b-2 border-gray-400" key={product.title+ product.id}>
                <div
                  className="flex gap-2 m-2 items-start justify-around pt-3"
                  key={product.id}
                >
                  <ImageCard url={product.imageUrl} className="w-[20%] h-[150px]" />
                  <div>
                    <h3 className="font-bold text-2xl">{product.title}</h3>
                    <h5 className="text-gray-500 text-sm">
                      15.6 Inch , {product.color}, 1.69 kg, With ms office
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
                  <span className="p-1 rounded-50 border border-gray-500 mr-1 font-bold">
                    {" "}
                    +
                  </span>
                  <input
                    className="w-[40px] border border-gray-300 text-center"
                    value={"1"}
                    onChange={()=> {}}
                  />
                  <span className="p-1 rounded-50 border border-gray-500 ml-1 font-bold">
                    {" "}
                    -{" "}
                  </span>
                  <Button title="Save for Later" />
                  <Button
                    title="Remove"
                    onClick={() => handleRemoveClick(product.tag, product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-end w-[95%] mx-auto my-2">
            <Button
              title="Place Order"
              className=" bg-orange-500 font-bold text-white border-none"
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
