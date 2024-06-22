import { LaptopDataType } from 'projects/e-commerce/types'
import React from 'react'

export interface LaptopSpecificationProps {
    product: LaptopDataType
}

const LaptopSpecification = ({product}: LaptopSpecificationProps) => {
  return (
    <>
        <li>{product.processor}</li>
        <li>{product.ram} GB DDR4 RAM</li>
        <li>64 bit Windows 11 Operating System</li>
        <li>{product.rom} GB {product.romType}</li>
        <li>{product.displaySize} {product.displayType}</li>
        <li>1 Year Onsite Hardware Serivce</li>
    </>
  )
}

export default LaptopSpecification