import React, { Component } from "react";
import "../todoList/TodoList.css";
import Todo from "./Todo";
import Toastify from "../Toastify/Toastify";
import NoneTodo from "./NoneTodo";
import { client } from "../../configs/client";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToast: null,
      statusToast: 0,
      listTodo: props.onTodo,
    };
    console.log(props);
  }

  // async deleteTodo(id) {
  //   const { response } = await client.delete(`/todos/${id}`);
  //   if (response.ok) {
  //     this.handleUpdateToast("Xóa thành công", 1);
  //     const arrTodo = this.state.listTodo;
  //     const index = arrTodo.findIndex((todo) => todo.id === id);
  //     arrTodo.splice(index, 1);
  //     this.setState({
  //       listTodo: arrTodo,
  //     });
  //   }
  // }
  componentDidMount() {}
  render() {
    return <NoneTodo />;
  }
}

export default TodoList;
