import React from 'react'
import { useParams } from 'react-router-dom'

const ItemsList = () => {
    const {type} = useParams()
    console.log("Params::", type)
  return (
    <div>ItemsList - {type}</div>
  )
}

export default ItemsList