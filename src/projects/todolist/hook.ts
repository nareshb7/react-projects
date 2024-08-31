import React, { useState } from "react";
import { DragContent, NewTodoModel, TodoModel, TodoStatus } from "./types";

export const generateRandomId = () => {
  return Math.random().toString().slice(2);
};

const useTodo = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [currentVersion, setCurrentVersion] = useState("VERSION2");
  const [newTodoList, setNewTodoList] = useState<NewTodoModel>({
    pending: [],
    inProgress: [],
    completed: [],
  });
  const [updateContent, setUpdateContent] = useState({} as TodoModel);
  const [dragContent, setDragContent] = useState<TodoModel>({} as TodoModel);
  const handleAddTodo = (newTodo: TodoModel, isExist?: boolean) => {
    if (isExist && updateContent.id) {
      if (updateContent.status !== newTodo.status) {
        newTodoList[updateContent.status] = newTodoList[
          updateContent.status
        ].filter((todo) => todo.id !== dragContent.id);
        newTodoList[newTodo.status] = [
          ...newTodoList[newTodo.status],
          { ...newTodo },
        ];
      } else {
        handleTodoUpdate(newTodo)
      }
      setNewTodoList({ ...newTodoList });
      setUpdateContent({} as TodoModel);
    } else {
      const newTodos = [...todos, newTodo];
      setNewTodoList((prev) => ({
        ...prev,
        pending: [...prev.pending, newTodo],
      }));
      setTodos(newTodos);
    }
  };
  const handleEdit = (updateTodo: TodoModel) => {
    setUpdateContent(updateTodo);
  };
  const handleDelete = (todo: TodoModel) => {
    newTodoList[todo.status] = newTodoList[todo.status].filter(
      (todo) => todo.id !== todo.id
    );
    setNewTodoList({ ...newTodoList });
  };
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    todo: TodoModel
  ) => {
    setDragContent(todo);
  };
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    status: TodoStatus
  ) => {
    e.preventDefault();
    if (status !== dragContent?.status) {
      newTodoList[dragContent.status] = newTodoList[dragContent.status].filter(
        (todo) => todo.id !== dragContent.id
      );
      newTodoList[status] = [
        ...newTodoList[status],
        { ...dragContent, status },
      ];
      setNewTodoList(newTodoList);
      setDragContent({} as TodoModel);
    }
  };

  const handleTodoUpdate = (updatedTodo: TodoModel) => {
    newTodoList[updatedTodo.status] = newTodoList[updatedTodo.status].map(
      (todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      }
    );
    setNewTodoList({ ...newTodoList });
  };

  const handleToggle = (version: string) => {
    setCurrentVersion(version);
  };

  return {
    pendingTodos: newTodoList.pending,
    inProgressTodos: newTodoList.inProgress,
    completedTodos: newTodoList.completed,
    currentVersion,
    todos: [
      ...newTodoList.pending,
      ...newTodoList.inProgress,
      ...newTodoList.completed,
    ],
    updateContent,
    handleDragStart,
    handleDrop,
    handleAddTodo,
    handleTodoUpdate,
    handleToggle,
    handleEdit,
    handleDelete,
  };
};

export default useTodo;
