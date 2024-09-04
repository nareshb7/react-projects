import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { CounterSlice } from "./counterSlice";


export interface RootState {
    counter: CounterSlice
}

export const rootReducer ={
    counter: counterSlice,
}

export const store = configureStore({
  reducer: rootReducer,
});
