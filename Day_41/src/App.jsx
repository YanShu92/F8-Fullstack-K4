import React, { Component } from "react";
import FormTodo from "./assets/components/formTodo/FormTodo";
import TodoList from "./assets/components/todoList/TodoList";

import "./assets/scss/main.scss";
import { client } from "./assets/configs/client";
import Toastify from "./assets/components/Toastify/Toastify";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      messageToast: null,
      statusToast: 0,
      todoArr: [],
    };
  }

  async getList(apiKey) {
    const { data } = await client.get("/todos");
    console.log(data);
    if (data.code === 200) {
      const arrTodo = data.data.listTodo;
      if (arrTodo.length) {
        this.handleUpdateToast(
          `chào mừng bạn quay trở lại: ${this.getEmailCookie()}`,
          1
        );
        this.setState({ todoArr: arrTodo });
      } else {
        this.handleUpdateToast(`chào mừng bạn: ${this.getEmailCookie()}`, 1);
      }
    } else {
      this.handleUpdateToast("Có lỗi. Vui lòng đăng nhập lại", 0);
      this.getApiKey();
    }
  }

  async getApiKey() {
    var email = prompt("Please enter your email:?", "example@example.com");
    email = email.toLowerCase();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
      var emailPath = email.replace(/@/g, "%40");
      const url = `/api-key?email=${emailPath}`;
      const { data } = await client.get(url);
      if (data.code === 200) {
        const { apiKey } = data.data;
        client.setApi(apiKey);
        document.cookie = `apiKey=${apiKey}`;
        document.cookie = `email=${email}`;
        this.getList(apiKey);
      } else {
        this.handleUpdateToast(`email không tồn tại!`, 0);
      }
    } else {
      this.handleUpdateToast("vui lòng nhập đúng định dạng email!", 0);
    }
  }

  getApiKeyCookie() {
    const str = document.cookie + ";";
    const pattern = /apiKey=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
  }
  getEmailCookie() {
    const str = document.cookie + ";";
    const pattern = /email=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
  }
  checkUser() {
    if (document.cookie) {
      const apiKey = this.getApiKeyCookie();
      client.setApi(apiKey);
      this.getList(apiKey);
    } else {
      this.getApiKey();
    }
  }
  componentDidMount() {
    this.checkUser();
  }

  // async deleteTodo(_id) {
  //   const { response } = await client.delete(`/todos/${_id}`);
  //   console.log(response);
  //   if (response.ok) {
  //     console.log(this);
  //     const listTodo = this?.state.todoArr;
  //     console.log(1111);
  //     console.log(listTodo);
  //     const index = arrTodo.findIndex((todo) => todo.id === _id);
  //     listTodo.splice(index, 1);
  //     this.setState({
  //       todoArr: listTodo,
  //     });
  //     this.handleUpdateToast("Xóa Todo thành công", 1);
  //   } else {
  //     this.handleUpdateToast("Xóa Thất bại, thử lại", 0);
  //     this.getApiKey();
  //   }
  // }

  // handleUpdateToast(message, status) {
  //   this.setState({
  //     messageToast: message,
  //     statusToast: status,
  //   });
  // }

  async getUpdateList(apiKey) {
    const { data } = await client.get("/todos");
    if (data.code === 200) {
      const arrTodo = data.data.listTodo;
      if (arrTodo.length) {
        this.setState({ todoArr: arrTodo });
      }
    }
  }

  async apiAddTodo(todo) {
    const { data } = await client.post("/todos", { todo });
    if (data.code === 201) {
      this.handleUpdateToast(data.message, 1);
      this.getUpdateList(this.getApiKeyCookie());
    } else {
      this.handleUpdateToast("Có lỗi khi addTodo. Vui lòng nhập lại", 0);
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    const todoEl = document.querySelector(".add-todo");
    var todo = todoEl.value;
    if (/.{1,}/.test(todo)) {
      this.apiAddTodo(todo);
    } else {
      this.handleUpdateToast("Cần ít nhất nhất là 1 kí tự", 0);
    }
    todoEl.value = "";
  };

  render() {
    console.log(this.state.todoArr);
    return (
      <div className="container">
        <h1>Welcome to TodoList</h1>
        <FormTodo onAddTodo={this.addTodo} />
        <TodoList onTodo={this.state.todoArr} deleteTodo={this.deleteTodo} />
        <Toastify
          message={this.state.messageToast}
          status={this.state.statusToast}
        />
      </div>
    );
  }
}

export default App;
