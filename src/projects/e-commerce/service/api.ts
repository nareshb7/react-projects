import { homePageData } from "../data/mockData";
import { CartType, Tags } from "../store/CartReducer";

export const getData = (tag: Tags, id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(homePageData[tag].find((val) => val.id === id));
    }, 500);
  });
};
export const getProductList = (tag: Tags) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = homePageData[tag]
        if (data?.length) {

            resolve(data);
        } else {
            reject({message:"No Data"})
        }
    }, 500);
  });
};

export const getHomePageData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(homePageData);
    }, 500);
  });
};


export const getAutoSuggestions =(value: string)=> {
    const newList: CartType[] = []
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value.length) {
                Object.keys(homePageData).forEach((key) => {
                    homePageData[key as Tags].forEach(product => {
                        if (product.title.toLowerCase().includes(value.toLowerCase()) || product.tag.includes(value.toLowerCase())) {
                            newList.push(product)
                        }
                    })
                })
              resolve(newList);
            } else {
                resolve([])
            }
            
        }, 500);
      });
}