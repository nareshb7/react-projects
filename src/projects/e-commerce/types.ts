export interface MobileDataType {
  id: number;
  title: string;
  brand: string;
  tag: string;
  actualPrice: number;
  finalPrice: number;
  discount: number;
  color: string;
  rating: number;
  ram: number;
  rom: number;
  specifications: {
    [key: string]: string | number;
  };
  imageUrl: string;
}

export interface LaptopDataType {
  id: number;
  title: string;
  brand: string;
  model: string;
  processor: string;
  tag: string;
  ram: number;
  rom: number;
  romType: "SSD"| "HDD";
  displayType: string;
  displaySize: string;
  actualPrice: number;
  finalPrice: number;
  discount: number;
  rating: number;
  specifications: {
    [key: string]: string | number;
  };
  imageUrl: string;
}
export interface ImageCardProps {
  url: string;
  className?: string;
}

export interface EachItemPageProps {
  id:number;
  name: string;
}

