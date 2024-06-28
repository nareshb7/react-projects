import React, { useState } from 'react'
import "./style.scss"
import { Button } from 'common/Components'
import Rectangular from './components/Rectangular'
import Profile from './components/Profile'
import Circle from './components/Circle'
import { ShimmerType } from './types'


const ShimmerUI = () => {
    const [activeMode, setActiveMode] = useState<ShimmerType>("PROFILE")
  return (
    <div className='shimmer-wrapper'>
        <div>
            <Button title='Profile' onClick={()=> setActiveMode("PROFILE")} />
            <Button title='Rectangular' onClick={()=> setActiveMode("RECTANGULAR")} />
            <Button title='Circle' onClick={()=> setActiveMode("CIRCLE")} />
        </div>
        <div>
            {
                activeMode === "RECTANGULAR" && <Rectangular />
            }
            {
                activeMode === "PROFILE" && <Profile />
            }
            {
                activeMode === "CIRCLE" && <Circle />
            }
        </div>
    </div>
  )
}

export default ShimmerUI