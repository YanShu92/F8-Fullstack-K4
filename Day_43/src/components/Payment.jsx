import React from "react";
import "../assets/scss/payment.scss";
import { useDispatch, useSelector } from "../core/hook";
import { client } from "./configs/client";
const Payment = () => {
  const listCart = useSelector((state) => state.listCart);
  console.log(listCart);
  const dispatch = useDispatch();
  const getUserCookie = () => {
    const str = document.cookie + ";";
    const pattern = /userName=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
  };

  const handlePayment = async () => {
    dispatch({
      type: "loading/show",
    });
    const bodyCart = listCart.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      };
    });
    const { data } = await client.post(`/orders`, bodyCart);
    if (data.code === 200) {
      dispatch({
        type: "pay-cart",
      });
    } else {
      document.cookie = `userName=;expires=${new Date().toUTCString()}`;
      document.cookie = `email=;expires=${new Date().toUTCString()}`;
      document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
      window.location.reload();
    }
  };
  return (
    <div className="payment">
      <h2>
        Giỏ hàng của <span>{getUserCookie()}</span>
      </h2>
      {listCart.length ? (
        <div>
          <table>
            <caption>Bảng thanh toán chi tiết</caption>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Còn lại</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {listCart.map((item) => (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <th>{item.count}</th>
                  <th>{item.quantity}</th>
                  <th>{+item.count * +item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn-payment"
            onClick={() => {
              handlePayment();
            }}
          >
            Thanh toán
          </button>
        </div>
      ) : (
        <div className="no-cart">Không có sản phẩm</div>
      )}
    </div>
  );
};

export default Payment;
