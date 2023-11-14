import React, { Component } from "react";

import Loading from "./components/Loading/Loading";
import TodoForm from "./components/Todo/TodoForm";
import Toastify from "./components/Toast/Toastify";
import { client } from "./components//configs/client";

import "./assets/scss/main.scss";
import TodoList from "./components/Todo/TodoList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      listTodo: [],
      message: null,
      status: 0,
      isLogin: false,
    };
    // this.changeButton = this.changeButton.blind(this);
  }

  async getList(apiKey) {
    this.setState({ isLoading: true });
    const { data } = await client.get("/todos");
    if (data.code === 200) {
      if (!this.isLogin) {
        this.setState({
          message: `Chào mừng bạn quay trở lại: ${this.getEmailCookie()}`,
          status: 1,
          isLogin: true,
          listTodo: data.data.listTodo,
          isLoading: false,
        });
      } else {
        this.setState({
          message: `Chào mừng bạn: ${this.getEmailCookie()} tới Todo`,
          status: 1,
          isLogin: true,
          isLoading: false,
          listTodo: data.data.listTodo,
        });
      }
    }
  }

  async getApiKey() {
    var email = prompt(
      "Vui lòng nhập email để đăng nhập:?",
      "example@example.com"
    );
    email = email.toLowerCase();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
      var emailPath = email.replace(/@/g, "%40");
      const url = `/api-key?email=${emailPath}`;
      this.setState({ isLoading: true });
      const { data } = await client.get(url);
      console.log(data);
      if (data.code === 200) {
        const { apiKey } = data.data;
        client.setApi(apiKey);
        document.cookie = `apiKey=${apiKey}`;
        document.cookie = `email=${email}`;
        this.setState({
          message: `Chào mừng bạn: ${this.getEmailCookie()}`,
          status: 1,
          isLogin: true,
          isLoading: false,
        });
      } else {
        this.setState({ message: "Email không tồn tại!", status: 0 });
      }
    } else {
      this.setState({
        message: "Vui lòng nhập đúng định dạng email!",
        status: 0,
      });
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
    const pattern = /email=(([\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/;
    const strSub = str.match(pattern);
    return strSub[1];
  }

  addTodo = async (todo) => {
    console.log(todo);
    if (!todo.trim().length) {
      this.setState({ message: "Cần nhập todoName", status: 0 });
      return;
    }

    if (!/.{2,}/.test(todo)) {
      this.setState({ message: "Cần ít nhất nhất là 2 kí tự", status: 0 });
      return;
    }
    const apiKey = this.getApiKeyCookie();
    if (apiKey) {
      this.setState({ isLoading: true });
      client.setApi(apiKey);
      const { data } = await client.post("/todos", { todo });
      if (data.code === 201) {
        this.setState({
          message: data.message,
          status: 1,
          isLoading: false,
          listTodo: [data.data, ...this.state.listTodo],
        });
        return;
      } else {
        this.setState({
          message: data.message,
          status: 0,
          isLoading: false,
        });
        return;
      }
    }
  };

  onDelete = async (idTodo) => {
    console.log(idTodo);
    const apiKey = this.getApiKeyCookie();
    if (apiKey) {
      this.setState({ isLoading: true });
      client.setApi(apiKey);
      const { data } = await client.delete(`/todos/${idTodo}`);
      console.log(data);
      if (data.code === 200) {
        const newArr = [...this.state.listTodo].filter(
          (todo) => todo._id !== idTodo
        );
        this.setState({
          message: data.message,
          status: 1,
          isLoading: false,
          listTodo: newArr,
        });
        return;
      } else {
        this.setState({
          message: data.message,
          status: 0,
          isLoading: false,
        });
        return;
      }
    }
  };

  getUpdate = async (idTodo, todo, isCompleted) => {
    const apiKey = this.getApiKeyCookie();
    if (apiKey) {
      this.setState({ isLoading: true });
      client.setApi(apiKey);
      const { data } = await client.patch(`/todos/${idTodo}`, {
        todo,
        isCompleted,
      });
      console.log(data);
      if (data.code === 200) {
        const newArr = [...this.state.listTodo].map((item) =>
          item._id === idTodo ? data.data : item
        );
        this.setState({
          message: data.message,
          status: 1,
          isLoading: false,
          listTodo: newArr,
        });
        return;
      } else {
        this.setState({
          message: data.message,
          status: 0,
          isLoading: false,
        });
        return;
      }
    }
  };

  checkUser() {
    if (document.cookie) {
      const apiKey = this.getApiKeyCookie();
      if (apiKey) {
        client.setApi(apiKey);
        this.getList(apiKey);
      }
    } else {
      this.getApiKey();
    }
  }

  onSearch = async (value) => {
    this.setState({ isLoading: true });
    const query = `?q=${value}`;
    console.log(query);
    const { data } = await client.get(`/todos/${query}`);
    console.log(data);
    if (data.code === 200) {
      const newArr = data.data.listTodo;
      if (newArr.length) {
        this.setState({
          message: "Tìm kiếm thành công",
          status: 1,
          isLoading: false,
          listTodo: newArr,
        });
      } else {
        this.setState({
          message: "Không có kết quả tìm kiếm",
          status: 3,
          isLoading: false,
          listTodo: newArr,
        });
      }
      return;
    } else {
      this.setState({
        message: data.message,
        status: 0,
        isLoading: false,
      });
      return;
    }
  };
  updateDebounce = this.debounce((text) => {
    this.onSearch(text);
  }, 500);

  debounce(cb, delay = 250) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  changeButton = (onside) => {
    if (!onside) {
      this.setState({
        message: "Chuyển chế độ tìm kiếm thành công",
        status: 3,
      });
    } else {
      client.get("/todos").then(({ data }) => {
        if (data.code === 200) {
          console.log(data);

          this.setState({
            listTodo: data.data.listTodo,
            isLoading: false,
            message: "Chuyển chế độ add todo thành công",
            status: 3,
          });
        }
      });
    }
  };

  componentDidMount() {
    this.checkUser();
  }

  render() {
    console.log(this.state.listTodo);
    const { isLoading, listTodo, message, status, isLogin } = this.state;
    return (
      <div className="container">
        {!isLogin ? (
          <h1>Welcome to TodoList</h1>
        ) : (
          <h1>
            Welcome <span>{this.getEmailCookie()}</span> to TodoList
          </h1>
        )}
        <TodoForm
          onGetList={this.addTodo}
          updateDebounce={this.updateDebounce}
          changeButton={this.changeButton}
        />
        <TodoList
          listTodo={listTodo}
          onDelete={this.onDelete}
          onGetUpdate={this.getUpdate}
        />
        <Loading isLoading={isLoading} />
        <Toastify message={message} status={status} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
