import React, { useState } from "react";
import { TodoModel, TodoStatus } from "../types";
import TodoCard from "./TodoCard";

export interface TodoComponentProps {
  status: TodoStatus;
  todos: TodoModel[];
  onDragStart: (e: React.DragEvent<HTMLDivElement>, todo: TodoModel) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, status: TodoStatus) => void;
  onTodoUpdate: (todo: TodoModel) => void;
}

const TodoComponent = ({
  status,
  todos,
  onDragStart,
  onDrop,
  onTodoUpdate,
}: TodoComponentProps) => {
  const [editRowData, setEditRowData] = useState({} as TodoModel);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRowClick = (todo: TodoModel) => {
    setEditRowData(todo);
  };
  const handleTodoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditRowData((prev) => ({ ...prev, content: value }));
  };
  const handleBlur = () => {
    onTodoUpdate(editRowData);
    setEditRowData({} as TodoModel);
  };
  return (
    <div className="todo-section">
      <h3 className="header">Status: {status}</h3>
      <div
        className="drop-area"
        onDragOver={handleDragOver}
        onDrop={(e) => onDrop(e, status)}
      >
        {todos.map((todo) =>
          editRowData.id === todo.id ? (
            <input
              className="card"
              key={todo.id}
              autoFocus
              onBlur={handleBlur}
              value={editRowData.content}
              onChange={handleTodoUpdate}
            />
          ) : (
            <TodoCard
              key={todo.id}
              todo={todo.content}
              onDragStart={(e) => onDragStart(e, todo)}
              onTodoClick={() => handleRowClick(todo)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoComponent;
