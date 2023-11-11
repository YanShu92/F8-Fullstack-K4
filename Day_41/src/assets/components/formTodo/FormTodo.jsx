import React from "react";
import "../formTodo/FormTodo.css";
const FormTodo = ({ onAddTodo }) => {
  return (
    <form action="#" className="form-add">
      <input
        type="text"
        placeholder="Thêm một việc làm mới"
        className="add-todo"
        autoFocus
      />
      <button
        type="submit"
        className="btn-submit"
        onClick={(e) => {
          onAddTodo(e);
        }}
      >
        Thêm mới
      </button>
    </form>
  );
};

export default FormTodo;
