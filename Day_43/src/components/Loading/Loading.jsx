import React from "react";
import { CubeSpinner } from "react-spinners-kit";
import "../../assets/scss/loading.scss";
import { useSelector } from "../../core/hook";
const Loading = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    isLoading && (
      <div className="loadingBox">
        <div className="overlay-loading"></div>
        <div className="loading">
          <CubeSpinner
            size={70}
            frontColor="#00ff89"
            backColor="#686769"
            loading={isLoading}
          />
        </div>
      </div>
    )
  );
};

export default Loading;
