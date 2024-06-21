import { homePageData } from "../data/mockData";
import { Tags } from "../store/CartReducer";


export const getData =(tag:Tags, id:number)=> {
    return homePageData[tag].find(val => val.id === id)
}