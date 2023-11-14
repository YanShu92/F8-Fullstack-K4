import React from "react";
import "../todoList/TodoList.css";
import NoneTodo from "./NoneTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../configs/client";
import Todo from "./Todo";

const TodoList = ({ onTodo, deleteTodo }) => {
  console.log(deleteTodo);
  // const deleteTodo = async (id) => {
  //   const { response } = await client.delete(`/todos/${id}`);
  //   if (response.ok) {
  //     toast.success("Xóa thành công");
  //   }
  // };

  return onTodo.length ? (
    onTodo.map((todo) => (
      <Todo
        key={todo._id}
        todo={todo.todo}
        idTodo={todo._id}
        onDelete={deleteTodo}
      />
    ))
  ) : (
    <NoneTodo />
  );
};

export default TodoList;

// import React, { Component } from "react";
// import "../todoList/TodoList.css";
// import NoneTodo from "./NoneTodo";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { client } from "../../configs/client";
// import Todo from "./Todo";
// export class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageToast: null,
//       statusToast: 0,
//       listTodo: props.onTodo,
//     };
//   }
//   componentDidUpdate() {
//     console.log("props", this.props);
//   }
//   render() {
//     return <div>TodoList</div>;
//   }
// }

export default TodoList;
