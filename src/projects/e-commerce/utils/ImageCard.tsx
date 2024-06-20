import React from "react"
import { ImageCardProps } from "../types"

export const ImageCard = ({url, className}: ImageCardProps)=> {
    return <div className={`${className}`}>
    <img src={url} className="w-[100%] h-[100%] rounded" />
  </div>
  }