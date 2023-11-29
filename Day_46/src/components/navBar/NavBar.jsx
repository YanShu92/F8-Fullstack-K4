import React, { useEffect, useState } from "react";
import LogoBrand from "../../assets/images/logo-brand.png";
import CartIcon from "../../assets/images/cart.svg";
import { useNavigate } from "react-router-dom";
import "../navBar/NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/slice/cartSlice";
const { addLoad } = cartSlice.actions;
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart) {
      dispatch(addLoad(localCart));
    }
  }, []);
  const cartList = useSelector((state) => state.cart.cartList);
  const countTotal = cartList.reduce((total, curr) => total + curr.count, 0);
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
      <div id="number-of-products">{countTotal}</div>
    </div>
  );
};

export default NavBar;
