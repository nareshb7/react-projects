import React from "react";
import { TodoTableProps } from "./types";
import { Button } from "common/Components";

const TodoTable = ({ todos, handleDelete, handleEdit }: TodoTableProps) => {
  return (
    <div className="todo-table">
      {todos.length ? (
        <table className="table w-full border-collapse">
          <thead>
            <tr>
              <th className="table-header-cell border p-2">Sl. No </th>
              <th className="table-header-cell border p-2">Name </th>
              <th className="table-header-cell border p-2">Status </th>
              <th className="table-header-cell border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => (
              <tr key={todo.id} className="bg-gray-100 hover:bg-gray-200">
                <td className="table-cell border p-2">{idx + 1}</td>
                <td className="table-cell border p-2">{todo.content}</td>
                <td className="table-cell border p-2">{todo.status}</td>
                <td className="table-cell border p-2 ">
                  <Button title="Update" onClick={() => handleEdit(todo)} />
                  <Button title="Delete" onClick={() => handleDelete(todo)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div> NO DATA</div>
      )}
    </div>
  );
};

export default TodoTable;
