import React from "react";
import "../assets/scss/payment.scss";
import { useSelector } from "../core/hook";
const Payment = () => {
  const listCart = useSelector((state) => state.listCart);
  const getUserCookie = () => {
    const str = document.cookie + ";";
    const pattern = /userName=([^;]*)/;
    const strSub = str.match(pattern);
    return strSub[1];
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
                <tr key={item._id}>
                  <th>{item.name}</th>
                  <th>{item.count}</th>
                  <th>{item.quantity}</th>
                  <th>{+item.count * +item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-payment">Thanh toán</button>
        </div>
      ) : (
        <div className="no-cart">Không có sản phẩm</div>
      )}
    </div>
  );
};

export default Payment;
