import React from "react";
import { useRef } from "react";

const Input = () => {
  const progressBar = useRef();
  const handleProgress = (e) => {
    // e.stopPropagation();
    console.log(e);
  };
  return (
    <div className="progress-bar" ref={progressBar} onClick={handleProgress}>
      <span></span>
    </div>
  );
};

export default Input;
