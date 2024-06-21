import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homePageData, laptops } from "../data/mockData";
import { LaptopDataType, MobileDataType } from "../types";
import { RootState } from "./store";

export type Tags = "laptops"| "mobiles"
export type CartType = MobileDataType| LaptopDataType

export interface CartInitialState {
    cart: CartType[],
    data : {
        mobiles: MobileDataType[],
        laptops: LaptopDataType[]
    }
}

const initialState: CartInitialState = {
    cart: [],
    data: {
        mobiles: homePageData.mobiles,
        laptops: homePageData.laptops,
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{type: Tags,id: number}>)=> {
            const {type, id} = action.payload
            const product = homePageData[type].find(product => product.id === id)
            if (product) {
                const isExist = state.cart.find(data => data.id === product.id && data.tag === product.tag)
                if (!isExist) {
                    state.cart.push(product)
                }
            }
        },
        removeItem: (state, action: PayloadAction<{type: Tags,id: number}>)=> {
            const {type, id} = action.payload
            state.cart = state.cart.filter(product => {
                if (type.includes(product.tag) && product.id === id) {
                    return false
                }
                return true 
            } )
        },
    }
})

export const {addToCart, removeItem} = cartSlice.actions
export default cartSlice.reducer

export const cartDataSelector = (state: RootState) => state.data.cart