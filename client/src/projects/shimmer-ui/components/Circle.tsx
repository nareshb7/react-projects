import React from 'react'
import { SkeletonProps } from '../types'


const Circle = ({width, height}: SkeletonProps) => {
  return (
    <div className='skeleton-circle' style={{width, height}}></div>
  )
}

export default Circle