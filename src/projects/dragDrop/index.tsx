import React, { useState } from 'react'
import './styles.scss'
import DragComponent from './components/DragComponent'
import DropComponent from './components/DropComponent'

const DragDropMain = () => {
    const [list, setList] = useState(["Naresh", "Mani" , "Aneesh", "Vinay", "Brahma"])
  return (
    <div className='drag-drop'>
        <div className='drag-component section'>
            <h1>Drag Component</h1>
            <DragComponent items={list} />
        </div>
        <div className='drop-component section'>
            <h1>Drop Component</h1>
            <DropComponent />
        </div>
    </div>
  )
}

export default DragDropMain