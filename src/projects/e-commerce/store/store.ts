import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { CartInitialState } from "./CartReducer";

export interface RootState {
    data: CartInitialState
}

const rootReducer = {
    data: CartReducer
}
export const store = configureStore({
    reducer: rootReducer
})