import React from 'react'
import { Link } from 'react-router-dom'

const NoRouteFound = () => {
  return (
    <div>
        <div>No Route found</div>
        <Link to='/' className='text-slate-500'>Click here to login</Link>
    </div>
  )
}

export default NoRouteFound