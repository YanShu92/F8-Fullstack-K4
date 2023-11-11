import React from "react";
import "../todoList/TodoList.css";
import { client } from "../../configs/client";

const Todo = ({ todo, idTodo, onDelete }) => {
  return (
    <li className="todo" id={idTodo}>
      <input type="text" value={todo} readOnly />
      <div className="btn-wapper">
        <button type="button" className="btn-modify">
          Sửa
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => {
            onDelete(idTodo);
          }}
        >
          Xóa
        </button>
      </div>
    </li>
  );
};

export default Todo;
