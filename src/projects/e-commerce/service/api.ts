import { homePageData } from "../data/mockData";


export const getData =(tag:"laptops"| "mobiles", id:number)=> {
    return homePageData[tag].find(val => val.id === id)
}