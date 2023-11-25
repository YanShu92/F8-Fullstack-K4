import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPlay } from "../button/ButtonPlay";
import "../inputNumber/InputNumber.scss";
import InputForm from "../inputForm/InputForm";
const InputNumber = () => {
  const remainingTime = useSelector((state) => state.remainingTime);
  const maxNumber = useSelector((state) => state.maxNumber);
  const dispatch = useDispatch();
  const maxNumberAll = 2048;
  const listNumber = [100, 512, 1024, 1536, 2048];
  const marginLeftList = listNumber.map(
    (number) => (number * 100) / maxNumberAll
  );
  const selectNumber = useRef();
  const widthSelectBar = useRef();
  const progressBar = useRef();
  const progressBarSpan = useRef();
  const timing = useRef();
  const inputRef = useRef();
  const [timingNumber, setTimingNumber] = useState(0);
  let initialClientX,
    currentValue = 0,
    value,
    isDrag = false;

  const numberUpdate = (value) => {
    return Math.ceil((maxNumberAll * value) / 100);
  };
  const handleSelect = (e) => {
    value = (e.offsetX / widthSelectBar.current) * 100;
    progressBar.current.style.width = `${value}%`;
    isDrag = true;
    timing.current.style.left = `${(value * widthSelectBar.current) / 100}px`;
    // console.log(numberUpdate(value));
    setTimingNumber(numberUpdate(value));
  };

  const handleProgressSpan = (e) => {
    e.stopPropagation();
    initialClientX = e.clientX;
    isDrag = true;
  };

  const handleDrag = (e) => {
    if (isDrag) {
      value =
        ((e.clientX - initialClientX) * 100) / widthSelectBar.current +
        currentValue;
      if (value < 0) value = 0;
      if (value > 100) value = 100;
      progressBar.current.style.width = `${value}%`;
      timing.current.style.left = `${(value * widthSelectBar.current) / 100}px`;
      setTimingNumber(numberUpdate(value));
    }
  };

  const handleUpdateValue = () => {
    if (isDrag) {
      currentValue = value;
      isDrag = false;
      inputRef.current.focus();
      dispatch({
        type: "inputNumber/maxNumber",
        payload: numberUpdate(value),
      });
    }
  };
  useEffect(() => {
    widthSelectBar.current = selectNumber.current.clientWidth;
    selectNumber.current.addEventListener("mousedown", handleSelect);
    progressBarSpan.current.addEventListener("mousedown", handleProgressSpan);

    progressBarSpan.current.addEventListener("mousemove", (e) => {
      e.stopPropagation();
    });
    // selectNumber.current.addEventListener("mousemove", (e) => {
    //   //   console.log("mousemove");
    // });

    // selectNumber.current.addEventListener("mouseout", (e) => {
    //   //   console.log("mouseout");
    // });

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleUpdateValue);

    return () => {
      selectNumber.current.removeEventListener("mousedown", handleSelect);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleUpdateValue);

      progressBarSpan.current.removeEventListener(
        "mousedown",
        handleProgressSpan
      );
    };
  }, []);

  return (
    <Fragment>
      <div className="select-bar" ref={selectNumber}>
        <div className="progress-bar" ref={progressBar}>
          <span ref={progressBarSpan}></span>
        </div>
        <span className="timing" ref={timing}>
          {timingNumber}
        </span>
        {marginLeftList.map((number, index) => (
          <div
            key={index}
            style={{ marginLeft: `${number}%` }}
            className="milestones"
          >
            {listNumber[index]}
          </div>
        ))}
      </div>
      {remainingTime ? <InputForm ref={inputRef} /> : <ButtonPlay />}
    </Fragment>
  );
};

export default InputNumber;
