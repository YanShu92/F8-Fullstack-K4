"use client";
import MindmapHeader from "./MindmapHeader";
import MindmapFlowCustom from "./MindmapFlowCustom";
import { useEffect, useState } from "react";
import { getMindmapById } from "../../serverMindmap/serverMinmap.js";

const CreateMindmap = ({ params }) => {
  // console.log(params);
  const { id } = params;
  const [data, setData] = useState(null);
  useEffect(() => {
    getMindmapById(id).then((data) => setData(data));
  }, []);
  return (
    <div className="py-5 mx-auto">
      {data && (
        <>
          <MindmapHeader data={data} />
          <MindmapFlowCustom data={data} />
        </>
      )}
    </div>
  );
};

export default CreateMindmap;
