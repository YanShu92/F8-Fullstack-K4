import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <main className="main">
        <h2>Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
        <p>
          Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
          tại đây!
        </p>
        <button onClick={() => loginWithPopup()}>Đăng nhập || Đăng kí</button>
      </main>
    )
  );
};

export default LoginButton;
