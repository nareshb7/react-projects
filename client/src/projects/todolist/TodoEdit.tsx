import { Button, Input } from "common/Components";
import React, { useEffect, useState } from "react";
import { TodoEditProps, TodoModel, TodoStatus } from "./types";
import { generateRandomId } from "./hook";

const TODO_OBJ: TodoModel = {
  content: "",
  status: "pending",
  id: generateRandomId()
};

const TodoEdit = ({ handleAdd, isEdit, editContent }: TodoEditProps) => {
  console.log({isEdit, editContent})
  const [newTodo, setNewTodo] = useState<TodoModel>(TODO_OBJ);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo({ ...newTodo, content: value });
  };
  const handleAddTodo = () => {
    if (!newTodo.content) return;
    if (isEdit) {
      const updateTodo: TodoModel = {
        content: newTodo.content,
        status: newTodo.status,
        id: newTodo.id
      };
      handleAdd(updateTodo, true);
    } else {
      const latestTodo: TodoModel = {
        content: newTodo.content,
        status: "pending",
        id: generateRandomId()
      };
      handleAdd(latestTodo);
    }
    setNewTodo(TODO_OBJ);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setNewTodo({ ...newTodo, status: value as TodoStatus });
  };
  useEffect(() => {
    editContent && setNewTodo(editContent);
  }, [editContent]);
  return (
    <div className="add-todo py-2">
      <h3 className="font-bold font-serif text-center">Todo List</h3>
      <Input
        placeholder="Type here..."
        type="text"
        value={newTodo.content}
        onChange={handleChange}
        className="border border-blue-500 input rounded mx-1"
      />
      {isEdit && (
        <select
          className="border border-blue-500 input rounded mx-1"
          defaultValue={editContent?.status}
          name="status"
          onChange={handleSelect}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      )}
      <Button
        title={isEdit ? "Update" : "Add"}
        onClick={handleAddTodo}
        className="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded"
      />
    </div>
  );
};

export default TodoEdit;
