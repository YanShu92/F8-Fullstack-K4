import React, { useState } from "react";
import Todo from "./Todo";
import NoneTodo from "./NoneTodo";

const TodoList = ({ listTodo, onDelete, onGetUpdate }) => {
  return listTodo.length ? (
    listTodo.map((todo) => (
      <Todo
        key={todo._id}
        onGetUpdate={onGetUpdate}
        onDelete={onDelete}
        {...todo}
      />
    ))
  ) : (
    <NoneTodo />
  );
};

export default TodoList;
