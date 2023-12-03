import React, { useEffect, useState } from "react";
import "../assets/scss/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
    }
  };

  // const checkUser = () => {
  //   if (document.cookie) {
  //     const apiKey = getApiKeyCookie();
  //     if (apiKey) {
  //       client.setApi(apiKey);
  //       dispatch({
  //         type: "login/comeback",
  //         payload: {
  //           message: `Chào mừng bạn ${getEmailCookie()} quay trở lại`,
  //           status: 1,
  //         },
  //       });
  //     }
  //   } else {
  //     dispatch({
  //       type: "logout",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // useEffect(() => {
  //   if (!isLogin) checkUser();
  // }, [isLogin]);

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
