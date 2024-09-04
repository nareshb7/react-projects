import Navbar from 'pages/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Root