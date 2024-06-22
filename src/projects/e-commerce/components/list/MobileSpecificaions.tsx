import { MobileDataType } from "projects/e-commerce/types";
import React from "react";
export interface MobileSpecificaionsProps {
  product: MobileDataType;
}

const MobileSpecificaions = ({ product }: MobileSpecificaionsProps) => {
  return (
    <>
      <li>
        {product.ram} GB RAM | {product.rom} GB ROM | Expandable Upto{" "}
        {product.rom * 2} GB
      </li>
      <li>13.97 cm (5.5 inch) Full HD Display</li>
      <li>
        {product.specifications["Camera Features"]["Primary Camera"]} Rear
        Camera | {product.specifications["Camera Features"]["Secondary Camera"]}{" "}
        Front Camera
      </li>
      <li>{product.specifications["General"]["Battery"]}</li>
      <li>
        Brand Warranty of 1 Year Available for Mobile and 6 Months for
        Accessories
      </li>
    </>
  );
};

export default MobileSpecificaions;
