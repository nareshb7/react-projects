import React, { useState } from 'react'

export interface DropCardProps {
    item :string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>)=> void;
}

export const DropCard =({item, onDragStart}: DropCardProps)=> {
    return <div draggable onDragStart={onDragStart}>{item}</div>
}

const DropComponent = () => {
    const [list, setList] = useState<string[]>([])
    const handleDragOver =(e: React.DragEvent<HTMLDivElement>)=> {
        e.preventDefault()
    }
    const handleDrop =(e: React.DragEvent<HTMLDivElement>)=> {
        const draggedItem: string = e.dataTransfer.getData("dragIndex")
        console.log("DRAGGED:::", draggedItem)
        setList([...list, draggedItem])
    }
    const handleDragStart =(e: React.DragEvent<HTMLDivElement>, item: string)=> { 
        console.log("DRAG::START")
        e.dataTransfer.setData('dragIndex', item);
    }
  return (
    <div className='drop-section' onDragOver={handleDragOver} onDrop={handleDrop}>DropComponent
        <div>
            {
                list.map((item, i) => <DropCard key={i} item={item} onDragStart={(e) => handleDragStart(e, item)}/> )
            }
        </div>
    </div>
  )
}

export default DropComponent