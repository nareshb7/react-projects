import React from 'react'

export interface DragComponentProps {
    items: string[]
}
export interface DragCardProps {
    item: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>)=> void;
}

export const DragCard =({item, onDragStart}: DragCardProps)=> {
    return <div draggable onDragStart={onDragStart}>{item}</div>
}

const DragComponent = ({items}: DragComponentProps) => {
    const handleDragStart =(e: React.DragEvent<HTMLDivElement>, item: string)=> { 
        console.log("DRAG::START")
        e.dataTransfer.setData('dragIndex', item);
    }
  return (
    <div>DragComponent
        <div>
            {
                items.map((item, i) => {
                    return <DragCard key={i} item={item} onDragStart={(e) => handleDragStart(e, item)} />
                })
            }
        </div>
    </div>
  )
}

export default DragComponent