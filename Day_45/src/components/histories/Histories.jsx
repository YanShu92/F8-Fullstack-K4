import { useSelector } from "react-redux";
import "../histories/Histories.scss";
import { v4 as uuidv4 } from "uuid";
import Modal from "../modal/Modal";
import { Fragment, useState } from "react";
// const { v4: uuidv4 } = require("uuid");

const Histories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data = localStorage.getItem("data");
  //   const listInput = useSelector((state) => state.listInput);
  //   const data1 = [];
  //   listInput.map((item) => {
  //     data1.push({ number: item });
  //   });
  //   const data = [];
  //   data.push(data1);
  //   data.push(data1);
  //   localStorage.setItem("data", JSON.stringify(data));
  //   console.log(data);
  return (
    <div className="histories-list">
      {!data || !data.length ? (
        <div></div>
      ) : (
        data.map((dataItem, index) => (
          <article className="histories-item" key={uuidv4()}>
            <table className="histories-table">
              <caption className="count-times">
                Số lần chơi: {data.length - index}/{data.length}
              </caption>
              <caption className="max-times">Số lần nhập tối đa: 7</caption>
              <caption className="rate">Tỉ lệ đúng: 0%</caption>
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
        ))
      )}
      <Fragment>
        <button
          className="delete-histories"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <img src="src/assets/images/trash.svg" alt="trash" />
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </Fragment>
    </div>
  );
};

export default Histories;
