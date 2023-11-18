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
