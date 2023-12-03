import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { getApiKey } from "../../services/userService";
import { client } from "../../utils/client";
// import { getApiKey } from "../../store/middlewares/productMiddleware";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
      setLoading(true);
      const data = await getApiKey(email);
      if (data.code === 200) {
        setLoading(false);
        const apiKey = data.data.apiKey;
        localStorage.setItem("apiKey", apiKey);
        client.setApi = apiKey;
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-page">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h3>Welcome to Chello!</h3>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="example@example.com"
          name="email"
          value={email}
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{!isLoading ? "Submit" : "Loading..."}</button>
      </form>
    </div>
  );
};

export default Login;
