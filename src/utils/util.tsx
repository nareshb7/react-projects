import React from "react";

export const isEmptyObject = (object: Object) => {
  return Object.keys(object).length == 0;
};
export const star = () => <>&#9733;</>;
export const rupeeSymbol = () => <>&#x20B9;</>;
export const priceTag = (amount: number) => (
  <>
    {amount?.toLocaleString("en-IN", {
      style:"currency",
      currency: "INR"
    })}
  </>
);

export const scrollToTop = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const debounce =(fn: Function, d: number)=> {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(()=> {
      fn(...args)
    },d)
  }
}