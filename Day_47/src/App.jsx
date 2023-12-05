import Login from "./Pages/login/Login";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/home/Home";
import { useSelector } from "react-redux";
import Toastify from "./components/toastify/Toastify";
const App = () => {
  const apiKey = useSelector((state) => state.apiKey.apiKey);
  return (
    <div className="container">
      {!apiKey ? <Login /> : <Home />}
      <Toastify />
    </div>
  );
};

export default App;
