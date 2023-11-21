import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import "./profile.scss";
import { Fragment, useState } from "react";
import emailjs from "@emailjs/browser";

const Profile = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  // const form = useRef();
  const [email, SetEmail] = useState("");
  const [message, setMessage] = useState("");
  if (isLoading) {
    return <Loading />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const publicKey = "9e9v64tbejx0GU17u";
    const privateKey = "qRm51l7L7L6kzyFTuIWBW";
    const templateID = "template_t5a7iib";
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
                type="email"
                id="email"
                value="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value="Tôi cần trợ giúp bài tập về nhà"
                required
              ></textarea>
              <span> Tin nhắn *</span>
            </label>
            <button>YÊU CẦU HỖ TRỢ</button>
          </form>
        </article>
        <button
          className="logout"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          ĐĂNG XUẤT
        </button>
      </Fragment>
    )
  );
};

export default Profile;
