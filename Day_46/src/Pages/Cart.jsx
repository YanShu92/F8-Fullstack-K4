import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Trash from "../assets/images/trash.svg";
import "../assets/scss/cart.scss";
import { numberFormat } from "../utils/numberFormat";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../redux/slice/cartSlice";
const { increment, decrement, checkout, remove } = cartSlice.actions;
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const handleIncrement = (item) => {
    dispatch(increment(item));
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item));
    localStorage.setItem("cart", JSON.stringify(cartList));
  };
  if (!cartList || !cartList?.length)
    return (
      <>
        <ScrollToTop />
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>SHOPPING CART</h2>
        <br />
        <p style={{ textAlign: "center", fontSize: "1.7rem" }}>
          Không có sản phẩm trong giỏ hàng
        </p>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            background: "orange",
            cursor: "pointer",
            fontSize: "1.7rem",
            marginLeft: "auto",
          }}
          onClick={() => {
            navigate(`/product`);
          }}
        >
          Go home
        </button>
      </>
    );
  return (
    <>
      <ScrollToTop />
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>SHOPPING CART</h2>
      {cartList.map((item) => (
        <div className="cart-item" key={item._id}>
          <div className="cart-item-box">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <div className="cart-item-brand">{item.brand}</div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">
                <span>$</span>
                {numberFormat(item.price)}
              </div>
              <div className="cart-item-quantity">
                Còn lại: {numberFormat(item.quantity)}
              </div>
            </div>
          </div>
          <div className="cart-item-btn">
            <div className="btn-item-box">
              <button
                className={item.count === 1 ? "hide left" : "left"}
                onClick={() => {
                  handleDecrement(item);
                }}
              >
                -
              </button>
              <div>{item.count}</div>
              <button
                className="right"
                onClick={() => {
                  handleIncrement(item);
                }}
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              <div className="cart-item-total-price">
                <span>$</span>
                {numberFormat(item.count * item.price)}
              </div>
              <img
                src={Trash}
                alt="trash"
                onClick={() => {
                  dispatch(remove(item));
                  localStorage.setItem("cart", JSON.stringify(cartList));
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total-price">
        <span>$</span>
        {numberFormat(
          cartList.reduce((total, curr) => total + curr.count * curr.price, 0)
        )}
      </div>
      <div className="cart-btn">
        <button
          onClick={() => {
            navigate(`/product`);
          }}
        >
          Go home
        </button>
        <button
          onClick={() => {
            dispatch(checkout());
            localStorage.removeItem("cart");
          }}
        >
          CheckOut
        </button>
      </div>
    </>
  );
};

export default Cart;
