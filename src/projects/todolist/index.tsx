import { Button, Input } from "common/Components";
import React, { useState } from "react";
import { TodoModel, TodoStatus } from "./modals";
import TodoTable from "./TodoTable";
import TodoEdit from "./TodoEdit";

const Todo = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [updateTodoId, setUpdateTodoId] = useState<number | null>(null);
  const handleAddTodo = (newTodo: TodoModel, isExist?: boolean) => {
    if (isExist && updateTodoId != null) {
      todos[updateTodoId] = newTodo
        setTodos(todos)
        setUpdateTodoId(null)
    } else {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    }
  };
  const handleEdit = (id: number) => {
    setUpdateTodoId(id);
  };
  const handleDelete = (todo: TodoModel) => {
    const newTodos = todos.filter((td) => td.content !== todo.content);
    setTodos(newTodos);
  };
  return (
    <div className="todo-app flex justify-center items-center flex-col">
      <TodoEdit
        handleAdd={handleAddTodo}
        isEdit={updateTodoId !== null}
        editContent={updateTodoId !== null ? todos[updateTodoId] : undefined}
      />
      <TodoTable
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
