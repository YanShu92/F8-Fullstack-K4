import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../mode/DarkMode.scss";
const DarkMode = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleChangeMode = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    dispatch({
      type: "mode/change",
      payload: theme,
    });
  };
  return (
    <div className="theme-mode" onClick={handleChangeMode}>
      {theme === "dark" ? (
        <img src="src/assets/images/sun-mode.svg" alt="light-mode" />
      ) : (
        <img src="src/assets/images/dark-mode.svg" alt="dark-mode" />
      )}
    </div>
  );
};

export default DarkMode;
