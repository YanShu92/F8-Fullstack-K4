import LoginButton from "./components/pages/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment } from "react";
import Loading from "./components/Loading/Loading";
import "./assets/sass/main.scss";
import Profile from "./components/profile/Profile";
const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <div className="container">
      {error && isLoading && <Loading />}
      {error && !isLoading && <LoginButton />}
      {!error && isLoading && <Loading />}
      {!error && !isLoading && (
        <Fragment>
          <LoginButton />
          <Profile />
        </Fragment>
      )}
    </div>
  );
};

export default App;
