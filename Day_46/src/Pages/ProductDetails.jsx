import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { getProduct } from "../redux/middlewares/productMiddleware";
import "../assets/scss/productDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  const productInfo = useSelector((state) => state.productItem.productInfo);
  const status = useSelector((state) => state.productItem.status);
  if (status === "error") return <h3>Đang gặp sự cố, thử lại sau</h3>;
  return (
    <>
      <h2 className="title-product"></h2>
      {status !== "idle" && status === "pending" ? (
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
              {productInfo.data.category}
            </div>
            <div className="product-details-price">
              <span>$</span>
              {productInfo.data.price}
            </div>
            <div className="products-details-btn">
              <button
                onClick={() => {
                  navigate(`/product`);
                }}
              >
                Go Home
              </button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
