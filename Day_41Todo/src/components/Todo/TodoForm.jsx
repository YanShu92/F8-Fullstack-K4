import React, { useState } from "react";
import "../../assets/scss/FormTodo.scss";
const TodoForm = ({ onGetList, updateDebounce, changeButton }) => {
  const [todoName, setTodoName] = useState("");
  const [onside, setOnSide] = useState(true);
  const handleTodoName = (e) => {
    e.preventDefault();
    onGetList(todoName.trim());
    setTodoName("");
    setOnSide(true);
    changeButton(true);
  };

  const handleValue = (e) => {
    setTodoName(e.target.value);
    if (!onside) {
      updateDebounce(todoName);
      if (e.target.value === "") updateDebounce("");
    }
  };

  const handleChange = () => {
    setOnSide(false);
    changeButton(false);
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
      <button
        type="submit"
        className={onside ? "btn-submit onside" : "btn-submit"}
      >
        Thêm mới
      </button>
      <button
        type="button"
        className={onside ? "btn-search" : "btn-search onside"}
        onClick={handleChange}
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default TodoForm;
