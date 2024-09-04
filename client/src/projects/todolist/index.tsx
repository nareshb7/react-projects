import { Button } from "common/Components";
import React from "react";
import TodoEdit from "./TodoEdit";
import TodoTable from "./TodoTable";
import TodoComponent from "./components/TodoComponent";
import useTodo from "./hook";
import "./styles.scss";

const Todo = () => {
  const {
    pendingTodos,
    inProgressTodos,
    completedTodos,
    currentVersion,
    todos,
    updateContent,
    handleAddTodo,
    handleDragStart,
    handleDrop,
    handleTodoUpdate,
    handleToggle,
    handleDelete,
    handleEdit,
  } = useTodo();
  console.log("update::", updateContent)
  return (
    <div className="todo-app flex justify-center items-center flex-col">
      <TodoEdit
        handleAdd={handleAddTodo}
        isEdit={!!updateContent.id}
        editContent={updateContent.id ? updateContent : undefined}
      />
      <div>
        <Button
          className={currentVersion === "VERSION1" ? "active" : ""}
          title="Version1"
          onClick={() => handleToggle("VERSION1")}
        />
        <Button
          className={currentVersion === "VERSION2" ? "active" : ""}
          title="Version2"
          onClick={() => handleToggle("VERSION2")}
        />
      </div>
      {currentVersion === "VERSION1" ? (
        <TodoTable
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="todo-drag-wrapper">
          <TodoComponent
            todos={pendingTodos}
            status={"pending"}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onTodoUpdate={handleTodoUpdate}
          />
          <TodoComponent
            todos={inProgressTodos}
            status={"inProgress"}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onTodoUpdate={handleTodoUpdate}
          />
          <TodoComponent
            todos={completedTodos}
            status={"completed"}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onTodoUpdate={handleTodoUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
