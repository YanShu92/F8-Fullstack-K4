import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify = ({ message, status, isLoading }) => {
  const css = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  if (!isLoading) {
    if (status === 0) {
      toast.error(message, css);
    }
    if (status === 1) {
      toast.success(message, css);
    }
    if (status === 2) {
      toast.warn(message, css);
    }
    if (status === 3) {
      toast.info(message, css);
    }
  }
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default Toastify;
