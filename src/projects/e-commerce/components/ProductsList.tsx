import React from 'react'
import { useParams } from 'react-router-dom'

const ProductList = () => {
    const {type} = useParams()
    console.log("Params::", type)
  return (
    <div>ProductList - {type}</div>
  )
}

export default ProductList