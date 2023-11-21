import React from "react";
import { CubeSpinner } from "react-spinners-kit";
import "../Loading/loading.scss";
const Loading = () => {
  return (
    <div className="loadingBox">
      <div className="overlay-loading"></div>
      <div className="loading">
        <CubeSpinner size={70} frontColor="#00ff89" backColor="#686769" />
      </div>
    </div>
  );
};

export default Loading;
