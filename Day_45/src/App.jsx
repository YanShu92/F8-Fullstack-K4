import React from "react";
import { useSelector } from "react-redux";
import DarkMode from "./mode/DarkMode";
import Progress from "./components/progress/Progress";
import Info from "./components/info/Info";
import "./assets/sass/main.scss";
import InputNumber from "./components/inputNumber/InputNumber";
import Histories from "./components/histories/Histories";
const App = () => {
  const themeDefault = useSelector((state) => state.theme);
  const theme = localStorage.getItem("theme");
  return (
    <div className="container" id={theme ? theme : themeDefault}>
      <Progress />
      <DarkMode />
      <Info />
      <InputNumber />
      <Histories />
    </div>
  );
};

export default App;
