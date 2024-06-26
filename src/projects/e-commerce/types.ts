import { CartData, Tags } from "./store/CartReducer";

export interface SpecificationType {
  key: string;
  value: string;
}
export interface SpecificationsType {
  [key: string]: {
    [key: string]: string
  }
}

export interface MobileDataType {
  id: number;
  title: string;
  brand: string;
  tag: Tags;
  actualPrice: number;
  displayType: string;
  displaySize: string;
  finalPrice: number;
  discount: number;
  color: string;
  rating: number;
  ram: number;
  rom: number;
  specifications: SpecificationsType;
  imageUrl: string;
}

export interface LaptopDataType {
  id: number;
  title: string;
  color: string;
  brand: string;
  model: string;
  processor: string;
  tag: Tags;
  ram: number;
  rom: number;
  romType: "SSD" | "HDD";
  displayType: string;
  displaySize: string;
  actualPrice: number;
  finalPrice: number;
  discount: number;
  rating: number;
  specifications: SpecificationsType;
  imageUrl: string;
}
export interface ImageCardProps {
  url: string;
  className?: string;
  alt?: string;
}

export interface EachItemPageProps {
  id: number;
  name: string;
}
export type CARTITEMTYPE = "REMOVE"| "INCREASE"|"DECREASE"

export interface HomePageDataModel {
  laptops: LaptopDataType[];
  mobiles: MobileDataType[];
  cartData: CartData[]
}


