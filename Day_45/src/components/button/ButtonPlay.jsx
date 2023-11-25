import { useDispatch, useSelector } from "react-redux";
import "../button/ButtonPlay.scss";
import { useEffect } from "react";
export const ButtonPlay = () => {
  const dispatch = useDispatch();
  const remainingTime = useSelector((state) => state.remainingTime);
  const isCorrect = useSelector((state) => state.isCorrect);
  const handlePlayAgain = () => {
    dispatch({
      type: "button/playAgain",
    });
  };
  const handleEnter = (e) => {
    // if ((remainingTime === 0) | (isCorrect === true)) {
    //   if (e.key === "Enter") {
    //     dispatch({
    //       type: "button/playAgain",
    //     });
    //   }
    // }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [handleEnter]);
  return (
    <button className="play-again" onClick={handlePlayAgain}>
      Chơi lại
    </button>
  );
};
