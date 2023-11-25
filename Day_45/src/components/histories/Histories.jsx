import { useDispatch, useSelector } from "react-redux";
import "../histories/Histories.scss";
import { v4 as uuidv4 } from "uuid";
import Modal from "../modal/Modal";
import { Fragment, useEffect, useState } from "react";
// const { v4: uuidv4 } = require("uuid");

const Histories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const dataObj = useSelector((state) => state.data);
  console.log(dataObj);
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const deleteHistories = () => {
    localStorage.removeItem("data");
    dispatch({
      type: "histories/delete",
    });
  };
  return (
    <div className="histories-list">
      {!data || !data.length ? (
        <div></div>
      ) : (
        <Fragment>
          {data.map((dataItem, index) => (
            <article className="histories-item" key={uuidv4()}>
              <table className="histories-table">
                <caption className="count-times">
                  Số lần chơi: {data.length - index}/{data.length}
                </caption>
                <caption className="max-times">
                  Số lần nhập tối đa: {dataItem[0].maxTime}
                </caption>
                <caption className="rate">
                  Tỉ lệ đúng:
                  {dataItem[dataItem.length - 1]?.right
                    ? (
                        ((dataItem[0].maxTime - dataItem.length + 1) /
                          dataItem[0].maxTime) *
                        100
                      ).toFixed(2)
                    : (
                        ((dataItem[0].maxTime - dataItem.length) /
                          dataItem[0].maxTime) *
                        100
                      ).toFixed(2)}
                  %
                </caption>
                <thead>
                  <tr>
                    <td style={{ width: "50%" }}>Số lần nhập</td>
                    <td style={{ width: "50%" }}>Số nhập vào</td>
                  </tr>
                </thead>
                <tbody>
                  {dataItem.map((item, index) => {
                    return (
                      <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{item.number}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </article>
          ))}
          <button
            className="delete-histories"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <img src="src/assets/images/trash.svg" alt="trash" />
          </button>
          {modalOpen && (
            <Modal
              setOpenModal={setModalOpen}
              deleteHistories={deleteHistories}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Histories;
