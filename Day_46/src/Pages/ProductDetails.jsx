import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { getProduct } from "../redux/middlewares/productMiddleware";
import { toast } from "react-toastify";
import "../assets/scss/productDetails.scss";
import { cartSlice } from "../redux/slice/cartSlice";
const { add } = cartSlice.actions;

const ProductDetails = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  const cartList = useSelector((state) => state.cart.cartList);

  const handleAddCart = (item) => {
    dispatch(add(item));
    toast.success(`${item.name} đã được thêm vào giỏ hàng`);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const productInfo = useSelector((state) => state.productItem.productInfo);
  const status = useSelector((state) => state.productItem.status);
  if (status === "error") return <h3>Đang gặp sự cố, thử lại sau</h3>;
  return (
    <>
      <h2 className="title-product"></h2>
      {status === "idle" || status === "pending" ? (
        <Loading />
      ) : (
        <div className="product-details">
          <div className="product-details-image">
            <img src={productInfo.data.image} alt={productInfo.data.name} />
          </div>
          <div className="product-details-info">
            <div className="product-details-brand">
              {productInfo.data.brand}
            </div>
            <div className="product-details-name">{productInfo.data.name}</div>
            <div className="product-details-description">
              "{productInfo.data.description}"
            </div>
            <div className="product-details-category">
              Category: {productInfo.data.category}
            </div>
            <div className="product-details-price">
              <span>$</span>
              {productInfo.data.price}
            </div>
            <div className="products-details-btn">
              <button
                onClick={() => {
                  navigate(`/product/1`);
                }}
              >
                Go Home
              </button>
              <button
                onClick={() => {
                  handleAddCart(productInfo.data);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
