import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Error from "./Pages/Error";
import "./assets/scss/main.scss";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/product/1" element={<Home />} />
          <Route path="/details">
            <Route path=":path" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
