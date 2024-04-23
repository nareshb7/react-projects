import React from "react";
import { TodoTableProps } from "./modals";
import { Button } from "common/Components";

const TodoTable = ({ todos, handleDelete, handleEdit }: TodoTableProps) => {
    console.log("TABLE")
  return (
    <div className="todo-table">
      {todos.length ? (
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{todo.content}</td>
                <td>{todo.status}</td>
                <td>
                  <Button title="Update" onClick={() => handleEdit(idx)} />
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
