import { createSlice } from "@reduxjs/toolkit";


export interface CounterSlice {
    count: number
}

const initialState:CounterSlice ={
    count: 0
}

const counterSlice =createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer