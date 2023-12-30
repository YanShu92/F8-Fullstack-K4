"use client";
import React, { useRef, useState } from "react";
import { updateMindmapById } from "../../serverMindmap/serverMinmap.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faShare,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextSeo } from "next-seo";
const MindmapHeader = ({ data }) => {
  const url = process.env.AUTH0_BASE_URL;
  // const url = "http://localhost:3000";
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const [imgMindmap, setImg] = useState(data?.openGraph?.images[0]);
  const [modal, setModal] = useState(false);
  const [isPublic, setPublic] = useState(false);
  const [nameMindmap, setName] = useState(data.title);
  const [descMindmap, setDesc] = useState(data.desc);
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataId = JSON.parse(sessionStorage.getItem("mapdata"));
    data.openGraph.images.shift(imgMindmap);
    const dataHeader = { title: nameMindmap, desc: descMindmap };
    updateMindmapById({ ...data, ...dataId, ...dataHeader });
    toast.success("Lưu thành công, chia sẻ để enjoy moment!");
  };
  const handleSave = () => {
    const dataId = JSON.parse(sessionStorage.getItem("mapdata"));
    const name = nameRef.current?.textContent;
    const desc = descRef.current?.textContent;
    setName(name);
    setDesc(desc);
    const dataHeader = { title: name, desc };
    updateMindmapById({ ...data, ...dataId, ...dataHeader });
    toast.success("Cập nhật thành công");
  };
  return (
    <>
      {/* <NextSeo title={nameMindmap} description={descMindmap} /> */}
      <div className="text-start">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-4/5">
              <h1
                className="text-2xl md:text-4xl font-medium my-2 outline-0"
                contentEditable="true"
                suppressContentEditableWarning={true}
                spellCheck="false"
                ref={nameRef}
              >
                {data.title}
              </h1>

              <p
                className="outline-0"
                contentEditable="true"
                spellCheck="false"
                suppressContentEditableWarning={true}
                ref={descRef}
              >
                {data.desc}
              </p>
            </div>
            <div className="w-1/5">
              <div className="flex justify-end items-center">
                <button
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
                  target="_blank"
                  rel="noopener"
                  onClick={handleSave}
                >
                  <FontAwesomeIcon icon={faSave} />
                  <span className="ml-2">Lưu thay đổi</span>
                </button>
                <button
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source="
                  aria-label="Share on Linkedin"
                  onClick={() => {
                    const name = nameRef.current.textContent;
                    const desc = descRef.current.textContent;
                    setName(name);
                    setDesc(desc);
                    setModal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faShare} />
                  <span className="ml-2">Chia sẻ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <form action="" onSubmit={handleSubmit}>
            <div
              className="fixed z-10 overflow-y-auto top-0 w-full left-0"
              id="modal"
            >
              <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-900 opacity-75" />
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                    &zeroWidthSpace;
                  </span>
                  <div
                    className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="mx-auto max-w-sm text-center flex flex-wrap flex-row-reverse justify-center share-option">
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="radio2"
                            className="hidden"
                            type="radio"
                            value="public"
                            name="mode"
                            // checked="false"
                            defaultChecked={isPublic}
                          />
                          <label
                            htmlFor="radio2"
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                              setPublic(true);
                            }}
                          >
                            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
                            Công khai
                          </label>
                        </div>
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="radio1"
                            className="hidden"
                            type="radio"
                            value="private"
                            // checked
                            defaultChecked={!isPublic}
                            name="mode"
                          />
                          <label
                            htmlFor="radio1"
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                              setPublic(false);
                            }}
                          >
                            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
                            Riêng tư
                          </label>
                        </div>
                      </div>
                      {!isPublic ? (
                        <div>
                          <p>
                            Nếu chọn riêng tư, chỉ có bạn mới được quyền xem
                            Mindmap này
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="group relative">
                            <label
                              htmlFor="share-input"
                              className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                            >
                              Liên kết chia sẻ
                            </label>
                            <input
                              id="share-input"
                              className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                              readOnly=""
                              type="url"
                              defaultValue={`${url}/mindmap/${data.id}`}
                            />
                          </div>
                          <div className="group relative mt-3">
                            <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                              Tiêu đê
                            </label>
                            <input
                              className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                              type="text"
                              defaultValue={nameMindmap}
                              onChange={(e) => {
                                setName(e.target.value);
                                nameRef.current.textContent = e.target.value;
                              }}
                              name="title"
                            />
                          </div>
                          <div className="group relative mt-3">
                            <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                              Mô tȧ
                            </label>
                            <textarea
                              type="text"
                              className="peer h-20 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                              name="description"
                              defaultValue={descMindmap}
                              onChange={(e) => {
                                setDesc(e.target.value);
                                descRef.current.textContent = e.target.value;
                              }}
                            />
                          </div>
                          <div className="group relative mt-3">
                            <label className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                              Ảnh chia sé
                            </label>
                            <input
                              className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                              type="url"
                              defaultValue="http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg"
                              name="image"
                              onChange={(e) => {
                                setImg(e.target.value);
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                        <span> Đóng</span>
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Lưu lại</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
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
      </div>
    </>
  );
};

export default MindmapHeader;
