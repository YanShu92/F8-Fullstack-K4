import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const ProductDetails = () => {
  const { path } = useParams();
  const [, , id] = path.match(/(.+)\/(\d+)$/);
  console.log(path);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  const productInfo = useSelector((state) => state.productItem.productInfo);
  const status = useSelector((state) => state.productItem.status);
  console.log(productInfo);
  if (status === "error") return <h3>Đang gặp sự cố, thử lại sau</h3>;
  return (
    <>
      <h2 className="title-product"></h2>
      {status !== "idle" && status === "pending" ? (
        <Loading />
      ) : (
        <div className="products-list">
          {listProduct?.data?.listProduct.map((item) => (
            <div className="product-item" key={item._id}>
              <div
                className="product-head"
                onClick={() => {
                  navigate(`details/${item._id}`);
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
                <img src={CartIcon} alt="cart-icon" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductDetails;
