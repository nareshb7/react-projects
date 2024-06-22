import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LaptopDataType, MobileDataType } from "../types";
import { RootState } from "./store";

export type Tags = "laptops"| "mobiles"
export type CartType = MobileDataType| LaptopDataType

export interface CartInitialState {
    cart: CartType[];
    data : {
        mobiles: MobileDataType[];
        laptops: LaptopDataType[];
        isLoading: boolean;
    }
}

const initialState: CartInitialState = {
    cart: [],
    data: {
        mobiles: [],
        laptops: [],
        isLoading: false,
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{type: Tags,id: number}>)=> {
            const {type, id} = action.payload
            const product = state.data[type].find(product => product.id === id)
            console.log("Prdouct::", product)
            if (product) {
                const isExist = state.cart.find(data => data.id === product.id && data.tag === product.tag)
                console.log("EXIST::", isExist)
                if (!isExist) {
                    console.log("ADDED::",)
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
        updateStateData: (state, action: PayloadAction<{mobiles: MobileDataType[], laptops: LaptopDataType[]}>)=> {
            const {mobiles, laptops} = action.payload
            state.data= {mobiles, laptops, isLoading: false}
        }
    }
})

export const {addToCart, removeItem, updateStateData} = cartSlice.actions
export default cartSlice.reducer

export const cartDataSelector = (state: RootState) => state.data.cart
export const homePageDataSelector =(state: RootState) => state.data.data