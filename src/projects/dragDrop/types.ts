export interface DragDropComponentProps {
    items: string[];
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragStart: (e: React.DragEvent<HTMLDivElement>, item: string) => void;
    handleItemDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  }
  
  export interface DragDropCardProps {
    item: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>)=> void;
  } 