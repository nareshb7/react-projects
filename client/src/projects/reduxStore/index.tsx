import React from 'react'
import ConnectMethod from './components/connectMethod'
import ToolKitMethod from './components/toolkitMethod'
import { Provider } from 'react-redux'
import { store } from './components/connectMethod/redux/store'

const ReduxStore = () => {
  return (
    
    <div className='redux-wrapper'>
      <div className='text-center font-bold'>ReduxStore</div>
      <ConnectMethod />
      <ToolKitMethod />
    </div>
  )
}

export default ReduxStore