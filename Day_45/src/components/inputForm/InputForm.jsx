import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "../inputForm/InputForm.scss";
import { useDispatch, useSelector } from "react-redux";

const InputForm = forwardRef(function InputForm(props, ref) {
  const inputRef = useRef();
  const maxNumber = useSelector((state) => state.maxNumber);
  const correctNumber = useSelector((state) => state.correctNumber);
  const maxTime = Math.ceil(Math.log2(maxNumber));

  const dispatch = useDispatch();
  const listInput = useSelector((state) => state.listInput);
  const remainingTime = useSelector((state) => state.remainingTime);
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  });
  // nhập kí tự số thì autofocus input
  const handleKeyPress = useCallback((e) => {
    if (e.key >= 48 || e.key <= 57) {
      inputRef.current.focus();
    }
  });
  // regex nhập vào input
  const handleInput = useCallback((e) => {
    // ngăn nhập e,E, +, -
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

    if (e.key !== "Backspace" && inputRef.current.value * 10 > maxNumber)
      e.preventDefault();

    if (
      e.key === "Enter" &&
      inputRef.current.value <= maxNumber &&
      inputRef.current.value >= 1
    ) {
      if (
        listInput.map((item) => item.number).includes(inputRef.current.value)
      ) {
        console.log("đã nhập");
        return;
      }
      if (correctNumber === +inputRef.current.value) {
        console.log("chính xác");
        dispatch({
          type: "input/addNumberCorrect",
          payload: !listInput.length
            ? { number: inputRef.current.value, maxTime: maxTime, right: true }
            : { number: inputRef.current.value, right: true },
        });
      } else {
        dispatch({
          type: "input/addNumber",
          payload: !listInput.length
            ? { number: inputRef.current.value, maxTime: maxTime }
            : { number: inputRef.current.value },
        });
      }
    }
  });
  // Ngăn copy/paste e,E
  const handleInputCopy = useCallback((e) => {
    inputRef.current.value = inputRef.current.value.replace(/[e\+\-\E]/gi, "");
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    inputRef?.current?.addEventListener("keydown", handleInput);
    inputRef?.current?.addEventListener("input", handleInputCopy);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      inputRef?.current?.removeEventListener("keydown", handleInput);
      inputRef?.current?.removeEventListener("input", handleInputCopy);
    };
  }, [handleKeyPress, handleInput, handleInputCopy]);

  return (
    <Fragment>
      <h1 className="input-title">Hãy nhập số bạn dự đoán</h1>
      <input
        type="number"
        ref={inputRef}
        className="input-form"
        placeholder="10"
      />
    </Fragment>
  );
});

export default InputForm;
