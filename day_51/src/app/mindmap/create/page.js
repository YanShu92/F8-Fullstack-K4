"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { postMindmap } from "../../serverMindmap/serverMinmap.js";
import moment from "moment";
const CreateMinmap = () => {
  const { push } = useRouter();
  const id = uuidv4();
  const nodes = [
    {
      id: "0",
      type: "textUpdater",
      data: { label: "My Mindmap" },
      position: { x: 0, y: 50 },
    },
  ];
  const edges = [];
  const data = {
    id,
    name: "Mindmap không có tên",
    desc: "chưa có mô tả",
    title: "Mindmap không có tên",
    descTitle: "",
    nodes,
    edges,
    createdDate: moment().format("DD/MM/YYYY HH:mm:ss"),
    openGraph: {
      images: [
        "http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg",
      ],
    },
  };
  postMindmap(data);
  useEffect(() => {
    push(`/mindmap/${id}`);
  }, []);
  return <div></div>;
};

export default CreateMinmap;
