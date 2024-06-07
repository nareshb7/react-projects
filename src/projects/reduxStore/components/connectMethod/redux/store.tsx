import {createStore, combineReducers} from "redux"
import { bakeryReducer } from "./reducer"

const rootReducer = combineReducers({
    bakery: bakeryReducer
})

export const store = createStore(rootReducer)