import React from "react";

export interface TodoCardProps {
  todo: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onTodoClick: ()=> void
}

const TodoCard = ({ todo, onDragStart, onTodoClick }: TodoCardProps) => {
  return (
    <div className="card" draggable onDragStart={onDragStart} onDoubleClick={onTodoClick}>
      {todo}
    </div>
  );
};

export default TodoCard;
