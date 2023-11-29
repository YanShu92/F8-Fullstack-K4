import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/middlewares/productMiddleware";
import CartIcon from "../assets/images/cart.svg";
import Loading from "../components/Loading/Loading";
import "../assets/scss/home.scss";
import { useNavigate } from "react-router-dom";
import { numberFormat } from "../utils/numberFormat";
import { cartSlice } from "../redux/slice/cartSlice";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Paginate from "../components/Paginate/Paginate";
import { toast } from "react-toastify";
const { add } = cartSlice.actions;

const Home = () => {
  const { page } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.cartList);

  const handleAddItem = (item) => {
    dispatch(add(item));
    toast.success(`${item.name} đã được thêm vào giỏ hàng`);
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    // page <= totalPage && page >= 1
    //   ? dispatch(getProducts(page))
    //   : navigate("/product/1");
    dispatch(getProducts(page));
  }, [page]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const listProduct = useSelector((state) => state.product.listProduct);

  if (status === "error") return <h3>Đang gặp sự cố, thử lại sau</h3>;
  return (
    <>
      <ScrollToTop />
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
                  {numberFormat(item.price)}
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
      <Paginate />
    </>
  );
};

export default Home;
