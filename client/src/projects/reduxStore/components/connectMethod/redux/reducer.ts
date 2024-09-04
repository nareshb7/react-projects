import { BUY } from "./ActionType"

const initialState ={
    items: 20,
}

export const bakeryReducer =(state = initialState,action: {type: string, payload?: any}, )=> {
    switch (action.type) {
        case BUY: {
            return { items: state.items - 1}
        }
        default: return state
    }
}