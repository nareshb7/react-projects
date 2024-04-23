import { Button, Input } from "common/Components";
import React, { useEffect, useState } from "react";
import { TodoEditProps, TodoModel } from "./modals";

const TodoEdit = ({ handleAdd, isEdit, editContent }: TodoEditProps) => {
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo(value);
  };
  const handleAddTodo = () => {
    if (isEdit) {
      const updateTodo: TodoModel = {
        content: newTodo,
        status: editContent?.status || "Pending",
      };
      handleAdd(updateTodo, true);
    } else {
      const latestTodo: TodoModel = { content: newTodo, status: "Pending" };
      handleAdd(latestTodo);
    }
    setNewTodo("")
  };
  useEffect(() => {
    editContent && setNewTodo(editContent.content);
  }, [editContent]);
  console.log('EDIT::::', editContent)
  return (
    <div className="add-todo py-2">
      <Input
        type="text"
        value={newTodo}
        onChange={handleChange}
        className="border border-blue-500 input rounded mx-1"
      />
      <Button
        title={isEdit ? "Update" : "Add"}
        onClick={handleAddTodo}
        className="border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded"
      />
    </div>
  );
};

export default TodoEdit;
