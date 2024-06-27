import { homePageData } from "../data/mockData";
import { CartType, Tags } from "../store/CartReducer";
import { CARTITEMTYPE } from "../types";

export const BE_URL = "http://192.168.10.30:8081";

export const getData = async (tag: Tags, id: number) => {
  return fetch(
    `${BE_URL}/v1/e-commerce/get-product-data?tag=${tag}&id=${id}`
  ).then((res) => res.json());
};
export const getProductList = (tag: Tags) => {
  return fetch(
    `${BE_URL}/v1/e-commerce/get-product-list?tag=${tag}`
  ).then((res) => res.json());
};

export const getHomePageData = () => {
  return fetch(
    `${BE_URL}/v1/e-commerce/get-homepage-data`
  ).then((res) => res.json());
};

export const getAutoSuggestions = (value: string) => {
  const newList: CartType[] = [];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value.length) {
        Object.keys(homePageData).forEach((key) => {
          homePageData[key as Tags].forEach((product) => {
            if (
              product.title.toLowerCase().includes(value.toLowerCase()) ||
              product.tag.includes(value.toLowerCase())
            ) {
              newList.push(product);
            }
          });
        });
        resolve(newList);
      } else {
        resolve([]);
      }
    }, 500);
  });
};

export const uploadToCart =async (tag: Tags, id: number)=>  {
  return fetch(`${BE_URL}/v1/e-commerce/add-to-cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tag, id
    })
  }).then(res => res.json())
}



export const updateCartItem = async (tag: Tags, id: number, type: CARTITEMTYPE)=> {
  return fetch(`${BE_URL}/v1/e-commerce/update-cartitem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tag, id, type
    })
  })
}

export const clearCartData =async ()=> {
  return fetch(`${BE_URL}/v1/e-commerce/update-cartitem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "CLEAR"
    })
  }).then(res => res.json())
}

export const confirmOrder  = async ()=> {
  return fetch(`${BE_URL}/v1/e-commerce/confirm-order`, {
    method: "POST"
  }).then(res => res.json())
}
