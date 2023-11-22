import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "../Loading/Loading";
import LoadingForm from "../Loading/LoadingForm";
import "./profile.scss";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  // const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoadingForm, setLoadingForm] = useState(false);
  if (isLoading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_h8ckkuo";
    const publicKey = "9e9v64tbejx0GU17u";
    const templateID = "template_t5a7iib";

    const templateParams = {
      to_name: user?.name,
      to_email: email,
      from_name: "Hoang Thanh",
      message: message,
    };
    if (!email) {
      toast.error("Vui lòng nhập email của bạn");
      return;
    }
    const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
    if (!email.match(pattern)) {
      toast.error("Vui lòng nhập đúng định dạng email");
      return;
    }
    if (!message) {
      toast.error("Nhập đầy đủ yêu cầu để hỗ trợ tốt nhất");
      return;
    }
    setLoadingForm(true);
    emailjs
      .send(serviceId, templateID, templateParams, publicKey)
      .then((response) => {
        setLoadingForm(false);
        toast.success("Gửi email thành công! Cảm ơn bạn đã đóng góp");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setLoadingForm(false);
        toast.error("Gửi email thất bại! Vui lòng gửi lại");
      });
  };
  return (
    isAuthenticated && (
      <Fragment>
        <article className="user">
          <div className="img-box">
            {user?.picture && <img src={user.picture} alt={user.name} />}
          </div>
          <h2>Xin chào {user.name}!</h2>
          <form
            action="#"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span> Email của bạn *</span>
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tôi cần trợ giúp bài tập về nhà"
                value={message}
              ></textarea>
              <span> Tin nhắn *</span>
            </label>
            <button>YÊU CẦU HỖ TRỢ</button>
          </form>
        </article>
        <button
          className="logout"
          onClick={() => {
            setLoadingForm(true);
            setTimeout(() => {
              setLoadingForm(false);
            }, 1000);
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          ĐĂNG XUẤT
        </button>
        <ToastContainer />
        <LoadingForm isLoadingForm={isLoadingForm} />
      </Fragment>
    )
  );
};

export default Profile;
