import { BaseEdge, getStraightPath } from "reactflow";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const handleStyle = {
    color: "orange",
    width: "3px",
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={handleStyle} />
    </>
  );
}
