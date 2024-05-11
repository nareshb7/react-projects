import React from 'react'

export interface DragComponentProps {
    items: string[]
}
export interface DragCardProps {
    item: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>)=> void
}

export const DragCard =({item, onDragStart}: DragCardProps)=> {
    return <div draggable onDragStart={onDragStart}>{item}</div>
}

const DragComponent = ({items}: DragComponentProps) => {
    const handleDragStart =(e: React.DragEvent<HTMLDivElement>)=> { 
        console.log("DRAG::START")
    }
  return (
    <div>DragComponent
        <div>
            {
                items.map(item => {
                    return <DragCard item={item} onDragStart={handleDragStart} />
                })
            }
        </div>
    </div>
  )
}

export default DragComponent