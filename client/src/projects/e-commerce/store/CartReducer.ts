import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LaptopDataType, MobileDataType } from "../types";
import { RootState } from "./store";

export type Tags = "laptops" | "mobiles";
export type CartType = MobileDataType | LaptopDataType;

export interface CartData {
  id: number;
  imageUrl: string;
  tag: Tags;
  title: string;
  displaySize: string;
  displayType: string;
  actualPrice: number;
  finalPrice: number;
  discount: number;
  count: number;
  color: string;
}

export interface CartInitialState {
  cart: CartData[];
  data: {
    mobiles: MobileDataType[];
    laptops: LaptopDataType[];
    isLoading: boolean;
  };
}

const initialState: CartInitialState = {
  cart: [],
  data: {
    mobiles: [],
    laptops: [],
    isLoading: false,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ type: Tags; id: number }>) => {
      const { type, id } = action.payload;
      const product = state.data[type].find((product) => product.id === id);
      if (product) {
        const isExist = state.cart.find(
          (data) => data.id === product.id && data.tag === product.tag
        );
        if (!isExist) {
          console.log("ADDED::");
          const {
            id,
            tag,
            title,
            displaySize,
            displayType,
            actualPrice,
            finalPrice,
            discount,
            imageUrl,
            color,
          } = product;
          state.cart.push({
            id,
            tag,
            title,
            displaySize,
            displayType,
            actualPrice,
            finalPrice,
            discount,
            count: 1,
            imageUrl,
            color
          });
        }
      }
    },
    increaseTheProductCount: (state, action: PayloadAction<{ type: Tags; id: number }>)=> {
        const {type, id} = action.payload
        const product = state.cart.find(product => product.id === id && product.tag === type)
        if(product) {
            product.count = product.count +1
        }
    },
    decreaseTheProductCount: (state, action: PayloadAction<{ type: Tags; id: number }>)=> {
        const {type, id} = action.payload
        const product = state.cart.find(product => product.id === id && product.tag === type)
        if(product) {
            product.count = product.count - 1
        }
    },
    removeItem: (state, action: PayloadAction<{ type: Tags; id: number }>) => {
      const { type, id } = action.payload;
      state.cart = state.cart.filter((product) => {
        if (type.includes(product.tag) && product.id === id) {
          return false;
        }
        return true;
      });
    },
    clearCart: (state)=> {
      state.cart =[]
    },
    updateStateData: (
      state,
      action: PayloadAction<{
        mobiles: MobileDataType[];
        laptops: LaptopDataType[];
        cartData: CartData[]
      }>
    ) => {
      const { mobiles, laptops, cartData } = action.payload;
      state.data = { mobiles, laptops, isLoading: false };
      state.cart = cartData
    },
  },
});

export const { addToCart, removeItem, updateStateData,increaseTheProductCount, decreaseTheProductCount,clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartDataSelector = (state: RootState) => state.data.cart;
export const homePageDataSelector = (state: RootState) => state.data.data;
