"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenSquare,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  getMindmaps,
  updateMindmapAll,
  deleteMindmapById,
} from "../serverMindmap/serverMinmap.js";

const Mindmap = () => {
  const [mindmap, setMindmap] = useState(null);
  console.log(mindmap);
  const [modal, setModal] = useState(false);
  let index = 1;
  const handleDelete = (data) => {
    setModal(false);
    deleteMindmapById(data);
    const remainMindmap = mindmap.filter((item) => item.id !== data.id);
    setMindmap(remainMindmap);
  };
  useEffect(() => {
    getMindmaps().then((data) => setMindmap(data));
  }, []);
  return (
    <div className="container px-4 mx-auto">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-medium my-2">
          Mindmap của tôi
        </h1>
        <div className="py-4">
          <Link
            className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
            href="/mindmap/create"
          >
            Thêm mới
          </Link>
        </div>
        <div className="py-4">
          <div className="flex items-center py-2">
            <span className="w-1/6 text-center">
              <input type="checkbox" wfd-id="ide" />
            </span>
            <span className="w-1/2">
              <span className="text-xs uppercase text-gray-600 font-bold">
                Tên
              </span>
            </span>
            <span className="w-1/4">
              <span className="text-xs uppercase text-gray-600 font-bold">
                Tạo lúc
              </span>
            </span>
            <span className="w-1/4">
              <span className="text-xs uppercase text-gray-699 font-bold">
                Hành động
              </span>
            </span>
          </div>
        </div>
        {mindmap &&
          mindmap?.map((item) => (
            <div className="hover:bg-gray-200 cursor-pointer bg-white shadow flex items-center mb-5 rounded-lg">
              <div className="w-1/6 text-center">
                <input type="checkbox" />
              </div>
              <div className="w-1/2">
                <div className="flex items-center">
                  <div className="ml-4">
                    <span className="capitalize block text-gray-800">
                      <Link href={`/mindmap/${item.id}`}>{item.name}</Link>
                    </span>
                    <span className="text-sm block text-gray-600">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <span className="text-gray-600 text-sm">
                  {item.createdDate}
                </span>
              </div>
              <div className="w-1/4">
                <Link href={`/mindmap/${item.id}`}>
                  <span className="text-gray-600 text-sm px-2">
                    <FontAwesomeIcon icon={faPenSquare} key={++index} />
                  </span>
                </Link>
                <span
                  className="text-gray-600 text-sm px-2"
                  onClick={() => {
                    setModal(true);
                    // handleDelete(item);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} key={++index} />
                  {modal && (
                    <main class="fixed top-0 left-0 right-0 antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden cursor-default">
                      <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                        <div class="bg-black/50 opacity-25 w-full h-full absolute z-10 inset-0"></div>
                        <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                          <div class="md:flex items-center">
                            <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                              <FontAwesomeIcon
                                icon={faTriangleExclamation}
                                className="fa-2x"
                                style={{ color: "red" }}
                                key={++index}
                              />
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                              <p class="font-bold">Bạn muốn xóa mindmap này?</p>
                              <p class="text-sm text-gray-700 mt-1">
                                Nếu xóa bạn không thể phục hồi dữ liệu
                              </p>
                            </div>
                          </div>
                          <div class="text-center md:text-right mt-4 md:flex md:justify-end ">
                            <button
                              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(item);
                              }}
                            >
                              Có xóa
                            </button>
                            <button
                              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModal(false);
                              }}
                            >
                              Không
                            </button>
                          </div>
                        </div>
                      </div>
                    </main>
                  )}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mindmap;
