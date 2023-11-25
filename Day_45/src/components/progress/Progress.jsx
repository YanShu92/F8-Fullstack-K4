import React from "react";
import { useSelector } from "react-redux";
import "../progress/Progress.scss";

const Progress = () => {
  const maxNumber = useSelector((state) => state.maxNumber);
  const maxTime = Math.ceil(Math.log2(maxNumber));
  const remainingTime = useSelector((state) => state.remainingTime);
  const width = (remainingTime / maxTime) * 100;
  return <div className="progress" style={{ width: `${width}%` }}></div>;
};

export default Progress;
