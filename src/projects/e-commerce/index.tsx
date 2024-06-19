import React from 'react'
import "./styles.scss"
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const ShoppingKart = () => {
  return (
    <div className='ShoppingKart-wrapper'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default ShoppingKart