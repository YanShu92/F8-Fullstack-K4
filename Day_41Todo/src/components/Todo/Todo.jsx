import React, { useState } from "react";
import "../../assets/scss/TodoList.scss";
const Todo = ({ todo, _id, isCompleted, onGetUpdate, onDelete }) => {
  const [isModify, setModify] = useState(false);
  const [check, setCheck] = useState(isCompleted);
  const [name, setName] = useState(todo);
  const checkCompleted = () => {
    setCheck(!check);
  };
  const getModify = () => {
    setName(todo);
    setModify(!isModify);
    setCheck(isCompleted);
  };
  const getUpdateTodo = (e) => {
    setName(e.target.value);
  };

  const updateTodo = () => {
    setModify(!isModify);
    console.log(check);
    onGetUpdate(_id, name, check);
  };
  return (
    <li className="todo">
      <input
        type="text"
        defaultValue={todo}
        value={name}
        className={check ? "completed" : ""}
        disabled={!isModify}
        onChange={(e) => {
          getUpdateTodo(e);
        }}
      />
      <div className="btn-wapper">
        {isModify ? (
          <>
            <label htmlFor="checkCompleted">
              {check ? <span>Completed</span> : <span>Not Completed</span>}
              <input
                type="checkbox"
                name="checkCompleted"
                id="checkCompleted"
                checked={check}
                onChange={() => checkCompleted()}
              />
            </label>
            <button
              className={"btn-out"}
              onClick={() => {
                getModify();
              }}
            >
              Thoát
            </button>
            <button className={"btn-update"} onClick={updateTodo}>
              Update
            </button>
          </>
        ) : (
          <button
            className={todo.isCompleted ? "btn-modify completed" : "btn-modify"}
            onClick={() => {
              getModify();
            }}
          >
            Sửa
          </button>
        )}
        <button
          type="button"
          className="btn-delete"
          onClick={() => {
            onDelete(_id);
          }}
        >
          Xóa
        </button>
      </div>
    </li>
  );
};

export default Todo;
