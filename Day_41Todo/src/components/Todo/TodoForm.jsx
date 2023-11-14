import React, { useState } from "react";
import "../../assets/scss/FormTodo.scss";
const TodoForm = ({ onGetList, onSearch }) => {
  const [todoName, setTodoName] = useState("");
  const handleTodoName = (e) => {
    e.preventDefault();
    onGetList(todoName.trim());
    setTodoName("");
  };

  const handleValue = (e) => {
    setTodoName(e.target.value);
    onSearch(todoName);
  };

  return (
    <form action="" onSubmit={handleTodoName} className="form-add">
      <input
        type="text"
        placeholder="Thêm một việc làm mới"
        className="add-todo"
        autoFocus
        onChange={handleValue}
        value={todoName}
      />
      <button className="btn-submit">Thêm mới</button>
      <button type="button" className="btn-search" onChange={handleValue}>
        Tìm kiếm
      </button>
    </form>
  );
};

export default TodoForm;
