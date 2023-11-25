import React, { useEffect } from "react";
import "./Modal.scss";

function Modal({ setOpenModal, deleteHistories }) {
  const handlePress = (e) => {
    console.log(e.key);
    if (e.key === "Escape") setOpenModal(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [handlePress]);
  return (
    <div className="modal-box">
      <div
        className="overlay-modal"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        {" "}
      </div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Xoá tất cả lịch sử chơi?</h2>
        </div>
        <div className="body">
          <p>
            Bạn chắc chắn chứ? Bạn sẽ không thể giữ lại lịch sử chơi trong quá
            khứ sau khi bấm xoá.
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Giữ lại
          </button>
          <button
            onClick={() => {
              deleteHistories();
              setOpenModal(false);
            }}
          >
            Xóa luôn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
