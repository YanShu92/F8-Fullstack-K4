import React from "react";
import LogoBrand from "../../assets/images/logo-brand.png";
import CartIcon from "../../assets/images/cart.svg";
import { useNavigate } from "react-router-dom";
import "../navBar/NavBar.scss";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <div
        className="icon"
        onClick={() => {
          navigate("/product/1");
        }}
      >
        <img src={LogoBrand} alt="logo" />
      </div>
      <div
        className="icon-cart"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <img src={CartIcon} alt="cart-icon" />
      </div>
      <div id="number-of-products">10</div>
    </div>
  );
};

export default NavBar;
