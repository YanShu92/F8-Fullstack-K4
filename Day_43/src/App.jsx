import ListItems from "./components/ListItems";
import Payment from "./components/Payment";
import "./assets/scss/main.scss";
import { useState } from "react";
import Login from "./components/Login";
import Loading from "./components/Loading/Loading";
import Toastify from "./components/Toast/Toastify";
import { useSelector } from "./core/hook";
const App = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const getApiKeyCookie = () => {
    const str = document.cookie + ";";
    const pattern = /apiKey=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
  };
  console.log(isLogin);
  return (
    <div>
      {!isLogin ? (
        <Login />
      ) : (
        <div className="container">
          <h1>Welcome to Shopping Home</h1>
          <ListItems />
          <Payment />
        </div>
      )}
      <Loading />
      <Toastify />
    </div>
  );
};

export default App;
