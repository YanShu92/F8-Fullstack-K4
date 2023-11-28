import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = localStorage.getItem("cart");
  const navigate = useNavigate();
  const cartList = JSON.parse(cart);
  console.log(cartList);
  if (!cartList || !cartList?.length)
    return (
      <>
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
  return <div></div>;
};

export default Cart;
