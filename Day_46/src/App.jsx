import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Pages/Error";
import DefaultPages from "./Pages/DefaultPages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/main.scss";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/product">
            <Route index element={<DefaultPages />} />
            <Route path=":page" element={<Home />} />
          </Route>
          <Route path="/details">
            <Route index element={<DefaultPages />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;
