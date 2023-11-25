import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify = () => {
  const status = useSelector((state) => state.status);
  const message = useSelector((state) => state.message);
  const maxNumber = useSelector((state) => state.maxNumber);
  const remainingTime = useSelector((state) => state.remainingTime);
  const theme = useSelector((state) => state.theme);

  console.log(message);
  const css = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme === "light" ? "colored" : "light",
  };

  useEffect(() => {
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
  }, [status, message, maxNumber, remainingTime]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
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
