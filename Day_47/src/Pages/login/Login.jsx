import React, { useEffect, useState } from "react";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  // const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (email.match(pattern)) {
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
