import React, { Fragment, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../info/Info.scss";
const Info = () => {
  const maxNumber = useSelector((state) => state.maxNumber);
  const remainingTime = useSelector((state) => state.remainingTime);
  const isCorrect = useSelector((state) => state.isCorrect);
  const data = useSelector((state) => state.data);
  console.log(data);
  if (remainingTime === 0) {
    console.log("đã nhập hết");
    localStorage.setItem("data", JSON.stringify(data));
  }

  if (isCorrect) {
    console.log("chính xác");
    localStorage.setItem("data", JSON.stringify(data));
  }

  localStorage.setItem("maxNumber", maxNumber);
  const maxTime = Math.ceil(Math.log2(maxNumber));
  return (
    <Fragment>
      <h2>Chào mừng bạn đến với trò chơi đoán số</h2>
      <h2>
        Còn {remainingTime}/{maxTime} lần
      </h2>
      <h2>Hint: Bạn cần tìm kiếm một số từ 1 đến {maxNumber}</h2>
    </Fragment>
  );
};

export default Info;
