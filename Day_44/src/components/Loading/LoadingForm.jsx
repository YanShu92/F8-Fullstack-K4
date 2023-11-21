import React from "react";
import { CubeSpinner } from "react-spinners-kit";
import "../Loading/loading.scss";
const LoadingForm = ({ isLoadingForm = false }) => {
  return (
    isLoadingForm && (
      <div className="loadingBox">
        <div className="overlay-loading"></div>
        <div className="loading">
          <CubeSpinner size={70} frontColor="#00ff89" backColor="#686769" />
        </div>
      </div>
    )
  );
};

export default LoadingForm;
