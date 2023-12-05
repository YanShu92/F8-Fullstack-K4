import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { getApiKey } from "../../store/middlewares/productMiddleware";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";
import { apiKeySlice } from "../../store/slice/apiKeySlice";
const { setStatus } = apiKeySlice.actions;
const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
      dispatch(getApiKey(email));
    } else {
      toast.error("Email không hợp lệ");
    }
  };
  const status = useSelector((state) => state.apiKey.status);
  console.log(status);
  if (status === "success") toast.success("Wellcome to Chello");
  if (status === "errorMail") {
    toast.error("Email chưa đăng kí");
    dispatch(setStatus());
  }
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
        <button type="submit">Submit</button>
        {status === "pending" && <Loading />}
      </form>
    </div>
  );
};

export default Login;
