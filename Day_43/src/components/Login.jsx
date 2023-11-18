import React, { useEffect, useState } from "react";
import "../assets/scss/login.scss";
import { client } from "./configs/client";
import { useSelector, useDispatch } from "../core/hook";

const Login = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const [email, setEmail] = useState("");

  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "loading/show",
    });
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    console.log(email.match(pattern));
    if (email.match(pattern)) {
      var emailPath = email.replace(/@/g, "%40");
      const url = `/api-key?email=${emailPath}`;
      const { data } = await client.get(url);
      dispatch({
        type: "loading/hide",
      });
      if (data.code === 200) {
        const { apiKey } = data.data;
        client.setApi(apiKey);
        document.cookie = `apiKey=${apiKey}`;
        document.cookie = `email=${email}`;
        dispatch({
          type: "login",
        });
        dispatch({
          type: "toast",
          payload: {
            message: "Chào mừng bạn đến Shop Thiên đường",
            status: 1,
          },
        });
        setEmail("");
      } else {
        dispatch({
          type: "toast",
          payload: {
            message: data.message,
            status: 0,
          },
        });
      }
    } else {
      dispatch({
        type: "toast",
        payload: {
          message: "Vui lòng nhập đúng định dạng email!",
          status: 0,
        },
      });
    }
  };

  const getApiKeyCookie = () => {
    const str = document.cookie + ";";
    const pattern = /apiKey=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
  };
  const getEmailCookie = () => {
    const str = document.cookie + ";";
    const pattern = /email=(([\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/;
    const strSub = str.match(pattern);
    return strSub[1];
  };

  const checkUser = () => {
    if (document.cookie) {
      const apiKey = getApiKeyCookie();
      if (apiKey) {
        client.setApi(apiKey);
        dispatch({
          type: "login/comeback",
          payload: {
            message: `Chào mừng bạn ${getEmailCookie()} quay trở lại`,
            status: 1,
          },
        });
      }
    } else {
      dispatch({
        type: "logout",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (!isLogin) checkUser();
  }, [isLogin]);

  return (
    <div className="login-page">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h3>Welcome to Shop!</h3>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="example@example.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
