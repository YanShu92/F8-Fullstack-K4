import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/middlewares/productMiddleware";
import CartIcon from "../assets/images/cart.svg";
import Loading from "../components/Loading/Loading";
import "../assets/scss/home.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddItem = (item) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));

    const index = cartItem.findIndex(({ _id }) => +_id === +item._id);
    console.log(cartItem);
    if (index > 0) {
      ++cartItem[index].count;
    } else {
      cartItem.push({ ...item, count: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  const status = useSelector((state) => state.product.status);
  useEffect(() => {
    dispatch(getProducts());
    const localCart = JSON.parse(localStorage.getItem("cart"));
    !localCart ? setCart(localCart) : setCart([]);
  }, []);

  const listProduct = useSelector((state) => state.product.listProduct);
  if (status === "error") return <h3>Đang gặp sự cố, thử lại sau</h3>;
  return (
    <>
      <h2 className="title-products">PRODUCTS</h2>
      {status !== "idle" && status === "pending" ? (
        <Loading />
      ) : (
        <div className="products-list">
          {listProduct?.data?.listProduct.map((item) => (
            <div className="product-item" key={item._id}>
              <div
                className="product-head"
                onClick={() => {
                  navigate(`/details/${item._id}`);
                }}
              >
                <div className="image-item">
                  <img src={item.image} alt="" />
                </div>
                <h2 className="name-item">{item.name}</h2>
              </div>
              <div className="info-item">
                <h3 className="price-item">
                  <span>$</span>
                  {item.price}
                </h3>
                <img
                  src={CartIcon}
                  alt="cart-icon"
                  onClick={() => {
                    handleAddItem(item);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
